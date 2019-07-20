import { connect } from "react-redux";
import { pageActions } from "../_actions/page";
import { Title } from "./partials/Title";
import { SaveButton } from "./partials/Buttons";
import { Tasks } from "./partials/Tasks";
import { create } from "../_actions/procedure";

class NewProcedure extends React.Component {
    constructor(){
        super();

        this.state = {
        }
    }

    componentDidMount(){
        this.props.dispatch( pageActions.info.setTitle('Procedure creator') )
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    setTasks = tasks => {
        this.setState({tasks: tasks});
    }

    save = () => {
        this.props.dispatch( create(this.state) );
    }

    updateTasks = tasks => {
        this.setState( { tasks } );
    }

    render(){
        return (
        <>
            <Title handleChange={this.handleChange} />
            <Tasks updateTasks={this.updateTasks} />
            <hr />
            <SaveButton save={this.save} />
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