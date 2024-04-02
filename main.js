import inquirer from "inquirer";
// User variable
let todos = [];
async function main() {
    while (true) {
        let input = await inquirer.prompt([
            {
                name: "Todoitem",
                type: "input",
                message: 'Add a todo item to the list'
            },
            {
                name: "addMore",
                type: "list",
                message: "Do you want to add more items?",
                choices: ["yes", "no"]
            }
        ]);
        // Output of program
        const { Todoitem, addMore } = input;
        todos.push(Todoitem);
        if (addMore === "no") {
            console.log("TodoList:");
            // Displaying todo items
            for (let i = 0; i < todos.length; i++) {
                console.log(todos[i]);
            }
            break; // Exit the loop when the user doesn't want to add more
        }
    }
}
main();
