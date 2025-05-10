import Item from './Item';

function Items(props) {

    const items = props.item_list;
    const category = props.category;
    let filteredItems;

    if (category == 'all'){
        filteredItems = items;
    } else {
        filteredItems = items.filter((el) => el.category == category);
    }

    return ( 
        <div className='main'>
            {filteredItems.map(el => (
                <Item key={el.id} item={el} setOrder={props.setOrder} setFullPrice={props.setFullPrice} setId={props.setId} setFullItem={props.setFullItem}/>
            ))}
        </div>
    );
}

export default Items;
