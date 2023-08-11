import jsonData from '../../../data.json'
import { useState } from 'react';
import { dataType } from '../../../dataTypes';

export const MainLogic = (jsonData: dataType[]) => {
    const items: dataType[] = jsonData;
    const [orders, setOrders] = useState<dataType[]>([]);
    const [currentItems, setCurrentItems] = useState<dataType[]>(jsonData);
    const [inputText, setInputText] = useState("");


    let inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }; 

    const addToOrder = (item: dataType) => {
        let isInArray = false
        orders.forEach((el: dataType)=> {
        if(el.id === item.id) {
            isInArray = true
        }
        })
        if (!isInArray) {
        setOrders((prevOrders) => [...prevOrders, item]);
        }
    };

    const deleteOnOrder = (id: number): void => {
        setOrders((prevOrders) => prevOrders.filter((el) => el.id !== id));
    };


    const chooseCategory = (category: string) => {
        if (category === 'all') {
        setCurrentItems(items);
        return
        }

        setCurrentItems(items.filter(el => el.category === category));
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

