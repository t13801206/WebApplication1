import React from 'react';
import './WorkApp.css';


const uri_ftp = 'api/ftp';
const uri_settings = 'api/settings';
const uri_workItems = "api/workitems";
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
        <h1>This is Header va</h1>
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
        <select id="workingDirs" name="example" onChange={() => props.setFiles()}>
            {workingDirs}
            <option value="サンプル1">サンプル1</option>
            <option value="サンプル2">サンプル2</option>
            <option value="サンプル3">サンプル3</option>
        </select>
    );
}

function Models(props) {
    const models = props.settings.map(setting => {
        return (
            <option valuse={setting.model}>{setting.model}</option>
        );
    });
    // const workers = props.setting.map( setting => setting.worker);
    // const className = props.setting.map( setting => setting.className);
    return (
        <select id="models" onChange={props.setTypes}>
            {models}
        </select>
    );
}

function Workers(props) {
    const workers = props.workers.map(worker => {
        return (
            <option value={worker}>{worker}</option>
        );
    });
    return (
        <select id="workers" name="example">
            {workers}
            <option value="サンプル1">Worker1</option>
            <option value="サンプル2">Worker2</option>
            <option value="サンプル3">Worker3</option>
        </select>
    );
}

function Types(props) {
    const types = props.types.map((type, index) => {
        return (
            <button name={`button${index}`} disabled={!props.isWorking} onClick={() => props.buttonClick(index)}>{type} - key{index}</button>
        );
    });



    return (
        <div>
            {types}
        </div>
    );

}


function Files(props) {
    const files = props.files.map((file, index) => {
        return (
            <li>
                <label>
                    <input type="radio" name="file" value={file} checked="true" />
                    {file}
                </label>
            </li>
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
        <div>
            <img alt="" src={props.image}></img>
        </div>
    );
}

function SaveButton(props) {
    return (
        <button onClick={() => props.save()}>saveButton</button>
    );
}

function StateButton(props) {
    let tmp= props.isWorking ? "戻る" : "開始";
    return (
        <button onClick={()=>props.onToggle()}>{tmp}</button>
    );
}
// このクラスにのみステータスを持たせる（親から子へ伝播）
class WorkApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todos,
            item: '',
            models: ["m1", "m2"],
            workingDirs: ["dir1", "dir2", "dir3"],
            workers: ["a1", "b1", "c1"],
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAZlBMVEX///9PXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNbfYZxtqh2wq9RY3dOXHJ8hpDO0Mbg4NFYZXmGkJ/q6+7///9aZ3zNz8Tp6ux2foWAiJNHUmRMWW5GUWIctl4dAAAADXRSTlMAQICw0BBgoDDAUPAgSijlQgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBA0QFQhjo0B/AAABl0lEQVRYw8WX0XaDIAxARUCqNtpVO+3aTvv/P7nW1Ro3KDF4tvvm8eQKASGJIgcilgoeKBmLaAk6kfALmWhiuDDgwGwo4Sm8IPVNRRvwYF5OJMvBS5654w2QMK7hKyCidFi83bDNYQG5Dvm+dQy2+KLcDZSFzeDPf7F7UvjWIrONspwEpe092g/alsC3HcKTSOsG8gqmSQjr671XAOOflXIF6Xf8xrHUfsFjCIYvGLKggS+A+0IkIYLkJpAhAnkTQIgAXJuALBBRHCaIcQqq+jBQV3SBRAdBdXhSkQUK5bCeBDVZAJPg/YD4FwF4BU17HGgbnqA5PmlYgnYStBzBxxGxpkBRBXurQKGtzBJI9DP5kmgVxOh3ZgkEOlBYAnykcQQSH6ocQYKPdY5A44vlRBecZ9fruA4XuuDzEbKZXa7d5UQTnD+72eU6DqG/Ttyfr+7nfn69j1noO5qg639WSXpRjWirFTOOIGOU2S9KbrU0Xq1d6i5MZL5dv9wPbzjCW54Vmq7wti+88RxKX3frK/6m+V7W/n8BOtS/6Tme07cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMTNUMTY6MTg6MTErMDA6MDDO9L4UAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTEzVDE2OjE4OjExKzAwOjAwv6kGqAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=",
            files: ["file1", "file2"],
            selectedDir: "",
            settings: [{ "model": "dammy", "worker": ["dammmy"], "className": ["dammy"] }],
            types: ["type1"],
            checkedFileIndex: "",
            saveItems: "",
            isWorking: false
        };
        this.checkTodo = this.checkTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.purge = this.purge.bind(this);
        this.setWorkingDirs = this.setWorkingDirs.bind(this);
        this.setSettings = this.setSettings.bind(this);
        this.setFiles = this.setFiles.bind(this);
        this.setImage = this.setImage.bind(this);
        this.setTypes = this.setTypes.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.setCheckedFileIndex = this.setCheckedFileIndex.bind(this);
        this.save = this.save.bind(this);
        this.getResults = this.getResults.bind(this);
        this.onToggle=this.onToggle.bind(this);
    }

    setCheckedFileIndex() {

        let radioList = document.getElementsByName("file");
        let index;
        for (var i = 0; i < radioList.length; i++) {
            if (radioList[i].checked) {
                index = i
                break;
            }
        }



        this.setState({
            checkedFileIndex: index

        })
        console.log(`checked radio button: ${index}`)
    }
onToggle(){

    const tmp = this.state.isWorking;
    console.log(`toggle ${this.state.isWorking} ${tmp} ${!tmp}` );
    this.setState({isWorking: !tmp});
}

    buttonClick(index) {
        console.log(`button ${index} clicked`);


        // let radioList = document.getElementsByName("file");
        // let str;
        // for (var i = 0; i < radioList.length; i++) {
        //     if (radioList[i].checked) {
        //         str = radioList[i].value;
        //         this.setImage(i + 1);
        //         break;
        //     }
        // }

        const file = this.state.files.shift();
        this.setImage(0);


        const dir = document.getElementById("workingDirs").value;
        const worker = document.getElementById("workers").value;

        const item = {
            "dir": dir,
            "file": file,
            "worker": worker,
            "result": index.toString()
        };
        console.log(item);

        fetch(uri_workItems, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(response => response.json())
            .then(() => {
                // getItems();
                // addNameTextbox.value = '';
                console.log("POST OK");
            })
            .catch(error => console.error('Unable to POST item.', error));
    }

    setWorkingDirs() {
        const promise = fetch(uri_ftp)
            .then(response => response.json())
            .then(jsonBody => {
                console.log(jsonBody);
                return jsonBody;
            })
            .then(result => this.setState({
                workingDirs: result
            }))
            .catch(error => console.error('Unable to get workingDirs.', error));

        promise.then(() => this.setFiles());
    }
    setSettings() {
        const promise = fetch(uri_settings)
            .then(response => response.json())
            .then(jsonBody => {
                console.log("setting Json is ...");
                console.log(jsonBody);
                return jsonBody;
            })
            .then(result => this.setState({
                settings: result,
            }))
            .then(console.log("read settings.json"))
            .catch(error => console.error('Unable to get settings.', error));

        promise.then(() => {
            this.setState({
                types: this.state.settings[0].className,
                workers: this.state.settings[0].worker
            });
        });


    }
    setFiles() {
        const selectedDir = document.getElementById("workingDirs").value;
        console.log(`${uri_ftp}/${selectedDir}`);
        const promise = fetch(`${uri_ftp}/${selectedDir}`)
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

        promise.then(() => this.setImage(0));
    }
    setTypes() {
        const selectedIndex = document.getElementById("models").selectedIndex;
        console.log(`model changed ${this.state.settings[selectedIndex].model}`);

        this.setState({
            types: this.state.settings[selectedIndex].className,
            workers: this.state.settings[selectedIndex].worker
        });
    }


    setImage(index) {
        console.log(`${uri_ftp}/${this.state.selectedDir}/${this.state.files[index]}`)
        fetch(`${uri_ftp}/${this.state.selectedDir}/${this.state.files[index]}`)
            .then(response => response.text())
            .then(responseText => {
                console.log("image:::")
                console.log(responseText);
                return responseText;
            })
            .then(result => this.setState({
                image: result
            }))
            .catch(error => console.error('Unable to setImage', error));
    }

    getResults() {
        let tmp;
        const promise = fetch(uri_workItems)
            .then(response => response.json())
            .then(jsonBody => {
                console.log("now result");
                console.log(jsonBody);
                tmp = jsonBody;
            })
            .catch(error => console.error('Unable to get save items', error));

        promise.then(() => {
            for (var i = 0; i < tmp.length; i++) {
                if (tmp[i].dir === this.state.workingDir) {

                    break;
                }
            }

        });



    }

    save() {
        const promise = fetch(uri_workItems)
            .then(response => response.json())
            .then(jsonBody => {
                console.log("save items:");
                console.log(jsonBody);
                return jsonBody;
            })
            .then(result => this.setState({
                saveItems: result,
            }))
            .catch(error => console.error('Unable to get save items', error));

        promise.then(() => {
            let write_json = JSON.stringify(this.state.saveItems);
            let blob = new Blob([write_json], { type: 'application/json' });
            let a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            // document.body.appendChild(a); // Firefoxで必要
            a.download = 'result.json';
            a.click();
            // document.body.removeChild(a); // Firefoxで必要
            URL.revokeObjectURL(a.href);
        });
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
        // localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    componentWillMount() {
        console.log("componentWillMount")
        this.setSettings();
        this.setWorkingDirs();
        document.addEventListener("keydown", e => {
            console.log(`key down ${e.key} - ${e.keyCode}`);

            if (!this.state.isWorking) {
                return;
            }

            if (e.keyCode < 48 || 57 < e.keyCode) {
                return;
            }
            console.log(`key down OK ${e.key} - ${e.keyCode}`);

            const kkey = parseInt(e.key);
            if (kkey + 1 > this.state.types.length) {
                return;
            }

            this.buttonClick(e.key);

            // if().buttonClick(e.key);

            //   if (event.isComposing || e.keyCode === 229) {
            //     return;
            //   }
        });
    }


    // 定義済みライフサイクルメソッド
    componentDidMount() {
        // console.log("componentDidMount")
        // this.setState({
        //     todos: JSON.parse(localStorage.getItem('todos')) || []
        // });

        // this.setTypes();
        // console.log(this.state.types);
    }

    render() {
        return (
            <div className="container" >
                <Header
                // todos={this.state.todos}
                // purge={this.purge}
                />
                <StateButton
onToggle={this.onToggle}
isWorking={this.state.isWorking}
                />

                <div hidden={this.state.isWorking}>


                    <WorkingDirs
                        workingDirs={this.state.workingDirs}
                        setFiles={this.setFiles}
                    />
                    <SaveButton
                        save={this.save}
                    />
                    <br />
                    <Models
                        settings={this.state.settings}
                        setTypes={this.setTypes}
                    />
                    <br />

                    <Workers
                        workers={this.state.workers}
                    />
                </div>
                <Types
                    types={this.state.types}
                    isWorking={this.state.isWorking}
                    buttonClick={this.buttonClick}
                />
                <div hidden={!this.state.isWorking}>

                    <ImagePlace image={this.state.image} />

                    <Files
                        files={this.state.files}
                    />
                    <br />
                </div>

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
            </div >
        );
    }
}

export default WorkApp;