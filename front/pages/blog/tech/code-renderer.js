import React from 'react';


Lowlight.registerLanguage('js', js);

// const CodeBlock = React.createClass({
//   displayName: 'CodeBlock',
//   propTypes: {
//     literal: React.PropTypes.string,
//     language: React.PropTypes.string,
//     inline: React.PropTypes.bool
//   },

//   shouldComponentUpdate(nextProps, nextState) {
//     return shallowCompare(this, nextProps, nextState);
//   },

//   render: function () {
//     return (
//       <Lowlight
//         language={this.props.language || 'js'}
//         value={this.props.literal}
//         inline={this.props.inline}
//       />
//     );
//   }
// });

class CodeBlock extends React.Component {


  render() {
    return (
      <div>5tr</div>
    );
  }
}

export default CodeBlock;