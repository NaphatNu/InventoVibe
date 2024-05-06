import { useState, useEffect } from 'react';
import './css/home.css';
import List from '../components/list_home';
import { getAllItems } from '../api/crud';
import Navigation from '../components/Navigation';

function Home() {
    const ColumnList = ['ถุงซิป', 'แคป', 'ถุงแก้ว', 'pof', 'PVC'];
    const [currentCategory, setCurrentCategory] = useState('ถุงซิป');
    const [data, setData] = useState([]);

    // Function to handle category click
    const handleClick = (category) => {
        setCurrentCategory(category);
    };

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await getAllItems(currentCategory);
            setData(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data initially and whenever the current category changes
    useEffect(() => {
        fetchData();

    }, [currentCategory]);

    return (
        <>
        <Navigation/>
        <div className='home-container'>
            <div className='home-nav'>
                {ColumnList.map((item) => (
                    <div
                        key={item}
                        className={`home-category ${currentCategory === item ? 'click' : ''}`}
                        onClick={() => handleClick(item)}>
                        {item}
                    </div>
                ))}
            </div>
            <div className='home-content-container'>
                <div className='home-content-list'>
                    <div className='item-list'>
                        {data.map((item) => (
                            <List key={item.id} itemData={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
