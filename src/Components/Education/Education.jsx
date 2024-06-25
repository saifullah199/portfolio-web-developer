

const Education = () => {
    return (
        <div className="mt-10">
            <h3 className="text-4xl font-bold text-center my-10">Education </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="text-center">
                    <h3 className="text-2xl font-bold"> BSc in Mathematics</h3>
                    <p className="font-bold">M M College, Jashore / 2013-2019 </p>
                    <p className="font-semibold">I have successfully completed BSc in Mathematics 
                        with 3.19 CGPA</p>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-bold">Higher Secondary Certificate</h3>
                    <p className="font-bold">Al-Hera College, Jashore /2010-2012</p>
                    <p className="font-semibold"> I have completed my HSC with 4.30 GPA</p>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-bold">Secondary School Certificate </h3>
                    <p className="font-bold">Shahabajpur High School / 2005-2009</p>
                    <p className="font-semibold"> I have completed SSC with 5.00 GPA </p>
                </div>
            </div>
        </div>
    );
};

export default Education;