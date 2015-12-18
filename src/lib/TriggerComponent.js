import React, { Component, PropTypes } from 'react';

export default class TriggerComponent extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired,
    componentHtml: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

  }

  render() {
    const refName = "hover1";
    const { styles, componentHtml } = this.props;
    return (
      <h1 
        style={styles.trigger} 
        onMouseOver={this.onMouseOver.bind(this, refName)}
        dangerouslySetInnerHTML={{ __html: componentHtml.hoverComponent }}
        > 
      </h1>
    );
  }

  onMouseOver() {
    //const refDom = eval(`this.refs.${ref}`);
    console.log('hover');
  }
}