import { connect } from "react-redux";
import { pageActions } from "../_actions/page";
import { Title } from "./partials/Title";
import { SaveButton } from "./partials/Buttons";
import { Tasks } from "./partials/Tasks";

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

    setTitle = () => {
        const {title} = this.state;
        const {setTitle} = this.props;

        setTitle(title);
    }

    save = () => {
        console.log('%c⧭', 'color: #27a700', 'save', this.state);
    }

    render(){
        return (
        <>
            <Title handleChange={this.handleChange} />
            <Tasks />
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