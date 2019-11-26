import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const BookCard = (book) => {
   return (
    <Card>
      <div className="card-image">
        <Image src={book.imageLink} />
      </div>
      <Card.Content>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>
          <span className="date">{book.author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="dollar" />
          {book.price}
        </a>
      </Card.Content>
      <Button onClick={book.addToCart.bind(this, book)}>
          Add to cart {book.addedCount > 0 && `(${book.addedCount})`}
      </Button>
    </Card>
  );
};

export default BookCard;
