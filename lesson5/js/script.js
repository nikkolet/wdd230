window.addEventListener('load', () => {
    const form = document.querySelector("#new-chapter-form");
    const input = document.querySelector("#new-chapter-input");
    const list_el = document.querySelector("#listcontainer");
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const chapter = input.value;

        if (!chapter) {
            alert("Please type in a chapter");
        } else {
            console.log("Success!")
            return;
        }
        const chapter_el = document.createElement("div");
        chapter_el.classList.add("chapter");

        const chapter_content_el = document.createElement("div");
        chapter_content_el.classList.add("content");

        chapter_el.appendChild(chapter_content_el);

        const chapter_input_el = document.createElement("input");
        chapter_input_el.classList.add("text");
        chapter_input_el.type = "text";
        chapter_input_el.value = chapter;
        chapter_input_el.setAttribute("readonly", "readonly");

        chapter_content_el.appendChild(chapter_input_el);

        const chapter_actions_el = document.createElement("div");
        chapter_actions_el.classList.add("actions");

        const chapter_edit_el = document.createElement("button");
        chapter_edit_el.classList.add("edit");
        chapter_edit_el.innerHTML = "Edit";

        const chapter_delete_el = document.createElement("button");
        chapter_delete_el.classList.add("delete");
        chapter_delete_el.innerHTML = "Delete";

        chapter_actions_el.appendChild(chapter_edit_el);
        chapter_actions_el.appendChild(chapter_delete_el);

        chapter_el.appendChild(chapter_actions_el);

        list_el.appendChild(chapter_el);

        input.value = "";
    })
})