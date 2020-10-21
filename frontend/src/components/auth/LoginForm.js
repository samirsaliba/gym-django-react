import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions/auth';

class LoginForm extends Component {
  renderField = ({ input, type, placeholder, meta: { touched, error } }) => {
    return (
      <div className={`${touched && error ? 'error' : ''}`}>
        <input {...input} type={type} placeholder={placeholder} className='form-control' />
        {touched && error && (
          <span className='alert alert-danger'>{error}</span>
        )}
      </div>
    );
  };

  hiddenField = ({ type, meta: { error } }) => {
    return (
      <div className='field'>
        <input type={type} />
        {error && <div className='alert alert-danger'>{error}</div>}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.login(formValues);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }

    return (
      <div className='d-flex justify-content-center'>
        <div className='col-md-4'>
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className='form-signin'
          >
            <Field
              name='username'
              type='text'
              component={this.renderField}
              placeholder="Username"
            />
            <Field
              name='password'
              type='password'
              component={this.renderField}
              placeholder="Password"
            />
            <Field
              name='non_field_errors'
              type='hidden'
              component={this.hiddenField}
            />
            <button className='btn btn-lg btn-primary btn-block'>Login</button>
          </form>
          <p>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

LoginForm = connect(
  mapStateToProps,
  { login }
)(LoginForm);

export default reduxForm({
  form: 'loginForm'
})(LoginForm);