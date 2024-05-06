import Navigation from '../components/Navigation.jsx';
import ProductEditForm from './ProductEditform.jsx'; 
import './css/Edit.css'; // Import CSS ไฟล์ที่ต้องการใช้

function Edit(){
    return (
        <>
        <Navigation/>
        <div className="form-container">
            <ProductEditForm />
        </div>
        </>
    )
}

export default Edit;
