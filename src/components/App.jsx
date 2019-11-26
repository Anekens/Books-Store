import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';
import BookCard from './BookCardContainer';
import Filter from './FilterContainer';
import Menu from './MenuContainer';

class App extends Component {
  componentWillMount() {
      axios.get('/books.json').then(res => {
          this.props.setBooks(res.data);
      })
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu/>
        <Filter/>
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Loading'
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
