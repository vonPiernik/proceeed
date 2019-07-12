export const SaveButton = ({save}) => {
    return(
        <>
        <button type="button" className="btn btn-success btn-icon-split mt-2" onClick={save}>
            <span className="icon text-white-50">
                <i className="fas fa-check"></i>
            </span>
            <span className="text">Create</span>
        </button>
        </>
    );
}