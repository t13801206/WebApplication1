import React from 'react';
import './WorkApp.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import LineExample from './line';

const uri_ftp = 'm/api/ftp';
const uri_settings = 'm/api/settings';
const uri_workItems = "m/api/workitems";

function Header(props) {
    return (
        <h1>Bunrui 9001 Database Ver-2.</h1>
    );
}

function WorkingDirs(props) {
    const workingDirs = props.workingDirs.map(workingDir => {
        return (
            <option value={workingDir}>{workingDir}</option>
        );
    });
    return (
        // <select id="workingDirs" name="example" onChange={() => props.setFiles()}>
        //     {workingDirs}
        // </select>
        <Form>
            <Form.Label>作業フォルダ</Form.Label>
            <Form.Control as="select" custom id="workingDirs" name="example" onChange={() => props.setFiles()}>
                {workingDirs}
            </Form.Control>
        </Form>
    );
}

function Models(props) {
    const models = props.settings.map(setting => {
        return (
            <option valuse={setting.model}>{setting.model}</option>
        );
    });
    return (
        // <select id="models" onChange={props.setTypes}>
        //     {models}
        // </select>
        <Form>
            <Form.Label>分類モデル</Form.Label>
            <Form.Control as="select" custom onChange={() => props.setTypes()} id="models">
                {models}
            </Form.Control>
        </Form>
    );
}

function Workers(props) {
    const workers = props.workers.map(worker => {
        return (
            <option value={worker}>{worker}</option>
        );
    });
    return (
        // <select id="workers" name="example">
        //     {workers}
        // </select>
        <Form>
            <Form.Label>作業者</Form.Label>
            <Form.Control as="select" custom id="workers" name="example">
                {workers}
            </Form.Control>
        </Form>
    );
}

function Types(props) {
    const types = props.types.map((type, index) => {
        return (
            <>
                <Button
                    variant="secondary"
                    name={`button${index}`}
                    disabled={!props.isWorking}
                    onClick={() => props.buttonClick(index)}>
                    {
                        index < 10 ?
                            <div>{type} -KEY{index}</div> :
                            <div>{type}</div>
                    }
                </Button>{' '}
            </>
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
                {file}
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
            <img alt="" src={props.image} width={props.imageSize}></img>
        </div>
    );
}

function SaveButton(props) {
    return (
        <Button variant="info" onClick={() => props.save()}>結果を保存する</Button>
    );
}

function StateButton(props) {
    let tmp = props.isWorking ? "TOPへ戻る" : "ラベリングを開始する";
    return (
        <Button onClick={() => props.onToggle()}>{tmp}</Button>
        // <button className="button-right">test</button>
    );
}
function ImageSize(props) {
    return (
        // <select id="imagesize" onChange={() => {
        //     const imagesize = document.getElementById("imagesize").value;
        //     props.setImageSize(imagesize);
        // }}>
        //     </select>

        <Form>
            <Form.Label>画像サイズ</Form.Label>
            <Form.Control as="select" custom id="imagesize" onChange={() => {
                const imagesize = document.getElementById("imagesize").value;
                props.setImageSize(imagesize);
            }}>
                <option value="128">128 px</option>
                <option value="256">256 px</option>
                <option value="512">512 px</option>
            </Form.Control>
        </Form>
    );
}

// このクラスにのみステータスを持たせる（親から子へ伝播）
class WorkApp extends React.Component {
    constructor() {
        super();
        this.state = {
            models: ["m1", "m2"],
            workingDirs: ["dir1", "dir2", "dir3"],
            workers: ["a1", "b1", "c1"],
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAZlBMVEX///9PXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNPXXNbfYZxtqh2wq9RY3dOXHJ8hpDO0Mbg4NFYZXmGkJ/q6+7///9aZ3zNz8Tp6ux2foWAiJNHUmRMWW5GUWIctl4dAAAADXRSTlMAQICw0BBgoDDAUPAgSijlQgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBA0QFQhjo0B/AAABl0lEQVRYw8WX0XaDIAxARUCqNtpVO+3aTvv/P7nW1Ro3KDF4tvvm8eQKASGJIgcilgoeKBmLaAk6kfALmWhiuDDgwGwo4Sm8IPVNRRvwYF5OJMvBS5654w2QMK7hKyCidFi83bDNYQG5Dvm+dQy2+KLcDZSFzeDPf7F7UvjWIrONspwEpe092g/alsC3HcKTSOsG8gqmSQjr671XAOOflXIF6Xf8xrHUfsFjCIYvGLKggS+A+0IkIYLkJpAhAnkTQIgAXJuALBBRHCaIcQqq+jBQV3SBRAdBdXhSkQUK5bCeBDVZAJPg/YD4FwF4BU17HGgbnqA5PmlYgnYStBzBxxGxpkBRBXurQKGtzBJI9DP5kmgVxOh3ZgkEOlBYAnykcQQSH6ocQYKPdY5A44vlRBecZ9fruA4XuuDzEbKZXa7d5UQTnD+72eU6DqG/Ttyfr+7nfn69j1noO5qg639WSXpRjWirFTOOIGOU2S9KbrU0Xq1d6i5MZL5dv9wPbzjCW54Vmq7wti+88RxKX3frK/6m+V7W/n8BOtS/6Tme07cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMTNUMTY6MTg6MTErMDA6MDDO9L4UAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTEzVDE2OjE4OjExKzAwOjAwv6kGqAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=",
            files: ["file1", "file2"],
            files_backup: [],
            selectedDir: "",
            settings: [{ "model": "dammy", "worker": ["dammmy"], "className": ["dammy"] }],
            types: ["type1"],
            saveItems: "",
            isWorking: false,
            imageSize: "128",
            plotdata: [1, 2, 3, 4]
        };
        this.setWorkingDirs = this.setWorkingDirs.bind(this);
        this.setSettings = this.setSettings.bind(this);
        this.setFiles = this.setFiles.bind(this);
        this.setImage = this.setImage.bind(this);
        this.setTypes = this.setTypes.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        this.save = this.save.bind(this);
        this.onToggle = this.onToggle.bind(this);
        this.setImageSize = this.setImageSize.bind(this);
        this.backFile = this.backFile.bind(this);
    }

    setImageSize(size) {
        this.setState({
            imageSize: size
        });
    }
    onToggle() {
        const tmp = this.state.isWorking;
        console.log(`toggle ${this.state.isWorking} ${tmp} ${!tmp}`);
        this.setState({ isWorking: !tmp });
    }
    buttonClick(index) {
        console.log(`button ${index} clicked`);
        this.setImage(this.state.files[1]);

        const file = this.state.files.shift();

        const files_backup = Object.assign([], this.state.files_backup);
        files_backup.push(file);
        this.setState({ files_backup });


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
            .then(response => {
                if (response.status === 500) {
                    throw new Error('fail POST 500 データがすでに存在しています');
                }
                else if (response.status === 409) {
                    console.log("status is 409");
                    throw new Error('fail POST 409');
                }
                else {
                    console.log("POST OK");
                    return response.json();
                }
            })
            .then((jsonBody) => {
                console.log(jsonBody);
            })
            .catch(error => {
                console.error('Unable to POST item, next try to PUT', error);

                fetch(`${uri_workItems}/${this.state.selectedDir}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(item)
                })
                    .then((response => {
                        console.log(`${response.status} item update`);
                    }))
                    .catch(error => console.error('Unable to update item.', error));
            });
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
            .then(() => this.setFiles())
            .catch(error => console.error('Unable to get workingDirs.', error));
    }
    setSettings() {
        fetch(uri_settings)
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

            .then(() => {
                this.setState({
                    types: this.state.settings[0].className,
                    workers: this.state.settings[0].worker
                });
            })
            .catch(error => console.error('Unable to get settings.', error));
    }
    setFiles() {
        this.setState({ files_backup: [] })
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
            .then(() => this.setImage(this.state.files[0]))
            .catch(error => console.error('Unable to get files.', error));
    }
    setTypes() {
        const selectedIndex = document.getElementById("models").selectedIndex;
        console.log(`model changed ${this.state.settings[selectedIndex].model}`);

        this.setState({
            types: this.state.settings[selectedIndex].className,
            workers: this.state.settings[selectedIndex].worker
        });
    }
    setImage(_file) {
        console.log(`${uri_ftp}/${this.state.selectedDir}/${_file}`)
        fetch(`${uri_ftp}/${this.state.selectedDir}/${_file}`)
            .then(response => response.text())
            .then(responseText => {
                console.log("image:::")
                // console.log(responseText);
                return responseText;
            })
            .then(result => this.setState({
                image: result
            }))
            .catch(error => console.error('Unable to setImage', error));
    }
    save() {
        fetch(`${uri_workItems}/${this.state.selectedDir}`)
            .then(response => response.json())
            .then(jsonBody => {
                console.log("save items:");
                console.log(jsonBody);
                return jsonBody;
            })
            .then(result => this.setState({
                saveItems: result,
            }))
            .then(() => {
                let write_json = JSON.stringify(this.state.saveItems);
                let blob = new Blob([write_json], { type: 'application/json' });
                let a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                // document.body.appendChild(a); // Firefoxで必要
                a.download = 'result.json';
                a.click();
                // document.body.removeChild(a); // Firefoxで必要
                URL.revokeObjectURL(a.href);
            })

            .catch(error => console.error('Unable to get save items', error));
    }
    backFile() {
        console.log("1つ戻ります");
        const file = this.state.files_backup.pop();
        const files = Object.assign([], this.state.files);
        files.unshift(file);
        this.setState({ files });
        console.log(this.state.files[0]);
        this.setImage(file);
    }

    // 定義済みライフサイクルメソッド
    componentDidUpdate() {
        // localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    componentWillMount() {
        this.setImageSize(128);

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
                <div className="row">
                    <div className="col-md-8">
                        <Header />
                    </div>
                    <div className="col-md-4">
                        <StateButton
                            onToggle={this.onToggle}
                            isWorking={this.state.isWorking}
                        />
                    </div>
                </div>
                <div hidden={this.state.isWorking}>
                    <div className="row">
                        <div className="col-md-6">
                            <LineExample data={this.state.plotdata} />
                        </div>
                        <div className="col-md-6">
                            <LineExample data={this.state.plotdata} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <WorkingDirs
                                workingDirs={this.state.workingDirs}
                                setFiles={this.setFiles}
                            />
                        </div>
                        <div className="col-md-4 align-self-end">
                            <SaveButton
                                save={this.save}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <Models
                                settings={this.state.settings}
                                setTypes={this.setTypes}
                            />
                        </div>
                        <div className="col-md-6">
                            <Workers
                                workers={this.state.workers}
                            />
                        </div>
                    </div>
                </div>
                <Types
                    types={this.state.types}
                    isWorking={this.state.isWorking}
                    buttonClick={this.buttonClick}
                />
                <div hidden={!this.state.isWorking}>
                    <ImagePlace
                        image={this.state.image}
                        imageSize={this.state.imageSize} />
                    <ImageSize
                        imageSize={this.state.imageSize}
                        setImageSize={this.setImageSize}
                    />
                    <Button variant="info" onClick={() => { this.backFile() }}>１枚戻る</Button>
                    <Files
                        files={this.state.files}
                    />
                    <br />
                </div>
            </div >
        );
    }
}

export default WorkApp;