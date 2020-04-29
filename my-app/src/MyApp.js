import React from 'react';
import './MyApp.css';


const todos = [
    { id: 0, title: 'Task 0', isDone: false },
    { id: 1, title: 'Task 1', isDone: false },
    { id: 2, title: 'Task 2', isDone: true }
];

function TodoHeader(props) {
    const remaining = props.todos.filter(todo => {
        return !todo.isDone;
    });
    return (
        <h1>
            <button onClick={props.purge}>Purge</button>
            My todos
            <span>({remaining.length}/{props.todos.length})</span>

        </h1>
    );
}


function TodoItem(props) {
    return (
        <li>
            <label>
                <input type="checkbox"
                    checked={props.todo.isDone}
                    onChange={() => props.checkTodo(props.todo)}
                />
                <span className={props.todo.isDone ? 'done' : ''}>
                    {props.todo.title}
                </span>
            </label>

            <span
                className="cmd"
                onClick={() => props.deleteTodo(props.todo)}>
                [x]
            </span>
        </li>
    );
}

// ステートを保持しないならば function を使う
function TodoList(props) {
    const todos = props.todos.map(todo => {
        return (
            // <li key={todo.id}>{todo.title}</li>
            <TodoItem
                key={todo.id}
                todo={todo}
                checkTodo={props.checkTodo}
                deleteTodo={props.deleteTodo}
            />
        );
    });
    return (
        <ul>
            {props.todos.length ? todos : <li>Nothig</li>}
        </ul>
    );
}

function TodoForm(props) {
    // テキストボックスの文字列はAppのステートなので、直接は変更できない
    return (
        <form onSubmit={props.addTodo}>
            <input type="text" value={props.item} onChange={props.updateItem} />
            <input type="submit" value="ADD" />
        </form>
    );

}

function getUniqueId() {
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
}

// このクラスにのみステータスを持たせる（親から子へ伝播）
class MyApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todos,
            item: ''
        };
        this.checkTodo = this.checkTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.purge = this.purge.bind(this);
    }

    purge() {
        // const todos = this.state.todos.filter(todo=>{
        //   return !todo.isDone
        const todos = this.state.todos.filter(todo => !todo.isDone);
        this.setState({
            todos: todos
        });
    }

    checkTodo(todo) {
        const todos = this.state.todos.map(todo => {
            return { id: todo.id, title: todo.title, isDone: todo.isDone };
        });
        // 引数todoのidがどこのポジションであるか
        const pos = this.state.todos.map(todo => {
            return todo.id;
        }).indexOf(todo.id);
        todos[pos].isDone = !todos[pos].isDone;
        this.setState({
            todos: todos
        });
    }

    deleteTodo(todo) {

        // ステートを変更しない場合は、sliceでよい
        const todos = this.state.todos.slice();
        const pos = this.state.todos.indexOf(todo);

        todos.splice(pos, 1);
        this.setState({
            todos: todos
        });
    }

    updateItem(e) {
        this.setState({
            item: e.target.value
        });
    }

    addTodo(e) {
        // 画面遷移回避
        e.preventDefault();

        if (this.state.item.trim() === '') {
            return;
        }

        const item = {
            id: getUniqueId(),
            title: this.state.item,
            isDone: false
        };

        // 直接ステートに新規アイテムをプッシュできないので、いったん sliceコピーを作成
        const todos = this.state.todos.slice();
        todos.push(item);
        this.setState({
            todos: todos,
            item: ''
        });
    }

    // 定義済みライフサイクルメソッド
    componentDidUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    // 定義済みライフサイクルメソッド
    componentDidMount() {
        this.setState({
            todos: JSON.parse(localStorage.getItem('todos')) || []
        });
    }

    render() {
        return (
            <div className="container">
                <TodoHeader
                    todos={this.state.todos}
                    purge={this.purge}

                />
                <TodoList
                    todos={this.state.todos}
                    checkTodo={this.checkTodo}
                    deleteTodo={this.deleteTodo}
                />
                <TodoForm
                    item={this.state.item}
                    updateItem={this.updateItem}
                    addTodo={this.addTodo}
                />
            </div>
        );
    }
}


export default MyApp;
