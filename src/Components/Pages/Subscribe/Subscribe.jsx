import Button from "../../Button/Button";

const Subscribe = () => {
    return (
        <div>
            <section id="contact-us" className="max-container flex justify-between  items-center max-lg:flex-col gap-10">

                <h3 className="text-4xl leading-[68px] lg:max-w-md font-bold">Sign Up from <span className="text-orange-600">Updates</span> & Newsletter</h3>

                <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-400 rounded-full">
                    <input className="inputt" type="text" placeholder="subscribe@nike.com" name="" id="" />
                    <div className="flex  max-sm:justify-end items-center  max-sm:w-full">
                        <Button label="Sign Up" ></Button>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Subscribe;
