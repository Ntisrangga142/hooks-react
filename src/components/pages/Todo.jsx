import TodoForm from "../organisms/Todo/TodoForm.jsx";
import TodoList from "../organisms/Todo/TodoList.jsx";
import Header from "../templates/Header.jsx";

function Todo() {
    return(
        <>
            <Header />
        <main className="px-[130px]">
            <TodoForm />
            <TodoList />
        </main>

        </>

    );
}

export default Todo