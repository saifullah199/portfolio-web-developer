

const Banner = () => {
    return (
        <div className="lg:flex bg-[#F9EBEA] p-8 ">
            <div className="flex-1 space-y-6   ">
                <p className="text-2xl font-semibold">Hi, I am</p>
                <h2 className="text-5xl font-bold">Md Khalid <br /> Saifullah</h2>
                <p className="text-xl font-semibold">Full Stack Developer</p>
                <p className=" font-semibold ">Turning innovative ideas into reality with code. 
                     Bridging the gap between imagination and execution, 
                     delivering solutions that drive business success. Get ready to experience development excellence. </p>
                <button className="btn bg-orange-400 ">
                    <a href="" target="_blank" rel="noopener noreferrer" className=" font-semibold " >Resume </a>
                </button>
            </div>
            <div className="flex-1 text-center p-5 ">
                <img src="https://i.ibb.co/gyZMq41/developer-khalid.jpg" className="h-[150px] lg:h-[400px] w-[150px] lg:w-[400px] rounded-full  " alt="" />
            </div>
 
        </div>
    );
};

export default Banner;