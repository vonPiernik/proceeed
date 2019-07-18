import { promisedSetState } from "../../_helpers/promisedState";

const Task = ({i, task, handleChange, removeTask}) => {
    return (
    <div className="col-xl-3 col-md-6 mb-4 single-task">
        <div className="card border-left-primary shadow h-100">
        <div className="card-body">
            <span className="single-task__remove"><i className="fas fa-trash fa-2x text-gray-500" onClick={removeTask} data-task-id={i}></i></span>
            <div className="row no-gutters align-items-center">
            <div className="col-auto task-id text-gray-500 mr-4">
                {task.order}
            </div>
            <div className="col">
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                    <textarea autoFocus rows="2" width="100%" name="name" data-task-id={i} placeholder="What should be done to complete this step?" onChange={handleChange} value={task.name} />
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

        this.setState()
        promisedSetState(this, { tasks: [ ...this.state.tasks, { name: '', order } ] }).then( () => {
            this.props.updateTasks( this.state.tasks );
        })
    }

    handleChange = e => {
        let id      = e.target.dataset.taskId;
        let param   = e.target.name;
        let value   = e.target.value;
        let {tasks}   = this.state;

        tasks[id][param] = value;

        promisedSetState(this, { tasks } ).then( () => {
            this.props.updateTasks( this.state.tasks );
        })
    }

    removeTask = e => {
        let id      = e.target.dataset.taskId;
        let {tasks}   = this.state;

        tasks = tasks.filter((task, index) => { return index != id });

        tasks = this.updateOrder(tasks);
        promisedSetState(this, { tasks } ).then( () => {
            this.props.updateTasks( this.state.tasks );
        })
    }

    updateOrder = tasks => {
        tasks.forEach((task, index) => {
            tasks[index].order = index + 1;
        });

        return tasks;
    }

    render(){
        const {tasks} = this.state;
        
        let taskItems = tasks.map((task, index) => {
            return <Task key={index} i={index} task={task} handleChange={this.handleChange} removeTask={this.removeTask} />
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