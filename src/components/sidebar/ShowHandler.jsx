const showForm = (event, setIsVisible, isVisible) => {
    event.preventDefault();
    setIsVisible(!isVisible);
};

const showAll = (event, setShowData, showData) => {
    event.preventDefault();
    setShowData(!showData);
};

const showSubmit = (event, handleInputSubmit, setShowData, showData) => {
    event.preventDefault();
    handleInputSubmit(event);
    showAll(event, setShowData, showData);
};

export { showForm, showAll, showSubmit }; 