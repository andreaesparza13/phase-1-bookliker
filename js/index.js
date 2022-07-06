const baseUrl = 'http://localhost:3000/books'

const getBooks = () => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(json => displayTitlesForBooks(json))
}

const displayTitlesForBooks = (books) => {
    const list = document.getElementById('list');
    books.forEach(book => {
        const item = document.createElement('li');
        item.textContent = book.title;
        addListenerToTitle(item, book)
        list.appendChild(item);
    })
}

const addListenerToTitle = (listItem, book) => {
    const showPanel = document.getElementById('show-panel')
    listItem.addEventListener('click', () => {
        showPanel.textContent = '';
        const image = document.createElement('img');
        image.src = book.img_url;
        const p = document.createElement('p');
        p.textContent = book.description;
        showPanel.append(image, p);
    })
}

getBooks();