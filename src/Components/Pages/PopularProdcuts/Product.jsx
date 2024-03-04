
const Product = ({ product }) => {


    const { imgURL, name, price } = product || {}


    return (
        <div className="mx-auto">
            <div>
                <img src={imgURL} alt="" />
            </div>
        </div>
    );
};

export default Product;