

const AboutMe = () => {
    return (
        <div className="mt-10 bg-[#F9EBEA]">
           <div className="p-10">
           <h2 className="text-4xl font-bold text-center my-10">About Me</h2>
           <p className="text-center font-bold w-3/4 mx-auto"> I am a passionate Web Developer. I enjoy developing simple,clean and slick websites that provide real value to the end user.
             Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets clients 
             requirements.</p>
             <div className="grid grid-cols-1 lg:grid-cols-4 mt-9 text-center">
                <p>Name: <br /> <span className="font-semibold ">Md Khalid Saifullah</span> </p>
                <p> Email: <br /> <span  className="font-semibold ">mdkhalidsaifullah199@gmail.com</span> </p>
                <p>Speciality: <br /> <span  className="font-semibold ">Full Stack Developer</span> </p>
                <p>Location: <br /> <span  className="font-semibold ">Dhaka, BD</span> </p>
             </div>
           </div>
        </div>
    );
};

export default AboutMe;