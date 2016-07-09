/**
 * Created by john.sjostrom on 2016-07-08.
 */
import React from "react";
import ClassNames from "classNames"

export default class Tasks extends React.Component {

    onCheck(){
        this.props.setTaskStatus(this.props.id, "done");
    }

    onRemove(){
        this.props.setTaskStatus(this.props.id, "removed");
    }

    onKeyUp(e){
        if (e.keyCode === 13 && this.props.status === "todo"){
            this.onCheck();
        }

        if (e.keyCode === 27 && this.props.status !== "removed"){
            this.onRemove();
        }
    }

    render() {
        let divClass = ClassNames("task", "clearfix"),
            task = [<p class="description">{this.props.description}</p>],
            checkButton,
            removeButton;

        if ( this.props.status === "todo" ){
            checkButton = <div className={ClassNames("button", "check")} onClick={this.onCheck.bind(this)}></div>
        }

        if ( this.props.status === "todo" || this.props.status === "done" ){
            removeButton = <div className={ClassNames("button", "remove")} onClick={this.onRemove.bind(this)}></div>
        }

                //{task}
        return (
            <div className={divClass} tabIndex="0" onKeyUp = {this.onKeyUp.bind(this)} >
                <div className={ClassNames(this.props.status, "taskMarker")}></div>
                <p class="description">{this.props.description}</p>
                <div class="taskButtonsContainer">
                    {checkButton}
                    {removeButton}
                </div>
            </div>
        );
    }
}