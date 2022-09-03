window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const list_el = document.querySelector("#task");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const updatetask = input.value;

        if (!updatetask) {
            alert("Fill in your task please..."); 
            return;  
        } 

        const task_el = document.createElement("div");
        task_el.classList.add("updatetask");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        // task_content_el.innerText = updatetask;

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text"; 
        task_input_el.value = updatetask;
        task_input_el.setAttribute("readonly", "readonly");

        const task_actions_el = document.createElement("div")
        task_actions_el.classList.add("actions")

        const task_edit_el = document.createElement("button")
        task_edit_el.classList.add("edit")
        task_edit_el.innerHTML = "EDIT"

        const task_delete_el = document.createElement("button")
        task_delete_el.classList.add("delete")
        task_delete_el.innerHTML = "DELETE"

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click',() =>{
            if (task_edit_el.innerHTML == "EDIT") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "SAVE";
            }
            else {
                // console.log("Save");
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerHTML = "EDIT"
            }
        }); 

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    })
})