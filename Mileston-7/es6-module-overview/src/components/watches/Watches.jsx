const Watches = ({watch}) => {
    const {id,name,brand,price} = watch;
    return (
        <div>
            <h3>Watches: </h3>
            <div>
                <small>ID: {id}</small>
                <h3>Name: {name}</h3>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default Watches;