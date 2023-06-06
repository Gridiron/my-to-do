import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { TodoListPage } from "./pages/todo-list/todo-list-page";

function App() {
  return (
    <Provider store={store}>
      <TodoListPage></TodoListPage>
    </Provider>
  );
}

export default App;
