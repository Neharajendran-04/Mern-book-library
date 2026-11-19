import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <Header />
      <div className='md:px-20 my-5 p-5'>
        <h1 className='text-center font-bold text-3xl my-5'>Contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium architecto, temporibus, culpa dignissimos cumque repellat natus unde omnis vitae eveniet hic quae laudantium iure enim dolore saepe iusto numquam aliquid?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa ipsam nisi, nesciunt esse voluptas ea molestiae, odio at similique accusamus ex nobis expedita? Quas tempora id iusto porro adipisci.lorem
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum illum excepturi praesentium distinctio quod temporibus ut ex? Voluptas necessitatibus incidunt, saepe accusantium culpa sunt! Quos sit molestias excepturi consequuntur? </p>
          {/* Grid - address, number, email */}
          <div className='md:grid grid-cols-3 items-center mt-5 p-5 md:px-40 md:mt-0'>
            {/* Location */}
             <div className='flex items-center'>
                  <div style={{width : '50px', height : '50px', borderRadius : '50%'}} className='flex items-center justify-center bg-gray-300 '>
                   <FaLocationPin />
                   </div>
                   <p className='ms-5'>123 Main Street, Apt 4B, AnyTown, CA 91234 </p>
                  
             </div>
             {/* number */}
              <div className='flex items-center'>
                  <div style={{width : '50px', height : '50px', borderRadius : '50%'}} className='flex items-center justify-center bg-gray-300 '>
                   <FaPhone />
                   </div>
                   <p className='ms-5'>+91 9087568934 </p>
                  
             </div>
             {/* email */}
              <div className='flex items-center'>
                  <div style={{width : '50px', height : '50px', borderRadius : '50%'}} className='flex items-center justify-center bg-gray-300 '>
                   <FaEnvelope />
                   </div>
                   <p className='ms-5'>contact@bookstore.com </p>
                  
             </div>
          </div>
          {/* message and map section */}
          <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40 '>
                {/* message */}
                <div className='bg-gray-200 text-center p-5'>
                    <h1 className='font-semi-bold text-2xl'>Send Us Message!</h1>
                    <form>
                      <div className='mb-5 mt-10'>
                        <input type="text" placeholder='Name' className='bg-white w-full p-2'/>
                        </div>
                      <div className='mb-5 mt-5'>
                        <input type="email" placeholder='Email' className='bg-white w-full p-2'/>
                        </div>
                      <div className='mb-5 mt-5'>
                        <textArea type="text" placeholder='Message' className='bg-white w-full p-2'/>
                        </div>
                      <div className='my-5'>
                       <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center'>Submit <FaPaperPlane className='ms-2' /></button>
                        </div>
                     
                    </form>
                </div>
                {/* map */}
                <div>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.541959234535!2d76.30948103505033!3d10.00889799134624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Keralam!5e0!3m2!1sen!2sin!4v1795065846244!5m2!1sen!2sin" width="100%" height="450" style={{border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
