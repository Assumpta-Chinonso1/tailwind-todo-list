import React from 'react'
import image1 from './assets/tailwind.jpg'

const App = () => {
  return (
    <div className='text-gray-600' >

      

      <div> {/*--Start of the navigation bar --*/}
         <nav>
          <div>
            <li>
              <a href="/">Tailwind</a>
            </li>
          </div>
          <ul>
            <li class='text-gray-900' > 
            
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
      </div>  {/*---End of the navigation bar---*/}

       <main>
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>

        <header>
          <h2 className='text-gray-700 text-xl'>Welcome to Tailwind</h2>
          <h3>Your one-stop solution for modern web design</h3>
        </header>

        <div>
          <h4>Your go-to resource for Tailwind CSS</h4>
         
            {/* Cards go here */}
            <div>
            <img src={image1} alt="" srcset="" />
            
               <div>
                <span>Card Title</span>
                <span>Card Description</span>
               </div>
          </div>
        </div>
        <div>
          <h4>Your go-to resource for Tailwind CSS</h4>
        </div>
              <div>
                {/* Additional card added here */}
                <div>
                  <img src="" alt="" srcset="" />
                  <div>
                    <span>Card Title</span>
                    <span>Card Description</span>
                  </div>
                  <div>
                    <button>Learn More</button>
                  </div>
                  </div>
              </div>
       </main>
       
    </div>
  )
}

export default App