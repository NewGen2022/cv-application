const TopBar = () => {
    const handleClear = () => {
        console.log('Clear Resume clicked');
    };

    const handleLoadExample = () => {
        console.log('Load Example clicked');
    };

    const handleDownload = () => {
        console.log('Download clicked');
    };

    return (
        <div id='top-bar'>
            <button id='clear' onClick={handleClear}>Clear Resume</button>
            <button id='load-example' onClick={handleLoadExample}>Load Example</button>
            <button id='download' onClick={handleDownload}>Download</button>
        </div>
    );
};

export default TopBar;
