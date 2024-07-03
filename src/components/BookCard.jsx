const BookCard = ({book}) => {
    return (<div className="bookCard">
        <h5>{book.title}</h5>
        <p>{book.author}</p>
    </div>);
}

export default BookCard;