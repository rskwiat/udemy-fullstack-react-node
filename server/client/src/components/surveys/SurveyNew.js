//SurveyNew Shoes SurveyForm and Survey 
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = {
    showReview: false
  };

  renderContent() {
    const { showReview } = this.state;

    if (showReview) {
      return <SurveyFormReview
        onCancel={() => 
          this.setState({ showReview: false })}
       />
    }

    return <SurveyForm 
      onSurveySubmit={() => 
        this.setState({ showReview: true })}
    />
  }

  render() {
    return (
      <div className="container container-app">
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
