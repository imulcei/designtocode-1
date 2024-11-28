export default class UI {

    static createElement(parent, box, { id, classes, href, text } = {}) {
        const element = document.createElement(`${box}`);
        if (id) {
            element.setAttribute("id", id);
        }
        if (classes) {
            element.setAttribute("class", classes);
        }
        if (text) {
            element.textContent = text;
        }
        if (href) {
            element.setAttribute("href", href);
        }
        parent.appendChild(element);
        return element;
    }

    static loadPage() {
        this.loadArticle();
    }

    static loadArticle() {
        let body = document.querySelector('body');
        let section = this.createElement(body, 'section');

        this.createElement(section, 'article', { id: 'product-image' });
        let divInfos = this.createElement(section, 'article', { id: 'infos-section' });

        this.loadHeader();

        let price = this.createElement(divInfos, 'div', { id: 'price' });
        this.createElement(price, 'p', { id: 'strike-price', text: '183,99 €' });
        this.createElement(price, 'p', { id: 'new-price', text: '149,99 €' });

        let buttons = this.createElement(divInfos, 'div', { id: 'buttons' });
        this.createElement(buttons, 'button', { id: 'add-to-chart-btn', text: 'Ajouter au panier' });
        let fav = this.createElement(buttons, 'button', { id: 'add-to-fav-btn' });
        this.createElement(fav, 'i', { classes: 'fa-regular fa-heart' });
    }

    static loadHeader() {
        let divInfos = document.querySelector('#infos-section');
        let header = this.createElement(divInfos, 'header');

        let infos = this.createElement(header, 'div', { id: 'infos-div' });
        this.createElement(infos, 'p', { id: 'chip', text: 'FitLife' });
        this.createElement(infos, 'p', { id: 'reference', text: 'XV-383923810' });
        this.createElement(header, 'h1', { text: 'Montre Connectée FitLife Pro 5+' });
        let review = this.createElement(header, 'div', { id: 'review' });
        let stars = this.createElement(review, 'div', { id: 'stars' });
        this.createElement(stars, 'i', { classes: 'fa-solid fa-star' });
        this.createElement(stars, 'i', { classes: 'fa-solid fa-star' });
        this.createElement(stars, 'i', { classes: 'fa-solid fa-star' });
        this.createElement(stars, 'i', { classes: 'fa-solid fa-star' });
        this.createElement(stars, 'i', { classes: 'fa-regular fa-star' });
        this.createElement(review, 'p', { id: 'rates', text: '43 notes' });
    }
}