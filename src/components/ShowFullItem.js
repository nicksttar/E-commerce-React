function ShowFullItem(props) {
    const item = props.item_list.find((el) => el.id === props.id);

    // Функция для закрытия окна
    const closeItem = () => {
        props.setFullItem(false);
    };

    return (
        <div className="overlay">
            <div className="full-item">
                <button className="close-btn" onClick={closeItem}>Закрыть</button>
                <img src={`./img/${item.img}.${item.ext}`} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}$</b>
                <div className="add-to-cart">+</div>
            </div>
        </div>
    );
}

export default ShowFullItem;
