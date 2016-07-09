/**
 * Created by john.sjostrom on 2016-07-08.
 */
import React from "react";

import Task from "./tasks/Task"

export default class Tasks extends React.Component {
    makeTasks(rawTasks){
        let filteredTasks = rawTasks.filter(this.filterTasks, this),
            sortTasks = this.sortTasks(filteredTasks, this.props.sort !== "newest_first");

        return sortTasks.map(this.makeTask, this);
    }

    filterTasks(task){
        if ( this.props.filter ){
            return task.status === this.props.filter;
        }

        return true;
    }

    sortTasks(array, ascending){
        return array.sort(function(a, b) {
            let x = a.updated_at,
                y = b.updated_at;

            return ((x < y) ? (ascending ? -1 : 1) : ((x > y) ? (ascending ? 1 : -1) : 0));
        });
    }

    makeTask(rawTask){
        return <Task
            description = {rawTask.description}
            status = {rawTask.status}
            key = {rawTask.updated_at}
            id = {rawTask.updated_at}
            setTaskStatus = {this.props.setTaskStatus}/>
    }

    render() {
        let tasks = this.makeTasks(this.props.tasks);

        return (
            <div class="tasksContainer" >
                {tasks}
            </div>
        );
    }
}