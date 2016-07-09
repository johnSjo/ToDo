import React from "react";
import 'babel-polyfill';

import Header from "./Header";
import AddTask from "./AddTask";
import Menu from "./Menu";
import Tasks from "./Tasks";
import Footer from "./Footer";

import StorageManager from "../StorageManager"

export default class Layout extends React.Component {
    constructor() {
        super();
        this.storageManager = new StorageManager;

        // set state
        this.state = this.storageManager.getData();
    }

    updateState(obj) {
        let filter_by = obj.filter_by === undefined ? this.state.filter_by : obj.filter_by;

        this.setState({
            filter_by,
            sort_by: obj.sort_by || this.state.sort_by,
            items: obj.items || this.state.items
        });
    }

    addNewTask(newTask) {
        let items = this.state.items;

        items.push({
            updated_at: Date.now(),
            description: newTask,
            status: "todo"
        });

        this.updateState({ items });
    }

    setTaskStatus(id, status) {
        let items = this.state.items,
            task = items.find(t => t.updated_at === id);

        task.status = status;
        task.updated_at = Date.now();

        this.updateState({ items });
    }

    setFilter(id){
        this.updateState({filter_by : id});
    }

    render() {

        // if we're doing a render something have changed so lets update local storage
        this.storageManager.setData(this.state);

        return (
            <div class="appContainer">
                <Header />
                <div class="centerBg">
                    <div class="center">
                        <AddTask addNewTask={this.addNewTask.bind(this)}/>
                        <Menu
                            activeFilter={this.state.filter_by}
                            setFilter={this.setFilter.bind(this)} />
                        <Tasks
                            tasks={this.state.items}
                            filter={this.state.filter_by}
                            sort={this.state.sort_by}
                            setTaskStatus={this.setTaskStatus.bind(this)} />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}