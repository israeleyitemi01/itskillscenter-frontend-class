import React from 'react'

function Header() {
  return (
    <div>
        <header>
            <img src="img/logo-banji.svg" alt="" className="logo"/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header