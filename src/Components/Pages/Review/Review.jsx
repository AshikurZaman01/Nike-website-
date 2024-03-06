import customer1 from "../../../assets/images/customer1.jpeg";
import customer2 from "../../../assets/images/customer2.svg";
import ReviewCard from "./reviewCard";

const Review = () => {

    const reviews = [
        {
            imgURL: customer1,
            customerName: 'Morich Brown',
            rating: 4.5,
            feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
        },
        {
            imgURL: customer2,
            customerName: 'Lota Mongeskar',
            rating: 4.5,
            feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
        }
    ];

    return (
        <div>
            <section className="max-container">
                <h3 className="font-bold text-4xl text-center">What Our <span className="text-orange-600">Customers</span> Say</h3>
                <p className="mt-4 max-w text-center mx-auto">Hear genuine stories from our satisfied customers about their
                    exceptional experiences with us.</p>

                <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                    {
                        reviews.map((review, indx) => {
                            return (
                                <ReviewCard key={indx} review={review}></ReviewCard>
                            )
                        })
                    }
                </div>

            </section>
        </div>
    );
};

export default Review;