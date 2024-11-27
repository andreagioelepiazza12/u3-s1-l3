
import Card from 'react-bootstrap/Card';

function SingleBook(props) {
  const { book } = props; // Estrarre il libro dalle props

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={book.image} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;