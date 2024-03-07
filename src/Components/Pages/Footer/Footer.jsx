import { Link } from "react-router-dom";
import footerLogo from "../../../assets/images/footer-logo.svg";
import facebook from "../../../assets/icons/facebook.svg";
import twitter from "../../../assets/icons/twitter.svg";
import instagram from "../../../assets/icons/instagram.svg";
import copyrightSign from "../../../assets/icons/copyright-sign.svg";

const Footer = () => {

    const footerLinks = [
        {
            title: "Products",
            links: [
                { name: "Air Force 1", link: "/" },
                { name: "Air Max 1", link: "/" },
                { name: "Air Jordan 1", link: "/" },
                { name: "Air Force 2", link: "/" },
                { name: "Nike Waffle Racer", link: "/" },
                { name: "Nike Cortez", link: "/" },
            ],
        },
        {
            title: "Help",
            links: [
                { name: "About us", link: "/" },
                { name: "FAQs", link: "/" },
                { name: "How it works", link: "/" },
                { name: "Privacy policy", link: "/" },
                { name: "Payment policy", link: "/" },
            ],
        },
        {
            title: "Get in touch",
            links: [
                { name: "customer@nike.com", link: "mailto:customer@nike.com" },
                { name: "+92554862354", link: "tel:+92554862354" },
            ],
        },
    ];

    const socialMedia = [
        { src: facebook, alt: "facebook logo" },
        { src: twitter, alt: "twitter logo" },
        { src: instagram, alt: "instagram logo" },
    ];

    return (
        <div>
            <footer className="max-container">
                <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">

                    <div className="flex flex-col items-start">
                        <Link><img height={46} width={150} src={footerLogo} alt="" /></Link>

                        <p className="mt-6 text-base leading-7 text-white sm:max-w-sm"> Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>

                        <div className="flex items-center gap-5 mt-8 ">
                            {
                                socialMedia.map((icon, indx) => {
                                    return (
                                        <div key={indx} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                                            <img width={24} height={24} src={icon.src} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
                        {
                            footerLinks.map((item, indx) => {
                                return (
                                    <div key={indx}>
                                        <h4 className="text-white  text-2xl leading-normal font-medium mb-6">{item.title}</h4>

                                        <ul>
                                            {
                                                item.links.map((link, indx) => (
                                                    <li className="mt-3 text-gray-500 leading-normal hover:text-gray-300 cursor-pointer  " key={indx}><Link>{link.name}</Link></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
                    <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
                        <img
                            src={copyrightSign}
                            alt='copyright sign'
                            width={20}
                            height={20}
                            className='rounded-full m-0'
                        />
                        <p>Copyright. All rights reserved.</p>
                    </div>
                    <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;