import React from 'react'
import Logo from './Logo'
import MenuLinks from './MenuLinks'

const Navbar = () => {
  return (
    <section id="navBlock">
        <article>
            <Logo/>
            <MenuLinks/>
        </article>
    </section>
  )
}

export default Navbar