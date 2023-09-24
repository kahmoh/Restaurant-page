const content = document.querySelector('#content')

const renderHomePage = function () {
    renderHeader();
};

const renderHeader = function () {
    const headerContainer = document.createElement('div');
    headerContainer.appendChild(renderTitle());
    headerContainer.appendChild(renderLinks(createLinks()));
    content.appendChild(headerContainer);
};

const renderTitle = function () {
    const title = document.createElement('h1')
    title.textContent = 'home'
    return title;
}

const createLink = function (content) {
    const link = document.createElement('li')
    link.textContent = content;
    return link;
}

const createLinks = function () {
    const linksArray = [];
    const linkContentArray = ['home','menu','contact'];
    for (let i = 0; i < linkContentArray; i++) {
        linksArray.push(createLink(linkContentArray[i]));
        console.log('link created')
    }
    return linksArray;
}

createLinks()

const renderLinks = function (array) {
    const linkContainer = document.createElement('div');
    array.forEach(element => {
        linkContainer.appendChild(element);
    });
    console.log(array)
    return linkContainer;
}

export {renderHomePage}