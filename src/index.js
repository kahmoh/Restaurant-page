import './style.css';

import {homePage} from "./home-page";

const content = document.querySelector('#content')

const renderHeader = function () {
    const headerContainer = document.createElement('div');
    headerContainer.appendChild(renderTitle());
    headerContainer.appendChild(links.renderLinks());
    headerContainer.style.display = 'flex'
    return headerContainer
};

const renderTitle = function () {
    const title = document.createElement('h1')
    title.textContent = 'home'
    return title;
}

const links = {
    linksContentArray: ['about', 'contact'],
    renderLink: function (content) {
        const link = document.createElement('a')
        link.href = '#'
        link.textContent = content;
        return link;
    },
    renderLinks: function () {
        const linkContainer = document.createElement('div');
        linkContainer.style.display = 'flex'
        linkContainer.style.flexDirection = 'column'
        this.linksContentArray.forEach(element => {
            const currentLink  = this.renderLink(element);
            linkContainer.appendChild(currentLink);
        });
        return linkContainer;
    },
}

export {renderHeader,content}

homePage.renderHomePage()