import jsonData from '../../../../data.json'
import { useState } from 'react';


export const MainLogic = () => {
    const items = jsonData;
    const [orders, setOrders] = useState([]);
    const [currentItems, setCurrentItems] = useState(jsonData);
    const [inputText, setInputText] = useState("");


    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };  

    const addToOrder = (item) => {
        let isInArray = false
        orders.forEach(el => {
        if(el.id === item.id) {
            isInArray = true
        }
        })
        if (!isInArray) {
        setOrders((prevOrders) => [...prevOrders, item]);
        }
    };

    const deleteOnOrder = (id) => {
        setOrders((prevOrders) => prevOrders.filter((el) => el.id !== id));
    };


    const chooseCategory = (category) => {
        if (category === 'all') {
        setCurrentItems(items);
        return
        }

        setCurrentItems(() => items.filter(el => el.category === category))
    }

    return {
        orders,
        currentItems,
        inputText,
        inputHandler,
        addToOrder,
        deleteOnOrder,
        chooseCategory
    };

}

