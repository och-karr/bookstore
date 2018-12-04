import React from 'react'; //React - nazwa importowanego obiektu z pakietu 'react'
import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';

import '../index.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            // books: [],
            order: []
        }
    }

    // addNewBook = (book) => {

    //     let newBooks = [...this.state.books]; //kopia listy książek

    //     newBooks.push(book); //to co dostaliśmy jako argument przesyłamy do nowej listy książek

    //     this.setState({
    //         books: newBooks
    //     });
    // }

    addToOrder = (book) => {
        //pobieramy starą listę zamówień, kopiujemy i dodajemy nową książkę
        this.setState({
            order: [...this.state.order, book]
        })
    }

    removeFromOrder = (title) => {
        this.setState({
            order: this.state.order.filter(book => title !== book.name) //sprawdza dla każdej książki, jeśli jest spełniony, książka zostanie dodana do wynikowej tablicy
        })
    }

    render() {
        return (
            <div className="app container">
                <Header />
                <div className="row">
                    <Order order={this.state.order} removeFromOrder={this.removeFromOrder} />
                    <Inventory books={this.state.books} addToOrder={this.addToOrder} />
                </div>
            </div>
        )
    } //przesyłamy books do adminpanelu
}

export default App;