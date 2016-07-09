/**
 * Created by john.sjostrom on 2016-07-07.
 */
import React from "react";
import ClassNames from "classNames"

export default class Menu extends React.Component {
    constructor() {
        super();
    }

    onClick(target){
        this.props.setFilter(target);
    }

    render() {
        return (
            <ul class="filterMenu" >
                <li className={ClassNames({active : (this.props.activeFilter === null)})}
                    onClick={this.onClick.bind(this, null)} >All</li>
                <li className={ClassNames({active : (this.props.activeFilter === "todo")})}
                    onClick={this.onClick.bind(this, "todo")} >To do</li>
                <li className={ClassNames({active : (this.props.activeFilter === "done")})}
                    onClick={this.onClick.bind(this, "done")} >Done</li>
                <li className={ClassNames({active : (this.props.activeFilter === "removed")})}
                    onClick={this.onClick.bind(this, "removed")} >Removed</li>
            </ul>
        );
    }
}