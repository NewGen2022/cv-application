const handleInputSubmit = (event, setData) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const data = {};

    for (const entry of formData.entries()) {
        const [name, value] = entry;
        data[name] = value;
    }

    setData((prevState) => [
        ...prevState,
        { ...data }
    ]);
};

export default handleInputSubmit;