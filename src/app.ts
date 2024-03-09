class ProjectInput{
    templateElement:HTMLTemplateElement;
    renderElement:HTMLDivElement;
    formElement:HTMLFormElement;
constructor(){
    this.templateElement=document.getElementById("project-input")! as HTMLTemplateElement;
    this.renderElement=document.getElementById("app")! as HTMLDivElement;
    const nodes=document.importNode(this.templateElement.content,true);
    this.formElement=nodes.firstElementChild as HTMLFormElement;
    this.render(this.formElement);
};

private render(form:HTMLFormElement){
    this.renderElement.insertAdjacentElement('afterbegin',form);
};
};

const ProInputRender=new ProjectInput();