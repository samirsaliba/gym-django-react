import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions/auth';

class LoginForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} type={type} />
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
      <div className=''>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='form-group'
        >
          <Field
            name='username'
            type='text'
            component={this.renderField}
            label='Username'
            className='form-control'
          />
          <Field
            name='password'
            type='password'
            component={this.renderField}
            label='Password'
            className='form-control'
          />
          <Field
            name='non_field_errors'
            type='hidden'
            component={this.hiddenField}
            className='form-control alert alert-danger'
          />
          <button className='btn btn-primary'>Login</button>
        </form>
        <p>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
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