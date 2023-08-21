import React from 'react'
import Navbars from 'components/Navbars'
import Aboutbg from 'asstes/Aboutbg.jpg'
import './styles/Aboutbgbtn.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardGroup,Card,Row,Col} from 'react-bootstrap';


const About = () => {
  return (
    <div className='w-full flex flex-col items-center bg-[#161616] '>
      <div className='bg-cover bg-no-repeat w-full max-w-full h-[70vh]  md:w-full' style={{ backgroundImage: `url(${Aboutbg})`, backgroundPosition:`center`}} >
        <Navbars/>
            {/* the hero side of the about page */}
          <div className='flex flex-col w-full items-center justify-center '>
            <h1 className='flex flex-col text-2xl lg:text-6xl items-center justify-center font-poppins text-white '>We are changing the <span>Whole Game</span></h1>

              {/*  */}
            <div className='flex lg:w-1/6 h-fit items-center justify-between gap-4 w-1/2'>
              <button class="btn h-[50px]">
                  Button
              </button>

              <button class="btn h-[50px]">
                  Button
              </button>
            </div>
          </div>
          </div>
          {/* the div section that contains the our stroy */}
          <div className='w-full h-fit flex flex-col lg:flex-row  pt-3 pl-4 pr-4'>
              <div className='w-full lg:w-1/2 flex flex-col items-start justify-between'>
                  <h2>Our Story</h2>
                  <p className='text-sm text-white font-poppins '>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit illo animi voluptate mollitia numquam non reprehenderit similique inventore rerum sint, nemo commodi reiciendis magni aut illum odio ipsam quasi neque? Minus, velit delectus saepe inventore sapiente corrupti non? At, atque!
                  </p>

                  <div className='w-full h-fit flex items-center justify-center mb-3'>
                    <div class="spinner">
                      <div></div> 
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>

                  <div className='w-full flex flex-col mt-4'>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit laudantium esse odit inventore fugiat dolorum distinctio saepe, quaerat ipsum quisquam quod earum mollitia hic, aperiam similique nesciunt illo vitae corrupti.
                    </p>

                  </div>

              </div>

              <div className='w-full lg:w-1/2 flex flex-col justify-between items-center'>
                  <div className='flex w-full ml-2 justify-between'>
                      <h1>01.</h1>
                      <div className='w-full flex flex-col ml-3'>
                        <h3>6 Years of intense research</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quibusdam voluptatibus reprehenderit sint. Id magnam inventore placeat quae asperiores sint, perferendis, accusamus ullam sapiente laborum consequatur voluptatum perspiciatis ab iusto.
                        </p>
                      </div>
                  </div>
                  <div className='flex w-full ml-2 justify-between'>
                      <h1>02.</h1>
                      <div className='w-full flex flex-col ml-3'>
                        <h3>6 Years of intense research</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quibusdam voluptatibus reprehenderit sint. Id magnam inventore placeat quae asperiores sint, perferendis, accusamus ullam sapiente laborum consequatur voluptatum perspiciatis ab iusto.
                        </p>
                      </div>
                  </div>
                  <div className='flex w-full ml-2 justify-between'>
                      <h1>03.</h1>
                      <div className='w-full flex flex-col ml-3'>
                        <h3>6 Years of intense research</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quibusdam voluptatibus reprehenderit sint. Id magnam inventore placeat quae asperiores sint, perferendis, accusamus ullam sapiente laborum consequatur voluptatum perspiciatis ab iusto.
                        </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Our Missions Section */}

          <div className='w-full flex items-center justify-between pl-4 pr-4'>
              <div className='lg:w-1/2  '>
                  <div className='w-full flex items-start'>
                    <h1 className='text-white font-poppins lg:text-4xl text-2xl'>Our Mission</h1>
                  </div>
                  <div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, hic ad! Vel ducimus illum amet, perferendis alias molestias temporibus laboriosam unde dolores laudantium tenetur cupiditate ut maiores eos in similique.
                    </p>
                  </div>
                  <div className='flex w-full items-center justify-between '>
                      <div>
                        <h2>94%</h2>
                        <p>client Retainig</p>
                      </div>
                      <div>
                        <h2>70M+</h2>
                        <p>Emails Per month</p>
                      </div>
                      <div>
                        <h2>10k</h2>
                        <p>Monthly Work Done</p>
                      </div>
                  </div>
              </div>

              <div className='w-full lg:w-1/2 '>

              </div>
          </div>

          {/* Our vision sections  */}

          <div className='w-full bg-[#161616] flex pl-4 mt-2'>
              <div className='w-full lg:w-1/2 '>

              </div>
              <div className='lg:w-1/2 w-full'>
                  <div className='w-full flex items-center justify-center'>
                    <h1 className='text-white font-poppins'>Our Vision</h1>
                  </div>
                  <div className='w-full'>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam molestiae itaque laboriosam cupiditate velit. Repudiandae aliquid officia necessitatibus repellat vitae sunt, laboriosam a sit! Fuga deserunt rem pariatur recusandae!
                      </p>
                  </div>
                  <div></div>
              </div>
          </div> 

          {/* Leading Strong teams */}

          <div className='w-full flex items-center justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div class="card">Card 1</div>
            <div class="card">Card 2</div>
            <div class="card">Card 3</div>
          </div>
    </div>
  )
}

export default About