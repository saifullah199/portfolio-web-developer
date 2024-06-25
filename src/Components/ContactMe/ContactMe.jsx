import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';
import { TbBrandFiverr } from 'react-icons/tb';

const ContactMe = () => {
    return (
        <div className="mt-10 bg-[#F9EBEA]">
           <div className="p-10">
            <h2 className="text-4xl font-bold text-center my-10">Contact Me</h2>
            <div className='flex justify-evenly'>
                <div className='grid grid-cols-2 text-center font-semibold'>
                <p> Whatsapp: <br /> 01401613913</p>
                <p>Email: <br /> mdkhalidsaifullah199@gmail.com</p>
                </div>
                <div className='space-x-5'>
                    <h3 className='font-semibold text-center '>Let's  Connect </h3>
                <button >
                     <a href="https://www.linkedin.com/in/mern-stack-developer-front-end-web-developer/"
                    target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                 
                 </button>
                <button> 
                    <a href="https://www.facebook.com/khalid.saifullah.399/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </button>
                <button>
                     <a href="https://github.com/saifullah199" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                     </a>
                </button>
                <button>
                    <a href="https://www.upwork.com/freelancers/~01ffa1d361d1ffdb09?s=1110580755107926016" target="_blank" rel="noopener noreferrer">
                        <FaUpwork />
                    </a> 
                </button>
                <button> 
                    <a href="https://www.fiverr.com/saifullah995?public_mode=true" target="_blank" rel="noopener noreferrer">
                        <TbBrandFiverr />
                    </a>
                </button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ContactMe;