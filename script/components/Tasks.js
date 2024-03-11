class Tasks extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  _render() {
    const container = document.createElement("section");
    const currentTask = document.createElement('div');
    const currentTaskNumber = document.createElement('p');
    const currentTaskName = document.createElement('p');
    const taskListWrapper = document.createElement('div');
    const taskListHeader = document.createElement('div');
    const taskList = document.createElement('div');
    const taskListAdd = document.createElement('button');

    container.classList.add("task__container");
  }
}
