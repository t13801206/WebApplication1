import React from 'react';
import './WorkApp.css';


const uri_ftp = 'api/ftp';
const uri_settings = 'api/settings';
const todos = [
    { id: 0, title: 'Task 0', isDone: false },
    { id: 1, title: 'Task 1', isDone: false },
    { id: 2, title: 'Task 2', isDone: true }
];

function Header(props) {
    // const remaining = props.todos.filter(todo => {
    //     return !todo.isDone;
    // });
    return (
        // <h1>
        //     <button onClick={props.purge}>Purge</button>
        //     WOOOOOOOOO
        //     <span>({remaining.length}/{props.todos.length})</span>
        // </h1>
        <h1>This is Header v</h1>
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

function WorkingDirs(props) {
    const workingDirs = props.workingDirs.map(workingDir => {
        return (
            <option value={workingDir}>{workingDir}</option>
        );
    });
    return (
        <select id="workingDirs" name="example">
            {workingDirs}
            <option value="サンプル1">サンプル1</option>
            <option value="サンプル2">サンプル2</option>
            <option value="サンプル3">サンプル3</option>
        </select>
    );
}

function Workers(props) {
    const workers = props.workers.map(worker => {
        return (
            <option value="sa">{worker}</option>
        );
    });
    return (
        <select name="example">
            <option value="サンプル1">Worker1</option>
            <option value="サンプル2">Worker2</option>
            <option value="サンプル3">Worker3</option>
            {workers}
        </select>
    );
}
function Files(props) {
    const files = props.files.map(file => {
        return (
            <li>{file}</li>
        );
    });
    return (
        <ul>
            {files}
        </ul>
    );
}

function ImagePlace(props) {
    return (
        <img alt="" src={props.image}></img>
    );
}

// このクラスにのみステータスを持たせる（親から子へ伝播）
class WorkApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todos,
            item: '',
            workingDirs: ["dir1", "dir2", "dir3"],
            workers: ["a1", "b1", "c1"],
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAZlBMVEX///9PXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNbfYZxtqh2wq9RY3dOXHJ8hpDO0Mbg4NFYZXmGkJ/q6+7///9aZ3zNz8Tp6ux2foWAiJNHUmRMWW5GUWIctl4dAAAADXRSTlMAQICw0BBgoDDAUPAgSijlQgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBA0QFQhjo0B/AAABl0lEQVRYw8WX0XaDIAxARUCqNtpVO+3aTvv/P7nW1Ro3KDF4tvvm8eQKASGJIgcilgoeKBmLaAk6kfALmWhiuDDgwGwo4Sm8IPVNRRvwYF5OJMvBS5654w2QMK7hKyCidFi83bDNYQG5Dvm+dQy2+KLcDZSFzeDPf7F7UvjWIrONspwEpe092g/alsC3HcKTSOsG8gqmSQjr671XAOOflXIF6Xf8xrHUfsFjCIYvGLKggS+A+0IkIYLkJpAhAnkTQIgAXJuALBBRHCaIcQqq+jBQV3SBRAdBdXhSkQUK5bCeBDVZAJPg/YD4FwF4BU17HGgbnqA5PmlYgnYStBzBxxGxpkBRBXurQKGtzBJI9DP5kmgVxOh3ZgkEOlBYAnykcQQSH6ocQYKPdY5A44vlRBecZ9fruA4XuuDzEbKZXa7d5UQTnD+72eU6DqG/Ttyfr+7nfn69j1noO5qg639WSXpRjWirFTOOIGOU2S9KbrU0Xq1d6i5MZL5dv9wPbzjCW54Vmq7wti+88RxKX3frK/6m+V7W/n8BOtS/6Tme07cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMTNUMTY6MTg6MTErMDA6MDDO9L4UAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTEzVDE2OjE4OjExKzAwOjAwv6kGqAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=",
            files: ["file1", "file2"],
            selectedDir: "",
            settings: ""
        };
        this.checkTodo = this.checkTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.purge = this.purge.bind(this);
        this.setWorkingDirs = this.setWorkingDirs.bind(this);
        this.setWorkers = this.setWorkers.bind(this);
        this.setFiles = this.setFiles.bind(this);
        this.setImage = this.setImage.bind(this);
    }

    setWorkingDirs() {
        fetch(uri_ftp)
            .then(response => response.json())
            .then(jsonBody => {
                console.log(jsonBody);
                return jsonBody;
            })
            .then(result => this.setState({
                workingDirs: result
            }))
            .catch(error => console.error('Unable to get workingDirs.', error));
    }
    setWorkers() {
        fetch(uri_settings)
            .then(response => response.json())
            .then(jsonBody => {
                console.log(jsonBody);
                return jsonBody;
            })
            .then(result => this.setState({
                settings: result
            }))
            .catch(error => console.error('Unable to get settings.', error));
    }
    setFiles() {
        const selectedDir = document.getElementById("workingDirs").value;
        console.log(`${uri_ftp}/${selectedDir}`);
        fetch(`${uri_ftp}/${selectedDir}`)
            .then(response => response.json())
            .then(jsonBody => {
                console.log(jsonBody);
                return jsonBody;
            })
            .then(result => this.setState({
                selectedDir: selectedDir,
                files: result
            }))
            .catch(error => console.error('Unable to get files.', error));
    }

    setImage(){
        fetch(`${uri_ftp}/${this.state.selectedDir}/${this.state.files[0]}`)
            .then(response => response.json())
            .then(jsonBody => {
                console.log(jsonBody);
                return jsonBody;
            })
            .then(result => this.setState({
                image: result
            }))
            .catch(error => console.error('Unable to setImage', error));
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

    teigizumi() {
        // // 定義済みライフサイクルメソッド
        // componentDidUpdate() {
        //     localStorage.setItem('todos', JSON.stringify(this.state.todos));
        // }

        // // 定義済みライフサイクルメソッド
        // componentDidMount() {
        //     this.setState({
        //         todos: JSON.parse(localStorage.getItem('todos')) || []
        //     });
        // }
    }
    render() {
        return (
            <div className="container">
                <Header
                // todos={this.state.todos}
                // purge={this.purge}
                />

                <WorkingDirs
                    workingDirs={this.state.workingDirs}
                />
                <br />
                <Workers
                    workers={this.state.workers}
                />

                <button onClick={this.setWorkers}>workerButton</button>
                <button onClick={this.setWorkingDirs}>workingDirButton</button>
                <button onClick={this.setFiles}>FilesButton</button>
                <button onClick={this.setImage}>gazou</button>
                
                <Files files={this.state.files} />
                <br />
                <ImagePlace image={this.state.image} />


                {/* <TodoList
                    todos={this.state.todos}
                    checkTodo={this.checkTodo}
                    deleteTodo={this.deleteTodo}
                />
                <TodoForm
                    item={this.state.item}
                    updateItem={this.updateItem}
                    addTodo={this.addTodo}
                /> */}
            </div>
        );
    }
}

export default WorkApp;