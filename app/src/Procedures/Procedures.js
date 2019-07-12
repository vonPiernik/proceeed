import { connect } from "react-redux";
import { pageActions } from "../_actions/page";

class Procedures extends React.Component {
    componentDidMount(){
        this.props.dispatch( pageActions.info.setTitle('Your procedures') )
    }
  
    render(){
      return (
        <>
        There's nothing here.
        </>
      );
    }
  }
  const mapStateToProps = state => {
      return {
      };
  };
    
  const connectedProcedures = connect(mapStateToProps)(Procedures);
  export { connectedProcedures as Procedures };