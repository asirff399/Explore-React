import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../cart/Cart";

const Bottles = () => {
    const [bottles,setBottles] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    }, [])

    useEffect(()=>{
        if(bottles.length){
            const storedCart = getStoredCart()
            console.log(storedCart)

            const savedCart = []
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    savedCart.push(bottle)
                }

            }
            setCart(savedCart)
        }
    },[bottles])

    const handleAddToCart = bottle =>{
        const newCart = [...cart,bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }

    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        removeFromLS(id)
    }
    return (
        <div>
            <h3>Bottles Here!</h3>
            <h3>Bottles Available: {bottles.length}</h3>
            {/* <h3 className="bottle">Cart: {cart.length}</h3> */}
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                { 
                    bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;