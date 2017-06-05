import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book)=>{
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className='list-group-item'>
                    {book.title}
                </li>
            )
        })
    }
    
    render () {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps (state) {
    //Whatever is returned will show up as props
    //inside of Booklist
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passes to all of our reducers
                                //key of action --> value is a function from the actions folder
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote Booklist from a component to a container - 
// it needs to know about this new dispatch method, selecteBook. Make it available as as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)