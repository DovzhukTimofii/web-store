import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Categories } from '../components/Categories/Categories';
import { Container } from '../components/Container/Container';
import Items from '../components/Items/Items';
import PropTypes from 'prop-types';
import jsonData from '../../../data.json';
import { MainLogic } from '../components/MainLogic/MainLogic';

const MainPage = () => {
  MainPage.propTypes = {
    items: PropTypes.array.isRequired,
  };

  const { orders, currentItems, inputText, inputHandler, addToOrder, deleteOnOrder, chooseCategory } = MainLogic(jsonData)

  return (
    <body>
      <Container>
        <Header inputHandler={inputHandler} orders={orders} onDelete={deleteOnOrder}/>
        <Categories chooseCategory={chooseCategory}/>
        <Items inputText={inputText} items={currentItems} onAdd={addToOrder} />
        <Footer />
      </Container>
    </body>
    
  );
};

export default MainPage;