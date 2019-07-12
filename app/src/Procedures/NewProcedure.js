import { connect } from "react-redux";

class NewProcedure extends React.Component {

    render(){
        return (
        <>
        <h1>Create new procedure</h1>
        </>
        );
    }
}

const mapStateToProps = state => {

    return {
    };
};
  
const connectedNewProcedure = connect(mapStateToProps)(NewProcedure);
export { connectedNewProcedure as NewProcedure };