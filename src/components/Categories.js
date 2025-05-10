function Categories(props) {

    const categories = [
        {key: 'all', name: 'Все товары'},
        {key: 'chairs', name: 'Стулья'},
        {key: 'lamps', name: 'Лампы'},
        {key: 'sofas', name: 'Диваны'},
        {key: 'vases', name: 'Вазы'}
    ]

    const changeCategory = (el) => {
        props.setCategory(el)
        console.log(el);
    }

    return ( 
        <div className="filters-btns">
            {categories.map((el) => (
                <div className="filter-item" onClick={() => changeCategory(el.key)}>{el.name}</div>
            ))} 
        </div>
     );
}

export



default Categories;