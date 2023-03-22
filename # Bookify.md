# Bookify

Bookify is an application that allows users to search for books and add them to their library. It also allows users to delete books from their library and add them to certain shelves of their choice.

## User Story
>
> AS A user
I WANT to be able to search for books and add them to my library with the option to delete them from the library and add them to certain shelves of my choice.

## Description

Bookify is a web application that uses the Google Books API to search for books. Users can search for books by entering the book's name and then add it to their library. The user can also delete books from their library and add them to certain shelves of their choice by dragging and dropping the book on the desired shelf. The application is responsive and can be used on desktop, tablet and mobile devices.

## Getting Started

### Prequisites

- npm

  ```npm install create-react-app```

- GoogleBooks API

  ```https://developers.google.com/books/docs/v1/getting_started?csw=1```

- Material UI Library

  ```https://mui.com/material-ui/getting-started/installation/```

- React

  ```https://react.dev/learn/installation```

## Installation

To use Bookify, follow these steps:

1. Clone the repository to your local machine
    ```git clone https://github.com/lolanewell/bookify.git```

2. Install the required dependencies

     ```npm install```\
     Material UI Library\
     ```@mui/base```
     ```@mui/icons-material```
     ```@mui/material```
     ```@emotion/react```
     ```@emotion/styled```\
     React\
     ```react-router-dom```
     ``` ```
     ```@hello-pangea/dnd```\
     Font Awesome\
     ```@fortawesome/fontawesome-svg-core```
     ```@fortawesome/free-solid-svg-icons```
     ```@fortawesome/react-fontawesome```\
     Styled Components\
     ```styled-components```

3. Enter your API in ```GoogleBooksAPI.jsx```

      ```const APIKEY = "ENTER YOUR API ";```

4. Run the application

    ```npm run start```

## Usage

To use Bookify, follow these steps:

Open the website [here](https://lolanewell.github.io/bookify/)
Enter the name of the book you wish to search for in the search bar.
Click the search button or press the Enter key.
A list of books that match the search criteria will be displayed.
Click the "Add" button to add the book to your library.
To delete a book from your library, click the "Delete" button.
To add a book to a certain shelf, drag and drop the book on the desired shelf.

## Screenshots

Desktop
![Screenshot of the application](assets/images/MD1.png)

![Screenshot of the application](assets/images/MD2.png)

Tablet
![Screenshot of the application](assets/images/MD3tablet.jpg)

Mobile
![Screenshot of the application](assets/images/MD4mobile.jpeg)

## Credits & Resources

Bookify uses the following tutorials and/or references:

-[Styled-Components](https://styled-components.com/docs)\
-[Drag and Drop](https://react-dnd.github.io/react-dnd/about)\
-[React- Scroll to Element](https://codefrontend.com/scroll-to-element-in-react/)\
-[React- add Icons](https://fontawesome.com/v6/docs/web/use-with/react/add-icons)\
-[React- Hook-State](https://legacy.reactjs.org/docs/hooks-state.html)
-[React- Tooltip](https://mui.com/material-ui/react-tooltip/)\
-[React- Router](https://reactrouter.com/web/guides/quick-start)\
-[React- Router- DOM](https://reactrouter.com/web/guides/quick-start)\

## Contributors

Thanks to the main people who have contributed to this project:\
[Laura Barrow](https://github.com/lbarrow91) \
[Lola Newell](https://github.com/lolanewell)\
[Mehrun-nasa Hejazi](https://github.com/mewmew88) \
[Moses Kinganga](https://github.com/King-Mo100) \
[Pratikto Ariestyadi](https://github.com/ariestikto)

```Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.```

```If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!```

### If you would like to contribute to Bookify, please follow these steps:



1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

MIT License; Copyright (c) 2023 Bookify.
Please refer to the LICENSE in the repository for further information.
