import React from 'react';
import BookView from './BookView';

class Inventory extends React.Component {

    render() {

        // const bookListing =  this.props.books.map(book => {
        //     return <BookView book={book} addToOrder={this.props.addToOrder}/> //przekazujemy niżej addToOrder
        // })

        return (
            <div className="inventory col-md-4">
                {/* {bookListing} */}
            </div>
        );
    }
}

export default Inventory;