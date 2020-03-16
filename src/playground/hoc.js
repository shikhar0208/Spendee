// Higher Order Component (HOC) - A component (HOC) that renders another component
// Goal of HOC are: 
// Reuse code
// Render Hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is : {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    // HOC
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props} /> 
        </div>
    );
}
const AdminInfo = withAdminWarning(Info);

// requireAuthentication

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view info.</p>}
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);

// ReactDom.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById("app"));
ReactDom.render(<AuthInfo isAuthenticated = {true} info="There are the details" />, document.getElementById("app"));
