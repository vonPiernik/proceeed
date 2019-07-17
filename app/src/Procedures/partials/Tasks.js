const Task = ({i, task, handleChange}) => {
    return (
    <div className="col-xl-3 col-md-6 mb-4 single-task">
        <div className="card border-left-primary shadow h-100">
        <div className="card-body">
            <div className="row no-gutters align-items-center">
            <div className="col-auto task-id text-gray-500 mr-4">
                {task.order}
            </div>
            <div className="col">
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                    <textarea rows="2" width="100%" name="name" data-task-id={i} placeholder="What should be done to complete this step?" onChange={handleChange} />
                </div>
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
        let order = this.state.tasks.length + 1; //@todo: in the future it will change, some task may be parallel

        this.setState({tasks: [...this.state.tasks, {name: '', order}]})
    }

    handleChange = e => {
        let id      = e.target.dataset.taskId;
        let param   = e.target.name;
        let value   = e.target.value;
        let {tasks}   = this.state;

        tasks[id][param] = value;

        this.setState({tasks});
    }

    render(){
        const {tasks} = this.state;
        
        let taskItems = tasks.map((task, index) => {
            return <Task key={index} i={index} task={task} handleChange={this.handleChange} />
        });

        return(
            <>
            <TasksWrapper>
                {taskItems}
                <AddNew addTask={this.addTask} />
            </TasksWrapper>
            </>
        );
    }
}