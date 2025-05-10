function Item(props) {
    const { img, title, desc, price, id, ext = 'jpg' } = props.item;
    
    const UpdateCart = () => {
        props.setOrder(prevOrder => {
            const alreadyInCart = prevOrder.some(item => item.key === id);
            if (alreadyInCart) {
                return prevOrder;
            } else {
                return [...prevOrder, { title, price, img, ext, key: id }];
            }
        });
    }

    const ShowMore = (id) => {
        console.log(id);
        props.setId(id);
        props.setFullItem(true);
    }

    return ( 
        <div className="item">
            <img src={`./img/${img}.${ext}`} alt={title} onClick={() => ShowMore(id)}/>
            <h2>{title}</h2>
            <p>{desc}</p>
            <b>{price}$</b>
            <div className="add-to-cart" onClick={UpdateCart}>+</div>
        </div>
    );
}

export default Item;
