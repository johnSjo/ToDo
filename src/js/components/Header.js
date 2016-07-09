import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div class="headerBg" >
                <div class="header" >
                    <img class="logo" src="assets/images/logo.png" />
                    <h1>Taskmaster 5000</h1>
                </div>
            </div>
        );
    }
}