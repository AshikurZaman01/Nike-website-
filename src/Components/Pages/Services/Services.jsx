import { FaTruckFast } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import ServiceCard from "./ServiceCard";
const Services = () => {

    const services = [
        {
            imgURL: <FaTruckFast />,
            label: "Free shipping",
            subtext: "Enjoy seamless shopping with our complimentary shipping service."
        },
        {
            imgURL: <FaShieldAlt />,
            label: "Secure Payment",
            subtext: "Experience worry-free transactions with our secure payment options."
        },
        {
            imgURL: <MdOutlineSupportAgent />,
            label: "Love to help you",
            subtext: "Our dedicated team is here to assist you every step of the way."
        },
    ];

    return (
        <div>
            <section id="" className='max-container flex justify-center flex-wrap gap-9'>
                {
                    services.map((service, indx) => {
                        return (
                            <ServiceCard key={indx} service={service}></ServiceCard>
                        )
                    })
                }
            </section>
        </div>
    );
};

export default Services;