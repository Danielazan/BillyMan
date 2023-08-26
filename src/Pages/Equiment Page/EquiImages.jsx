import {useState} from 'react'
import "./styles/voltagebtn.css"
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'components/Navbars';
import Excavator from 'asstes/Equipments/excavato.jpg'
import Equi2 from 'asstes/Equipments/equi2.jpg'
import Equi3 from 'asstes/Equipments/equi3.jpg'
import Equi4 from 'asstes/Equipments/equi4.jpg'
import Footer from 'Pages/Hero Page/Footer';


const imagesList = [
    {
      id: 1,
      images: [Excavator,Equi2],
      alt: "[] 1",
    },
    {
      id: 2,
      images: [Equi3,Equi4],
      alt: "[] 2",
    },
    {
      id: 3,
      images: [Equi2,Excavator],
      alt: "[] 3",
    },
    {
      id: 4,
      images: [Excavator,Equi2],
      alt: "[] 1",
    },
  ];


const EquiImages = () => {

    
    const [showAllCards, setShowAllCards] = useState(false);

    const visibleCards = showAllCards ? imagesList : imagesList.slice(0, 3);

  const handleButtonClick = () => {
    
    setShowAllCards(true);
  };

  const Desfun = () => {
    setShowAllCards(true);
  };
  return (
  <div className="w-full ">
      <Navbar/>
    <div className='w-full h-fit flex flex-col md:flex-row items-center px-2'>
        <div className=' w-full md:w-2/4 h-[]'>
            <Carousel>
                {visibleCards.map((image)=>(
                   
                    <Carousel.Item interval={2000} as={"div"} >
                <img className=" h-[420px] w-full " src={image.images[0]} alt="Image description"/>
                    <Carousel.Caption>
                      <h3 className='text-black'>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                
                  
                ))}
            </Carousel>
        </div>

        <div className='w-full md:w-2/4  h-fit px-3'>
            <div className='w-full flex items-center justify-center'>
              <h1 className="text-poppins text-white text-2xl">Discover Our High-Quality Road Construction Equipment</h1>
            </div>

            <div className='w-full '>
              <div className='w-full '>
                  <p className='text-poppins text-[#c0ccc0] '>
                  Road construction is a specialized area of construction that requires various specialized equipment to make the job safer and easier. At our company, we offer a wide range of high-quality road construction equipment that can help you achieve efficient and safe projects. Our equipment is designed to meet the demands of different types of road construction projects, whether it's building a new road or rehabilitating an old one. We offer a variety of machines, including asphalt plants, cold planers, drum rollers, and more. Our equipment is designed to provide the best results while minimizing the labor cost and time required for the project. With our commitment to excellence and innovation, we aim to be the go-to resource for all your road construction equipment needs. Join us on this journey as we help you build the path to success.
                  </p>
              </div>

              <div className='w-full flex items-center justify-center'>
                <button className="voltage-button">
                  View All Equipments
                </button>
              </div>

            

            </div>
        </div>
    </div>
      
        {/* section for machine image display */}
      <div className="w-full h-fit p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleCards.map((imgs)=>(
                <div className="h-[50vh] relative bg-red-400 flex  items-center justify-center" >
                    <div className="w-full h-full"style={{ backgroundImage: `url(${imgs.images[0]})`,backgroundPosition:`center`, backgroundSize: `cover`}}></div>
                     <div className='absolute w-[15rem] h-[7rem]  bottom-3 left-18 flex flex-col items-center justify-center'>
                        <h1 className="text-2xl text-poppins font-bold text-[#fdc901]">Machine Name</h1>
                        <h1 className="text-poppins text-xl text-[#f6f7f9]">Machine Price</h1>

                        <a href="#des">
                          <button class="desbtn" onclick={Desfun()}>
                              <span class="desbtn-content">Description</span>
                          </button>
                        </a>

                     </div>
                </div>
              ))}
          </div>

                {/* button to view all equipments */}
          <div className='w-full h-fit flex items-center justify-center mt-2'>
              {!showAllCards && (
                <button data-label="Register" class="rainbow-hover" onClick={()=>handleButtonClick()}>
                <span class="sp">See All Equipments</span>
              </button>
          )}
          </div>
      </div>

      {/* Machine descrition */}

      <div className="w-full h-fit bg-white p-4" id="des">
            <div class="flex flex-col">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                          <table class="min-w-full text-center text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                              <tr>
                                <th scope="col" class="px-6 py-4">Name</th>
                                <th scope="col" class="px-6 py-4">Price</th>
                                <th scope="col" class="px-6 py-4">Types and Sizes</th>
                              </tr>
                            </thead>
                            <tbody>

                              <tr
                                class="border-b border-warning-200 bg-warning-100 text-neutral-800">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                  Warning
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                              </tr>
                              <tr
                                class="border-b border-info-200 bg-info-100 text-neutral-800">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                  Info
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                              </tr>
                              <tr
                                class="border-b border-neutral-100 bg-neutral-50 text-neutral-800 dark:bg-neutral-50">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                  Light
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                              </tr>
                              <tr
                                class="border-b border-neutral-700 bg-neutral-800 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                                <td class="whitespace-nowrap px-6 py-4 font-medium">
                                  Dark
                                </td>
                                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                <td class="whitespace-nowrap px-6 py-4">Cell</td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                    </div>
                  </div>
                </div>
      </div>

      {/* Footer */}

      <Footer/>
  </div>
  )
}

export default EquiImages