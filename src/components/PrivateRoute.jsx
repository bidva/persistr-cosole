import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component,user , ...rest }) => {
  let query = [];
  if (rest.location && rest.location.search) {
    query.push(rest.location.search)
    if (rest.path) {
      query.push(`redirect=${rest.path}`)
    }
  }
  return(
    <Route {...rest} render={props => (
      localStorage.getItem('token')
            ? <Component {...props} {...rest} />
          : <Redirect to={`/${query.join('&')}`}/>
    )} />
)}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  user: PropTypes.any,
};
