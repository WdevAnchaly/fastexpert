import React, { Component } from 'react'
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';

export class PrivateRoute extends Component {
    
    render() {
        let zip_code = this.props.data.useraddress.postal_code ;
    
        return (
            zip_code ? this.props.children : <Navigate to={`${process.env.PUBLIC_URL}/`} />
        )
    }
}
const mapStateToProps = (state) => ({
    data: state.combine
})

export default connect(mapStateToProps)(PrivateRoute);


