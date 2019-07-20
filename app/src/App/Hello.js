import { connect } from "react-redux";
import { pageActions } from "../_actions/page";
import { Link } from "react-router-dom";

class Hello extends React.Component {
    componentDidMount(){
        this.props.dispatch( pageActions.info.setTitle('Welcome to Proceeed!') )
    }
  
    render(){
      return (
        <>
        <hr />
        <h4>Let's <Link to="/a/procedures/new">create</Link> your first procedure.</h4>
        </>
      );
    }
  }
  const mapStateToProps = state => {
      return {
      };
  };
    
  const connectedHello = connect(mapStateToProps)(Hello);
  export { connectedHello as Hello };