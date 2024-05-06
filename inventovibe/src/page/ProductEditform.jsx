import React, { useState,useEffect } from 'react';
import './css/Edit.css'; 
import { createItem, getAllItems } from '../api/crud';

function ProductEditForm() {

  const ColumnList = ['ถุงซิป', 'แคป', 'ถุงแก้ว', 'pof', 'PVC'];

  const [category, setCategory] = useState('ถุงซิป');
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [salesChannel, setSalesChannel] = useState('');
  const [salesFormat, setSalesFormat] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const [data, setData] = useState([]);

  const userData = {
    category,
    productName,
    productCode,
    quantity,
    salesChannel,
    salesFormat,
    date,
    time
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = createItem('History',userData);
    console.log('submit : ', res);


    setCategory('');
    setProductName('');
    setProductCode('');
    setQuantity('');
    setSalesChannel('');
    setSalesFormat('');
    setDate('');
    setTime('');
    
    console.log('ส่งข้อมูลไปยัง API:', userData);
  };

    const fetchData = async () => {
        try {
            const response = await getAllItems(category);
            console.log(response)
            setData(response);
            console.log(category)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const [NameList, setNameList] = useState([]);
    
    
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-group">
        <label>หมวดหมู่สินค้า:</label>

        <select value={category} onChange={async (e) => {
          setCategory(e.target.value);
          try {
            const response = await getAllItems(e.target.value);
            const nameList = response.map(item => item.รายละเอียดสินค้า);
            setNameList(nameList); // Update NameList using setNameList
            console.log(NameList);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
          } }>
        <option value="">Select an option</option>
        {ColumnList.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      </div>
      <div className="input-group">
        <label>ชื่อสินค้า:</label>

        <select value={productName} onChange={(e) => setProductName(e.target.value)}>
        <option value="">Select an option</option>
        {NameList.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      </div>

      <div className="input-group">
        <label>จำนวน:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      </div>
      <div className="input-group">
        <label>ช่องทางการซื้อขาย:</label>
        <select value={salesChannel} onChange={(e) => setSalesChannel(e.target.value)}>
          <option value="">โปรดเลือก</option>
          <option value="Point of sale ">ขายหน้าร้าน</option>
          <option value="LineOfficial">LineOfficial</option>
          <option value="Shopee">Shopee</option>
        </select>
      </div>
      <div className="input-group">
        <label>รูปแบบการซื้อขาย:</label>
        <select value={salesFormat} onChange={(e) => setSalesFormat(e.target.value)}>
          <option value="">โปรดเลือก</option>
          <option value="Buy">ซื้อ</option>
          <option value="sale">ขาย</option>
        </select>
      </div>
      <div className="input-group">
        <label>วันที่:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="input-group">
        <label>เวลา:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      
      <button type="submit" className="submit-button">บันทึกการแก้ไข</button>
    </form>
  );
}

export default ProductEditForm;
