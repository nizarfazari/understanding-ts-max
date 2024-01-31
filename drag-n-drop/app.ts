class ProjectInput {
    templateElement: HTMLTemplateElement
    hostElement : HTMLDivElement
    element :HTMLFormElement

    titleInputEl : HTMLInputElement
    descriptionInputEl : HTMLInputElement
    peopleInputEl : HTMLInputElement
    constructor() {
        // mengambil element html
        this.templateElement = document.getElementById('project-input') as HTMLTemplateElement
        this.hostElement = document.getElementById('app') as HTMLDivElement
        
        // mennciptakan salinan node
        const importedNode = document.importNode(this.templateElement.content, true)
        // mengambil element pertama saja
        this.element = importedNode.firstElementChild as HTMLFormElement
        this.element.id = 'user-input'

        this.titleInputEl = this.element.querySelector('#title') as HTMLInputElement
        this.descriptionInputEl = this.element.querySelector('#description') as HTMLInputElement
        this.peopleInputEl = this.element.querySelector('#people') as HTMLInputElement

        this.configure()
        this.attach()
    }

    private submitHandler(e : Event){
        e.preventDefault()
        console.log(this.titleInputEl.value)

    }

    configure(){
        this.element.addEventListener('submit', this.submitHandler.bind(this))
    }

    private attach(){
        // menyisipkan ke dalam hostElement yang idnya pada app
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }

}

const projectImput = new ProjectInput()