import { FaAngellist } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

const WhyUs = () => {
    return (
        <div className="my-6 flex flex-col lg:flex-row max-w-[450px] md:max-w-[750px] lg:max-w-[1200px] mx-auto">
            <div className=" w-11/10 lg:w-1/2">
                <img src="https://i.ibb.co/8rpB0gm/whyus.jpg" alt="" />
            </div>
            <div className=" w-11/10 lg:w-1/2 ml-8 ">
                <div className=" flex-col items-center h-full">
                    <h1 className="text-3xl my-4 text-emerald-500 font-medium mb-20">Why We Are</h1>
                    <div className="flex ">
                        <FaAngellist className="text-6xl mr-3 text-emerald-500"></FaAngellist>
                        <div className="ml-3">
                            <p className="text-xl text-emerald-400 ">Quality Assurance</p>
                            <p className="text-sm text-emerald-300 ">Our products ensure consistent quality, backed by a reputation for excellence and rigorous quality control, providing reliable and safe solutions every time.</p>
                        </div>
                    </div>
                    <div className="flex ">
                        <GiArchiveResearch className="text-7xl mr-3 text-emerald-500"></GiArchiveResearch>
                        <div>
                            <p className="text-xl text-emerald-400 ">Innovation and Research</p>
                            <p className="text-sm text-emerald-300 ">Conduct regular reviews of your budget to ensure that your spending aligns with your financial goals. Analyze your income, expenses, and savings to identify any areas for improvement or adjustment.</p>
                        </div>
                    </div>
                    <div className="flex ">
                        <BsPeopleFill className="text-8xl mr-3 text-emerald-500"></BsPeopleFill>
                        <div>
                            <p className="text-xl text-emerald-400 ">Customer Support and Warranty</p>
                            <p className="text-sm text-emerald-300 ">Our products provide excellent customer service and warranties, ensuring peace of mind with reliable troubleshooting, replacements, or repairs for any unexpected issues.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default WhyUs;