import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md'
import { TfiEmail } from 'react-icons/tfi'
import { BsTelephoneFill } from 'react-icons/bs'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Footer = () => {
    return (
        <div className="p-10 bg-emerald-50  text-emerald-600">
            <footer className="footer max-w-[450px] md:max-w-[750px] lg:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between  ">

                <aside className="w-1/2">
                <MonetizationOnIcon  />
                    <p >Money Tracker.<br /> Use this to manage your Money</p>
                </aside>
                <nav className="w-1/2" >
                    <header className="footer-title">Social</header>
                    <div className="flex">
                        <a><FaFacebook className="w-5 h-5 text-emerald-600 mr-3"></FaFacebook>
                        </a>
                        <a><FaGoogle className="w-5 h-5 text-emerald-600  mr-3"></FaGoogle></a>
                        <a><FaGithub className="w-5 h-5 text-emerald-600"></FaGithub></a>
                    </div>


                </nav>
                <aside>
                    <p className="flex items-center"><span className="mr-4 "><MdLocationOn className="w-5 h-5 text-emerald-600"></MdLocationOn></span>2912 Mohammadpur Road <br /> Dhaka, Bangladesh</p>
                    <p className="flex items-center"> <span className="mr-4"><TfiEmail className="w-5 h-5 text-emerald-600"></TfiEmail></span> moneytracker@gmail.com</p>
                    <p className="flex items-center"> <span className="mr-4"><BsTelephoneFill className="w-5 h-5 text-emerald-600"></BsTelephoneFill></span> 310-386-1623</p>
                </aside>

            </footer>
            <p className="text-emerald-600 text-center my-6 text-xs">Copyright © 2023 - All right reserved by money tracker</p>
        </div>
    );
};

export default Footer;