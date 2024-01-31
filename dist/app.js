"use strict";
class ProjectInput {
    constructor() {
        // mengambil element html
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        // mennciptakan salinan node
        const importedNode = document.importNode(this.templateElement.content, true);
        // mengambil element pertama saja
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInputEl = this.element.querySelector('#title');
        this.descriptionInputEl = this.element.querySelector('#description');
        this.peopleInputEl = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    submitHandler(e) {
        e.preventDefault();
        console.log(this.titleInputEl.value);
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    attach() {
        // menyisipkan ke dalam hostElement yang idnya pada app
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const projectImput = new ProjectInput();
