
const Button = ({ label, iconURL }) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-2 border text-lg leading-none  border-orange-600 bg-orange-600 rounded-full text-white">
            {label}
            <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5 " />
        </button>
    );
};

export default Button;