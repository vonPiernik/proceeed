const Task = () => {
    return (
    <div className="col-xl-3 col-md-6 mb-4">
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

const TasksWrapper = ({children}) => {
    return(
        <>
        <hr />
        <label>Steps</label>
        <div className="row">
            {children}
        </div>
        </>
    )
}

export class Tasks extends React.Component {
    render(){
        return(
            <>
            <TasksWrapper>
                <Task />
            </TasksWrapper>
            </>
        );
    }
}