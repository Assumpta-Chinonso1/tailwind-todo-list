import React from 'react'

const App = () => {
  return (
    <div>


      <div> <!---Beginning of the navigation bar--->
         <nav>
          <div>
            <li>
              <a href="/">Tailwind</a>
            </li>
          </div>
          <ul>
            <li>
              <a href="#">
              <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
         </nav>
      </div> <!---End of the navigation bar--->
       <main>
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>
        <header>
          <h2>Welcome to Tailwind</h2>
          <h3>Your one-stop solution for modern web design</h3>
        </header>
       </main>
    </div>
  )
}

export default App