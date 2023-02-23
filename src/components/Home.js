import React from 'react';
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram  } from "react-icons/ai";



const Home = () => {
  return (
   <>
    <div className='home' id='home'>
      <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>


    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
               We are your one and only solution to the tech problems you face every day.we are leading tech companny tech company whose aim is to increse the problem solving ability in children. 
            </p>
        </div>
    </div>


    <div className="home3" id='about' >
      <div>
        <h1> Who we are?</h1>
        <p>

      
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa vero, eius unde sed quisquam enim consectetur animi quis, placeat hic amet cupiditate, nemo nobis alias perferendis dignissimos ratione magnam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, similique sit! Voluptatum fugiat molestiae numquam repudiandae commodi impedit voluptate voluptates fugit sed dolorem ipsam autem, eveniet, expedita eligendi quaerat id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto atque quidem molestias, veritatis repudiandae totam quo dolorum error eos ipsa enim esse ea blanditiis ipsam eveniet. Ex, nisi neque.
        </p>
      </div>
    </div>

    <div className="home4" id='bands' >
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}> 
             <AiFillGoogleCircle/>
             <p>Google</p>
          </div>

          <div style={{animationDelay:"0.5s"}}> 
             <AiFillAmazonCircle/>
             <p>Amazon</p>
          </div>

          <div style={{animationDelay:"0.7s"}}> 
             <AiFillYoutube/>
             <p>Youtube</p>
          </div>

          <div style={{animationDelay:"1s"}}> 
             <AiFillInstagram/>
             <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>






   
   
   </>
  )
}

export default Home
