
const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {

    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImg(imgURL.bigShoe)
        }
    }

    return (
        <div>
            <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
            ${bigShoeImg === imgURL ? "border-orange-600" : "border-transparent"}`}
                onClick={handleClick}
            >
                <div className="flex justify-center  items-center bg-blue-100 p-2 sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                    <img className="object-contain" width={127} height={103} src={imgURL.thumbnail} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShoeCard;