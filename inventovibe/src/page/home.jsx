import { useState, useEffect } from 'react'
import axios from "axios";
import './css/home.css'
import List from '../components/list';

// const API_BASE_URL = 'https://sheet.best/api/sheets/27c535b6-cbed-4732-8f24-332f893ae770';
function Home() {
    
    // State to hold the data fetched from the API
    const [data, setData] = useState([]);
  
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheet.best/api/sheets/27c535b6-cbed-4732-8f24-332f893ae770');
        const jsonData = await response.json();
        setData(jsonData);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Fetch data initially when the component mounts
    useEffect(() => {
      fetchData();
    }, []); // Empty dependency array means this effect runs only once, when the component mounts
  
    // You can use useEffect again to refetch data whenever it changes, if necessary
    console.log(data);
    return (
        <>
        <div className='home-container'>
            <div className='home-nav'>
                <div className='home-category'>name1</div>
                <div className='home-category'>name2</div>
                <div className='home-category'>name3</div>
                <div className='home-category'>name1</div>
                <div className='home-category'>name2</div>
                <div className='home-category'>name3</div>
            </div>
            <div className='home-content-container'>
                <div className='home-content-list'>
                    <div className='search-container'>
                        <input type="text" className='searchbar'/>
                    </div>
                    <div className='item-list'>
                        {data.map(item => (
                            <List key={item.id} itemData ={item}/>
                        ))}
                    </div>
                    
                </div>
            </div>
      </div>
        </>

    );
  };

export default Home;

/*
<ul>
{data.map(item => (
  <li key={item.id}>{item.Name}</li>
))}
</ul>
*/