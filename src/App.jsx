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
    </div>
  )
}

export default App