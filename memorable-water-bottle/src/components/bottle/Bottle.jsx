import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    if (!bottle) return <p>Bottle data is missing!</p>;
    
    const {name,img,price} = bottle;
    return (
        <div>
            <div className="bottle">
                <h4>Bottle: {name}</h4>
                <img src={img} alt="" />
                <p>Price: ${price}</p>
                <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
            </div>
        </div>
    );
};

export default Bottle;