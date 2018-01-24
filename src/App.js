import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Input extends Component {
  render() {
    return (<div className="Input">
      <input id={this.props.name} autocomplete="false" required="required" type={this.props.type} placeholder={this.props.placeholder}/>
      <label for={this.props.name}></label>
    </div>);
  }
};

export class Modal extends Component {
  render() {
    const formStyle = {
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center'
    }
    const btnStyle = {
      'margin-top' : 13
    }
    const headerStyle = {
      'color': "#c6a83b",
      'text-align': 'center'
    }
    return (<div className="Modal">
      <h1 style={headerStyle}>Log in</h1>
      <form style={formStyle} onSubmit={this.props.onSubmit} className="ModalForm">
        <Input id="name" type="text" placeholder="Jack-Edward Oliver"/>
        <Input id="username" type="email" placeholder="mrjackolai@gmail.com"/>
        <Input id="password" type="password" placeholder="password"/>
        <RaisedButton label="Log In" secondary={true} style={btnStyle}/>
      </form>
    </div>);
  }
}

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    this.setState({mounted: true});
  }

  handleSubmit(e) {
    this.setState({mounted: false});
    e.preventDefault();
  }

  render() {
    const style = {
      'display': 'flex',
      'justify-content': 'center',
      'margin': '200px 35%',
      'padding': 20,
      'background-color': '#231830',
      'width': 400,
      'height': 250,
      'align-items': 'center',
      'border': '10px outset #c6a83b'
    }
    var child;

    if (this.state.mounted) {
      child = (<Modal onSubmit={this.handleSubmit}/>);
    }

    return (<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div className="App" style={style}>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {child}
        </ReactCSSTransitionGroup>
      </div>
    </MuiThemeProvider>);
  }
};

export default App;
