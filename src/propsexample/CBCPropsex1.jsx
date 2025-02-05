import React, { Component } from 'react';

class CBCPropsex1 extends Component {
    render() {
        console.log(this);

        console.log(this.props.username);
        console.log(this.props.age);
        return (
            <div>
                <h1>{this.props.username}</h1>
                <h1>{this.props.age}</h1>
                <h2>{this.props.value ? "true" : "false"}</h2>
                <h2>{this.props.desig[0]}</h2>
                <h2>{this.props.userDetails.area}</h2>
                <button onClick={this.props.sendFun}>Click me!</button>
            </div>

        )
    }
}
export default CBCPropsex1;