import React from 'react';
import './App.css';
import './styles/style.css';
import ProductCard from "./components/ProductCard/ProductCard";
import {useAppSelector} from "./store/hooks";

function App() {
    const productsState = useAppSelector(state => state.products.products)
    const productsMarkup = productsState.map((product, index) => <ProductCard
        key={index}
        photos={product.photos}
        name={product.name}
        price={product.price}
        address={product.address}
        publishDate={product["publish-date"]}
    />)

    return (
        <main>
            <div className="onlineshop-app">
                <h1 className="visually-hidden">Главная</h1>
                <div className="onlineshop-app__blueline" />
                <div className="onlineshop-app__wrapper">
                    <section className="onlineshop-app__filter filter" />
                    <section className="onlineshop-app__results results">
                        <div className="results__list">
                            {productsMarkup}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default App;
