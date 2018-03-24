import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tab: 0
    };
    this.headers = this.props.panes.map((prop, idx) => {
      let show = "";

      if (this.state === idx) {
        show = "selected";
      }

      return (
        <li key={idx}
          className={show}
          onClick={this.setTabIndex.bind(this,idx)}>
          {prop.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="tabs">
        <div className="white">
          <ul className="tab-titles">
            {this.headers}
          </ul>
        </div>
        <div className="tab-content">
          <article>{this.props.panes[this.state.tab].content}</article>
        </div>
      </div>
    );
  }

  setTabIndex(idx) {
    this.setState({tab: idx});
  }
}

module.exports = Tabs;
