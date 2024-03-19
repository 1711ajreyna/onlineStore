import './Catalog.css';
import Product from '../components/Product';

function Catalog() {

    const data = [
        {
          title: "car 1",
          price: 999.99,
          category: "car",
          image: "car1.jpg",
          _id: "1"  
        },
        {
            title: "car 2",
            price: 999.99,
            category: "car",
            image: "car2.jpg",
            _id: "2"  
          },
          {
            title: "car 3",
            price: 999.99,
            category: "car",
            image: "car3.jpg",
            _id: "3"  
          },
          {
            title: "car 4",
            price: 999.99,
            category: "car",
            image: "car4.jpg",
            _id: "4"  
          },
          {
            title: "car 5",
            price: 999.99,
            category: "car",
            image: "car5.jpg",
            _id: "5"  
          },
          {
            title: "car 6",
            price: 999.99,
            category: "car",
            image: "car6.jpg",
            _id: "6"  
          },
          {
            title: "car 7",
            price: 999.99,
            category: "car",
            image: "car7.jpg",
            _id: "7"  
          },
    ];

    return (
        <div className="catalog page">
            <h1>Our amazing catalog!!</h1>
            {data.map(prod => (<Product key={prod._id} info={prod} />))}
        </div>
    );
}

export default Catalog;