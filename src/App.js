import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [Color, setColor] = useState('')

  const [error, seterroe] = useState('')
  const [list, setlist] = useState(new Values("#f15025").all(Range))

  const handelsubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(Color).all(10)
      setlist(colors)
    } catch (error) {
      seterroe(true)
    }

  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handelsubmit}>
          <input
            type="text"
            value={Color}
            onChange={(e) => setColor(e.target.value)} placeholder='#fa1832'
            className={`${error ? 'error' : null}`} />

          <button type="submit" className='btn'>Submit</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => {
            return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
          })
        }
      </section>
    </>
  )
}

export default App
