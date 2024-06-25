

const Skills = () => {
    return (
        <div className="mt-10">
            <h2 className="text-4xl font-bold text-center my-10">Skills</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* JavaScirpt card 1 */}
            <div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
    className="w-[200px] h-[200px] rounded-full"
      src="https://i.ibb.co/3NV22DZ/11669212-20945805.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">JavaScript</h2>
    <p>I will create interactive and feature-rich web applications with JavaScript,
         ensuring seamless functionality and an engaging user experience.</p>
    
  </div>
            </div>
            {/* React card 2 */}
            <div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
    className="w-[200px] h-[200px] rounded-full"
      src="https://i.ibb.co/svWSmRy/12064006-4897896.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">React</h2>
    <p>I will develop dynamic, high-performance user interfaces using React,
         providing a smooth and responsive user experience with reusable components.</p>
    
  </div>
            </div>
            {/* Node.js card 3 */}
            <div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
    className="w-[200px] h-[200px] rounded-full"
      src="https://i.ibb.co/QK47RNL/2546432-340147-PAM5-AX-984.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Node.js</h2>
    <p>I will implement efficient server-side logic and APIs with Node.js,
         enabling robust back-end operations and real-time data handling.</p>
    
  </div>
            </div>
            {/* Express.js card 4 */}
            <div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
    className="w-[200px] h-[200px] rounded-full"
      src="https://i.ibb.co/QK47RNL/2546432-340147-PAM5-AX-984.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Express.js</h2>
    <p>I will build scalable and secure web applications with Express,
         offering a fast and flexible framework for server-side development.</p>
    
  </div>
            </div>
             {/* MongoDB card 5 */}
             <div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
    className="w-[200px] h-[200px] rounded-full"
      src="https://i.ibb.co/3NV22DZ/11669212-20945805.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">MongoDB</h2>
    <p>I will manage and manipulate data with MongoDB, 
        ensuring a flexible and scalable NoSQL database solution tailored to your application's needs.</p>
    
  </div>
            </div>
             {/* Tailwind CSS card 6 */}
             <div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
    className="w-[200px] h-[200px] rounded-full"
      src="https://i.ibb.co/svWSmRy/12064006-4897896.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Tailwind CSS</h2>
    <p>I will design modern, responsive web interfaces using Tailwind CSS,
         delivering aesthetically pleasing and highly customizable layouts.</p>
    
  </div>
            </div>

            {/*  CSS3 card 7 */}
            <div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
    className="w-[200px] h-[200px] rounded-full"
      src="https://i.ibb.co/QK47RNL/2546432-340147-PAM5-AX-984.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">CSS3</h2>
    <p>I will style web applications with CSS3,
         offering visually appealing and responsive designs that enhance user engagement and experience.</p>
    
    
  </div>
            </div>

            {/* HTML5 card 8 */}
            <div className="card bg-base-100 w-80 shadow-xl">
  <figure>
    <img
    className="w-[200px] h-[200px] rounded-full"
      src="https://i.ibb.co/GPdqHJ6/html5.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">HTML5</h2>
    <p>I will structure web content with HTML5, 
        providing a solid foundation for accessibility, performance,
         and SEO-friendly websites.</p>
    
  </div>
            </div>
            </div>
        </div>
    );
};

export default Skills;