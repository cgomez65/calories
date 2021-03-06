import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Home.css'

class Home extends Component {
  render () {
    return (
      <div>
        <section className='hero'>
          <div className='hero-body'>
            <div className='container'>
              <center><h1 className='title has-text-black is-1'> &lt; Calories </h1></center>
              <center><button className='button is-large is-outlined'><Link to='/BMI'>Get Started</Link></button></center>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
