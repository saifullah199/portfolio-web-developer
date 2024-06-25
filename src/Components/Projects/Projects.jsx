import React from 'react';

const Projects = () => {
    return (
        <div className="mt-10 bg-[#F9EBEA]">
             <div className="p-10">
                <h3 className="text-4xl font-bold text-center my-10">My Projects </h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className="card bg-base-100 w-80 shadow-xl">
  
                    <div className="card-body">
                        <h2 className="card-title">Forests To Farms</h2>
                        <div className=''>
                            <button className='btn'> 
                                <a href="https://jovial-longma-b3ea85.netlify.app/" target="_blank" rel="noopener noreferrer">Live </a>
                            </button>
                            <button className='btn'>
                                <a href="https://github.com/saifullah199/forests-to-farms" target="_blank" rel="noopener noreferrer" className='mx-3'>Client </a>
                            </button>
                            <button className='btn'>
                                <a href="https://github.com/saifullah199/forests-to-farms-server" target="_blank" rel="noopener noreferrer">Server</a>
                            </button>
                        </div>
                        <p>I will create interactive and feature-rich web applications with JavaScript,
                           ensuring seamless functionality and an engaging user experience.</p>
    
                    </div>
                    </div>

                    <div className="card bg-base-100 w-80 shadow-xl">
  
                    <div className="card-body">
                        <h2 className="card-title">Feed Your Community</h2>
                        <div className=''>
                            <a href="https://timely-beignet-e640dc.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                            <a href="https://github.com/saifullah199/feed-your-community-client" target="_blank" rel="noopener noreferrer" className='mx-3'>Client Code</a>
                            <a href="https://github.com/saifullah199/feed-your-community-server" target="_blank" rel="noopener noreferrer"> Server Code</a>
                        </div>
                        <p>I will create interactive and feature-rich web applications with JavaScript,
                           ensuring seamless functionality and an engaging user experience.</p>
    
                    </div>
                    </div>

                    <div className="card bg-base-100 w-80 shadow-xl">
  
                    <div className="card-body">
                        <h2 className="card-title">Babui Pakhir Basha</h2>
                        <div >
                            <a href="https://melodic-gingersnap-60df56.netlify.app/" target="_blank" rel="noopener noreferrer" >Live Link</a>
                            <a href="https://github.com/saifullah199/babui-pakhir-basha" target="_blank" rel="noopener noreferrer" className='mx-3'>Client Code</a>
                            <a href="https://github.com/saifullah199/babui-pakhir-basha-server" target="_blank" rel="noopener noreferrer"> Server Code</a>
                        </div>
                        <p>I will create interactive and feature-rich web applications with JavaScript,
                           ensuring seamless functionality and an engaging user experience.</p>
    
                    </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Projects;