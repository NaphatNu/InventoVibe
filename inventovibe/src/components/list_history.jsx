import './css/List.css'

function List({itemData}) {

    return (
        <>
        <div className='list'>
            <div className='item-description'>
                <div className='description-main'>
                    <div className='item-id'>Format : {itemData.salesFormat}</div>
                    <div className='item-name'>{itemData.productName}</div>
                </div>
                <div className='description-sub'>
                Channel : {itemData.salesChannel} date : {itemData.date} {itemData.time} 
                </div>
            </div>
            <div className='item-amount'>
                <div className='amount'>{itemData.quantity} kg. </div>
            </div>
        </div>
        </>
    );
}

export default List;