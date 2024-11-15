document.addEventListener('DOMContentLoaded', function(){
    const input = document.querySelector('favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('ul');

button.addEventListener('click',() => {
        const chapter = input.value.trim();
        if (chapter){
            const listItem = document.createElement("li");
            listItem.textContent = chapter;

            const deleteButton = document.createElement("button");
            deleteButton.textContent ="❌";
            listItem.appendChild(deleteButton);
            list.appendChild(listItem);
            input.value = "";

            deleteButton.addEventListener('click', () => {
                list.removeChild(listItem);
            });

        }else{
            alert("Please enter a Chapter");
        }
        

    })

})
