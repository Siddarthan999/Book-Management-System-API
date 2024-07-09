let books = [];
let idCounter = 1;

exports.getAllBooks = (req, res) => {
    res.json(books);
};

exports.getBookById = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
};

exports.createBook = (req, res) => {
    const { title, author, year } = req.body;
    const newBook = { id: idCounter++, title, author, year };
    books.push(newBook);
    res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    const { title, author, year } = req.body;
    book.title = title;
    book.author = author;
    book.year = year;

    res.json(book);
};

exports.deleteBook = (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    
    books.splice(bookIndex, 1);
    res.status(204).send();
};
