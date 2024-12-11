import TodoService, { serviceversion, companyName, TodoRepository } from "./util/todo.service.js"

function main() {
    let todo = new TodoService()
    console.log(todo.findAll())
    console.log(serviceversion,companyName)
    let repository = new TodoRepository()
    console.log(repository.save())
}
main()