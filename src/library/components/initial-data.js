const initialData = {
  shelves: {
    "shelf-1": {
      id: "shelf-1",
      title: "Newly Saved",
      bookIds: [],
    },
    "shelf-2": {
      id: "shelf-2",
      title: "Favourites",
      bookIds: [],
    },
    "shelf-3": {
      id: "shelf-3",
      title: "Fiction",
      bookIds: [],
    },
    "shelf-4": {
      id: "shelf-4",
      title: "Non-fiction",
      bookIds: [],
    },
  },
  savedShelves: [
    {
      id: "shelf-1",
      title: "Newly Saved",
      bookDetails: [],
    },
    {
      id: "shelf-2",
      title: "Favourites",
      bookDetails: [],
    },
    {
      id: "shelf-3",
      title: "Fiction",
      bookDetails: [],
    },
    {
      id: "shelf-4",
      title: "Non-fiction",
      bookDetails: [],
    },
  ],
  shelfOrder: ["shelf-1", "shelf-2", "shelf-3", "shelf-4"],
};

export default initialData;
