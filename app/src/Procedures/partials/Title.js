export const Title = ({handleChange}) => {
    return(
        <>
        <div className="form-group">
            <label>Title of the procedure</label>
            <input type="text" name="name" autoFocus className="form-control" onChange={handleChange} />
        </div>
        </>
    );
}