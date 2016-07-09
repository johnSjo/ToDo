/**
 * Created by john.sjostrom on 2016-07-07.
 */
import React from "react";

export default class AddTask extends React.Component {

    onFormSubmit(e){
        let taskString = e.target[0].value;

        e.target[0].value = "";

        e.preventDefault();

        if ( taskString.length > 0 ){
            this.props.addNewTask(taskString);
        }
    }

    render() {
        return (
            <div>
                <h2 class="pageHeader">My Tasks</h2>
                <form class="addTaskForm" onSubmit={this.onFormSubmit.bind(this)} >
                    <input class="inputTextField" maxLength={120} placeholder="Add new task..." />
                    <input class="inputSubmitButton button" type="submit" value="" />
                </form>
            </div>
        );
    }
}