window.addEventListener('load', () => {
    const form = document.querySelector("#new-chapter-form");
    const input = document.querySelector("#new-chapter-input");
    const list_el = document.querySelector("#chapters");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (input.value === '') {
            alert('You didn\'t enter text. Please try again.');
        } else {


            const chapter = input.value;

            const chapter_el = document.createElement('div');
            chapter_el.classList.add('chapter');

            const chapter_content_el = document.createElement('div');
            chapter_content_el.classList.add('content');

            chapter_el.appendChild(chapter_content_el);

            const chapter_input_el = document.createElement('input');
            chapter_input_el.classList.add('text');
            chapter_input_el.type = 'text';
            chapter_input_el.value = chapter;
            chapter_input_el.setAttribute('readonly', 'readonly');

            chapter_content_el.appendChild(chapter_input_el);

            const chapter_actions_el = document.createElement('div');
            chapter_actions_el.classList.add('actions');

            const chapter_edit_el = document.createElement('button');
            chapter_edit_el.classList.add('edit');
            chapter_edit_el.innerText = 'Edit';

            const chapter_delete_el = document.createElement('button');
            chapter_delete_el.classList.add('delete');
            chapter_delete_el.innerText = 'Delete';

            chapter_actions_el.appendChild(chapter_edit_el);
            chapter_actions_el.appendChild(chapter_delete_el);

            chapter_el.appendChild(chapter_actions_el);

            list_el.appendChild(chapter_el);

            input.value = '';

            chapter_edit_el.addEventListener('click', (e) => {
                if (chapter_edit_el.innerText.toLowerCase() == "edit") {
                    chapter_edit_el.innerText = "Save";
                    chapter_input_el.removeAttribute("readonly");
                    chapter_input_el.focus();
                } else {
                    chapter_edit_el.innerText = "Edit";
                    chapter_input_el.setAttribute("readonly", "readonly");
                }
            });

            chapter_delete_el.addEventListener('click', (e) => {
                list_el.removeChild(chapter_el);

            });
        }
    });
});