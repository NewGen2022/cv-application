const handleDelete = (dataToDelete, setData) => {
    setData((prevState) => 
        prevState.filter(data => data !== dataToDelete
        ));
};

export default handleDelete;