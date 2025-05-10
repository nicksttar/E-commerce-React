import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";



function PriceResult(props){
    let suma = 0;
    let items = props.items;
    items.forEach((el) => {
        suma = suma + Number(el.price);
    })

    return (
        <div className="full-price">Сумма: {new Intl.NumberFormat().format(suma)}$</div>
    )
}


function Header(props) {

    let [cart, setCartOpen] = useState(false);
    let items = props.items;

    const CloseOrderItem = (key) => {
        const removedItem = items.find(el => el.key === key);
        props.setOrder(items.filter(el => el.key !== key));
    };




    return ( 
        <header>
            <div>
                <span className="logo">House Staff</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(!cart)} className={`shop-card-btn ${cart? 'active' : ''}`}/>

                {cart? <div className="shop-cart">
                    {items.length == 0? <div className="no-items">Товаров Нету</div>: items.map(el => (
                        <div className="cart-item">
                            <img src={`./img/${el.img}.${el.ext}`} alt="" className="cart-item-img" />
                            <div className="cart-item-wrapper">
                                <div className="cart-item-title">{el.title}
                                    <IoMdClose className="close-btn" onClick={() => CloseOrderItem(el.key)}/>
                                </div>

                                <div className="cart-item-price">{el.price}$</div>
                            </div>
                            
                        </div>
                        
                    ))}
                    {items.length == 0? '' : <PriceResult items={items}/>}
                </div> : ''}
            </div>
            <div className="presentation"></div>
        </header>
     );
}

export default Header;