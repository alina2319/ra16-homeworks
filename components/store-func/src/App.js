import ShopItemFunc from './components/ShopItemFunc';
import Item from './js/Item';

function App() {
  const itemData = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  };

  const item = new Item(itemData);

  return (
    <>
      <div className="container">
        <div className="background-element"/>
        <div className="highlight-window"/>
        <div className="window">
          <ShopItemFunc item={item}/>
        </div>
      </div>
    </>
  );
}

export default App;
