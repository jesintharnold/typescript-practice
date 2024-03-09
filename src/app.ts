class ProjectInput{
    templateElement:HTMLTemplateElement;
    renderElement:HTMLDivElement;
    formElement:HTMLFormElement;

    title:HTMLInputElement;
    description:HTMLInputElement;
    people:HTMLInputElement;
constructor(){
    this.templateElement=document.getElementById("project-input")! as HTMLTemplateElement;
    this.renderElement=document.getElementById("app")! as HTMLDivElement;
    const nodes=document.importNode(this.templateElement.content,true);
    this.formElement=nodes.firstElementChild as HTMLFormElement;
    this.formElement.id="user-input";
    this.title=this.formElement.querySelector("#title") as HTMLInputElement;
    this.description=this.formElement.querySelector("#description") as HTMLInputElement;
    this.people=this.formElement.querySelector("#people") as HTMLInputElement;
    this.formElement.addEventListener('submit',this.submitHandler.bind(this));
    this.render(this.formElement);
};

private submitHandler(event:Event){
    event.preventDefault();
    console.info(this.title.value,this.description.value,this.people.value);
};  

private render(form:HTMLFormElement){
    this.renderElement.insertAdjacentElement('afterbegin',form);
};
};

const ProInputRender=new ProjectInput();