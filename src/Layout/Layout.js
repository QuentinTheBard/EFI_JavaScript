import React from 'react';
import '../CSS/layout.css';



class Layout extends React.Component {

    constructor(props) {
        super(props);
    }




    render() {
        return(
            <div className="layout-container">
                <h3>{this.props.children}</h3>
            </div>
        )
    }
}


export default Layout;