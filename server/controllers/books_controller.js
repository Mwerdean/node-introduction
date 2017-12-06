
const books = [];
let id = 0;

module.exports = {
    create(req, res){
        // res.json({message:'hello'}) 
        console.log('You sent me this data', req.body)
        books.push({
            id: id,
            title: req.body.title,
            author: req.body.author
        });
        id++;
        console.log('books', books);
        res.status(200).json(books);
    },
    

    delete(req, res) {
    const bookId = req.params.id;
    const bookIndex = books.findIndex(book => book.id === parseInt(bookId, 10)); // ==bookId
    books.splice(bookIndex, 1);
    res.json(books);
    },

    read(req,res) {
        res.json(books)
    },

    update(req,res) {
        const bookId = req.params.id;
        let bookIndex = books.findIndex(book => book.id === parseInt(bookId, 10)); // ==bookId
       
        books[bookIndex].title = req.body.title
        books[bookIndex].author = req.body.author
        res.status(200).json(books);
    },
}
