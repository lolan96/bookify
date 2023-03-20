

const initialData = {
    books: {
        'book-1': { id: 'book-1', title: 'The Great Gatsby' },
        'book-2': { id: 'book-2', title: 'Jane Eyre' },
        'book-3': { id: 'book-3', title: 'Little Women'},
        'book-4': { id: 'book-4', title: 'Frankenstein' },
        'book-5': { id: 'book-5', title: 'Harry Potter' },
        'book-6': { id: 'book-6', title: 'Twilight' },
    },
    shelves: {
        'shelf-1': {
            id: 'shelf-1',
            title: 'Newly Saved',
            bookIds: ['book-1', 'book-2', 'book-3', 'book-4', 'book-5', 'book-6'],
        },
        'shelf-2': {
            id: 'shelf-2',
            title: 'Favourites',
            bookIds: [],
        },
        'shelf-3': {
            id: 'shelf-3',
            title: 'Fiction',
            bookIds: [],
        },
        'shelf-4': {
            id: 'shelf-4',
            title: 'Non-fiction',
            bookIds: [],
        },
       
    },
    shelfOrder: ['shelf-1', 'shelf-2', 'shelf-3', 'shelf-4'],
};

export default initialData;