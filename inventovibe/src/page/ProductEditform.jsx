import React, { useState } from 'react';
import './css/Edit.css'; 

function ProductEditForm() {
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [salesChannel, setSalesChannel] = useState('');
  const [salesFormat, setSalesFormat] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('ส่งข้อมูลไปยัง API:', {
      category,
      productName,
      productCode,
      quantity,
      salesChannel,
      salesFormat,
      date,
      time
    });
    
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-group">
        <label>หมวดหมู่สินค้า:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">โปรดเลือก</option>
          <option value="category1">หมวดหมู่ 1</option>
          <option value="category2">หมวดหมู่ 2</option>
          <option value="category3">หมวดหมู่ 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>ชื่อสินค้า:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </div>
      <div className="input-group">
        <label>รหัสสินค้า:</label>
        <input type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} />
      </div>
      <div className="input-group">
        <label>จำนวน:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      </div>
      <div className="input-group">
        <label>ช่องทางการซื้อขาย:</label>
        <select value={salesChannel} onChange={(e) => setSalesChannel(e.target.value)}>
          <option value="">โปรดเลือก</option>
          <option value="online">ออนไลน์</option>
          <option value="offline">ออฟไลน์</option>
        </select>
      </div>
      <div className="input-group">
        <label>รูปแบบการซื้อขาย:</label>
        <select value={salesFormat} onChange={(e) => setSalesFormat(e.target.value)}>
          <option value="">โปรดเลือก</option>
          <option value="retail">ขายปลีก</option>
          <option value="wholesale">ขายส่ง</option>
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
      
    </form>
  );
}

export default ProductEditForm;
