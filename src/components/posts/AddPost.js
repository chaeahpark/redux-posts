import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addPost } from '../../redux/actions';

class AddPost extends Component {
  // I created two different example
  // 1. renderTitleInput 2. renderBodyInput
  // There are two different ways to get props
  // from Field component.
  // 1 gets props without destructuring
  // 2 gets props with destructuring

  renderTitleInput(formProps) {
    return (
      <div className="field">
        <label htmlFor="title">{formProps.label}</label>
        <input
          value={formProps.input.value}
          onChange={formProps.input.onChange}
        />
      </div>
    );
  }

  renderBodyInput({ input, label }) {
    console.log(input);
    return (
      <div className="field">
        <label htmlFor="body">{label}</label>
        <textarea {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    this.props.addPost(formValues);
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleInput}
          label="Enter Title: "
        />
        <Field
          name="body"
          component={this.renderBodyInput}
          label="Enter content: "
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// const validate = formValues => {
//   const errors = {};

//   if (!formValues.title) {
//     errors.title = 'You must enter a title';
//   }
//   if (!formValues.description)
//     errors.description = 'You must enter a description';
// };

const formWrapped = reduxForm({
  form: 'postAdd'
})(AddPost);

export default connect(null, { addPost })(formWrapped);
