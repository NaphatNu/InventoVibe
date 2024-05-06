import './css/List.css'

function List({itemData}) {

    return (
        <>
        <div className='list'>
            <div className='item-description'>
                <div className='description-main'>
                    <div className='item-id'>{itemData.id}</div>
                    <div className='item-name'>{itemData.Name}</div>
                </div>
                <div className='description-sub'>
                    รายละเอียดสินค้า
                </div>
            </div>
            <div className='item-amount'>
                <div className='amount'>00</div>
                <div className='unit'>unit</div>
            </div>
            <div className='item-edit'>edit</div>
        </div>
        </>
    );
}

export default List;