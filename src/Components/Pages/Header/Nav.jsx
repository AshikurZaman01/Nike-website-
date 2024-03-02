import { Link } from "react-router-dom";
import logo from "../../../../src/assets/images/header-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";

const Nav = () => {

    const navItems = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: "About Us", link: "/about" },
        { id: 3, name: "Prodcuts", link: "/products" },
        { id: 4, name: "Contact Us", link: "/contact" },
    ]

    return (
        <div>
            <header className="padding-x py-8  absolute z-10  w-full ">
                <nav className="flex justify-between items-center max-container">

                    <div>
                        <Link to={"/"}><img width={130} height={29} src={logo} alt="logo" /></Link>
                    </div>

                    <div>
                        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                            {
                                navItems.map((item, indx) => {
                                    return (
                                        <li key={item.id}><Link to={item.link} className="font-semibold text-gray-600 leading-normal text-lg text-slate-gray">{item.name}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <GiHamburgerMenu />
                        <FaWindowClose />
                    </div>

                </nav>
            </header>
        </div>
    );
};

export default Nav;