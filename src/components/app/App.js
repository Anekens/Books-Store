import React from 'react';
import axios from "axios";
import Menu from "../MenuHeader";
import {Container, Card} from 'semantic-ui-react'
import BookCard from "../BookCard";
import Filter from "../filter/FilterContainer";


class App extends React.Component {
    componentWillMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(({data}) => {
                setBooks(data)
            }
        )
    }

    render = () => {
        const {books, isReady} = this.props;
        return (
            <Container>
                <Menu/>
                <Filter/>
                <Card.Group itemsPerRow={4}>
                    {!isReady ? 'Загрузка...' : books.map((book, id) => <BookCard {...book} key={id}/>)}
                </Card.Group>
            </Container>
        )
    }
}

export default App