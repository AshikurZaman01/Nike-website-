import star from "../../../assets/icons/star.svg";

const ReviewCard = ({ review }) => {

    const { imgURL, customerName, rating, feedback } = review || {};

    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} className="rounded-full object-cover w-[120px] h-[120px] " alt="" />
            <p className="mt-6 max-w-sm text-center text-gray-500">{feedback}</p>

            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img className="object-contain m-0" src={star} width={24} height={24} alt="" />
                <p className="text-xl text-gray-600">{rating}</p>
            </div>
            <div>
                <h3 className="mt-1 font-bold text-3xl text-center">{customerName}</h3>
            </div>

        </div>
    );
};

export default ReviewCard;