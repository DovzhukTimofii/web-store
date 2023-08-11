import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Categories } from '../../components/Categories/Categories';
import { Container } from '../../components/Container/Container';
import Products from '../../components/Products/Products';
import jsonData from '../../../data.json';
import { MainLogic } from '../../components/MainLogic/MainLogic';
import React from "react";
import { dataType } from '../../../dataTypes';

interface TypeOfArgumentMainPage extends dataType {
  items: dataType[]
}

const MainPage: React.FC<TypeOfArgumentMainPage> = ({ items }) => {
  const mainLogicResult = MainLogic(jsonData);
  const { orders, currentItems, inputText, inputHandler, addToOrder, deleteOnOrder, chooseCategory } = mainLogicResult;

  return (
    <body>
      <Container>
        <Header inputHandler={inputHandler} orders={orders} onDelete={deleteOnOrder} />
        <Categories chooseCategory={chooseCategory}/>
        <Products inputText={inputText} items={currentItems} onAdd={addToOrder} />
        <Footer />
      </Container>
    </body>
    
  );
};

export default MainPage;