// validation
interface Validation {
  value: string | number;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validateInput: Validation) {
  let isValid = true;
  if (validateInput.required) {
    // karena jika tidak sama dengan 0 adalah true
    isValid = isValid && validateInput.value.toString().trim().length !== 0;
  }
  if (
    validateInput.minLength != null &&
    typeof validateInput.value === "string"
  ) {
    isValid = isValid && validateInput.value.length >= validateInput.minLength;
  }
  if (
    validateInput.maxLength != null &&
    typeof validateInput.value === "string"
  ) {
    isValid = isValid && validateInput.value.length >= validateInput.maxLength;
  }

  if (validateInput.min != null && typeof validateInput.value === "number") {
    isValid = isValid && validateInput.value >= validateInput.min;
  }

  if (validateInput.max != null && typeof validateInput.value === "number") {
    isValid = isValid && validateInput.value <= validateInput.max;
  }

  return isValid;
}

// decorator autobind
function Autobind(_1: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

//Project State Management
class ProjectState {
  private listeners: any[] = [];
  private projects: Project[] = [];
  private static instace: ProjectState;

  private constructor() {}

  // ini membuat singleton
  static getInstaces() {
    if (this.instace) {
      return this.instace;
    }

    return (this.instace = new ProjectState());
  }

  addListener(listenerFn: Function) {
    this.listeners.push(listenerFn);
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  assignedProject: Project[];

  constructor(private type: "active" | "finished") {
    this.templateElement = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;
    this.assignedProject = [];
    // mennciptakan salinan node
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    // mengambil element pertama saja
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = `${this.type}-projects`;

    projectState.addListener((projects: any[]) => {
      // const relevantProjects = projects.filter(prj => prj.status === ProjectStatus.Active)
      this.assignedProject = projects;
      this.renderProjects();
    });
    this.attach();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;
    for (const prjItem of this.assignedProject) {
      const listItem = document.createElement("li");
      listItem.textContent = prjItem.title;
      listEl.append(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + "PROJECTS";
  }

  private attach() {
    console.log(this.element);
    this.hostElement.insertAdjacentElement("beforeend", this.element);
  }
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLInputElement;
  peopleInputEl: HTMLInputElement;
  constructor() {
    // mengambil element html
    this.templateElement = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;

    // mennciptakan salinan node
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    // mengambil element pertama saja
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputEl = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputEl = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputEl = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    const title = this.titleInputEl.value;
    const description = this.descriptionInputEl.value;
    const people = this.peopleInputEl.value;

    const titleValidate: Validation = {
      value: title,
      required: true,
    };
    const descriptionValidate: Validation = {
      value: description,
      required: true,
      minLength: 5,
    };
    const peopleValidate: Validation = {
      value: +people,
      required: true,
    };

    if (
      !validate(titleValidate) ||
      !validate(descriptionValidate) ||
      !validate(peopleValidate)
    ) {
      alert("Invalid input , please try again");
      return;
    } else {
      return [title, description, +people];
    }
  }

  private clearInputs() {
    this.titleInputEl.value = "";
    this.descriptionInputEl.value = "";
    this.peopleInputEl.value = "";
  }

  @Autobind
  private submitHandler(e: Event) {
    e.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.clearInputs();
    }
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    // menyisipkan ke dalam hostElement yang idnya pada app
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const projectState = ProjectState.getInstaces();
const projectImput = new ProjectInput();
const projectList = new ProjectList("active");
const projectList2 = new ProjectList("finished");
