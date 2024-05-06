import './css/List.css'

function List({itemData}) {

    return (
        <>
        <div className='list'>
            <div className='item-description'>
                <div className='description-main'>
                    <div className='item-id'>ID : {itemData.ชนิดฟิล์ม}</div>
                    <div className='item-name'>{itemData.รายละเอียดสินค้า}</div>
                </div>
                <div className='description-sub'>
                    จำนวนชิ้น/กก. : {itemData.จำนวนชิ้น} ราคาขาย : {itemData.ราคาขาย} บาท
                </div>
            </div>
            <div className='item-amount'>
                <div className='amount'>{itemData.stock} kg. </div>
            </div>
        </div>
        </>
    );
}

export default List;