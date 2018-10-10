import React from 'react';
import { connect } from 'react-redux';
import { nameSpaces, stateMapper, actionsMapper } from '../handlers';
import Layout from '../layouts/Main';

const View = () => {
  return (
    <Layout>
      <h1>Header 1</h1>
      <p>
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
        Lorem ipsum dolorum Lorem ipsum dolorum Lorem ipsum dolorum 
      </p>
    </Layout>
  );
};

export default connect(
  // variables from the store -> maps to this.props.$state
  stateMapper({
    newsArticles: [nameSpaces.NEWS],
    loading: [nameSpaces.NEWS],
    error: [nameSpaces.NEWS],
  }),
  // actions -> maps to this.props.$actions.{SHADOW_NAME}
  actionsMapper([
    nameSpaces.NEWS,
  ]),
)(View);
