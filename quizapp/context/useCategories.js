
import axios from 'axios';
import { useEffect, useState } from 'react';

const useCategories = () => {
    const [loading,setLoading] = useState(true);
    const [categories,setCategories] = useState([]);
    
    const getCategories = async () => {
        setLoading(true);
        try {
            const res = await axios.get('/api/categories');
            setCategories(res.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    useEffect(() => {
        getCategories();
    },[])
    return {loading,categories}   
};


export default useCategories;






