import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <TodoInput />
        <TodoList />
      </div>

    </div>
  );
}

