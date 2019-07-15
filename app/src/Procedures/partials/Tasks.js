const Task = () => {
    return (
    <div className="col-xl-3 col-md-6 mb-4 single-task">
        <div className="card border-left-primary shadow h-100">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
            <div className="col-auto task-id text-gray-500 mr-4">
                1
            </div>
            <div className="col">
                <div className="h5 mb-0 font-weight-bold text-gray-800">Task name</div>
            </div>
            </div>
        </div>
        </div>
    </div>
    );
}

const AddNew = ({addTask}) => {
    return (
        <div className="col-xl-3 col-md-6 mb-4 add-new-task" title="Add new task" onClick={addTask}>
            <div className="h-100">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <i className="fas fa-plus fa-2x text-gray-500"></i>
                </div>
            </div>
            </div>
        </div>
    );
}

const TasksWrapper = ({children}) => {
    return(
        <>
        <hr />
        <label>Steps</label>
        <div className="row justify-content-center">
            {children}
        </div>
        </>
    )
}

export class Tasks extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: []
        }
    }

    addTask = () => {
        this.setState({tasks: [...this.state.tasks, {name: '', order: 1}]})
    }

    render(){
        const {tasks} = this.state;
        console.log('%c⧭', 'color: #f2ceb6', tasks);
        
        let taksItems = tasks.map((task, index) => {
            return <Task key={index} i={index} task={task} />
        });
        console.log('%c⧭', 'color: #00e600', taksItems);

        return(
            <>
            <TasksWrapper>
                {taksItems}
                <AddNew addTask={this.addTask} />
            </TasksWrapper>
            </>
        );
    }
}