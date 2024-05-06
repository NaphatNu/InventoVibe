import ProductEditForm from './ProductEditform.jsx'; 
import './Edit.css'; // Import CSS ไฟล์ที่ต้องการใช้

function Edit(){
    return (
        <div className="form-container">
            <ProductEditForm />
            <button type="submit" className="submit-button">บันทึกการแก้ไข</button>
        </div>
    )
}

export default Edit;
