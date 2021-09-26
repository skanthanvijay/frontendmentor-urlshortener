import React, {useState, useEffect} from "react";

function UrlShortener(props) {

    const [inputText, setInputText] = useState({url: "", shortUrl: "", copyState: "Copy", bgColor: `hsl(180, 66%, 49%)`});

    const [validURL, setValidURL] = useState({state: false, alertText: "hidden", borderCol: "white", phColor: "grey" }); 
    // alertText: "hidden" hides the alert to add a valid URL, "" shows it.
    
    function handleChange(event) {
        const { name, value } = event.target;
        setInputText(prevValue => ({ ...prevValue, [name]: value }));
    }

    
    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.shrtco.de/v2/shorten?url=' + inputText.url)
            .then(response => response.json())
            .then(response => {
                if (response.ok === true) {
                    setInputText(prevValue => ({ ...prevValue, shortUrl: response.result.full_short_link }));
                    setValidURL({state: true, alertText: "hidden", borderCol: "white", phColor: "grey" });
                }
                else {
                    setInputText(prevValue => ({ ...prevValue, shortUrl: "Please Insert A Valid URL." }));
                    setValidURL(prevValue => ({ ...prevValue, state: false }));
                }
            });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [inputText.url]);


    return (
        <div className="urlshortener">
            <form
                onSubmit={(event) => {
                    if (validURL.state === true) {
                        props.onAdd(inputText);
                        setInputText({url: "", shortUrl: "", copyState: "Copy", bgColor: `hsl(180, 66%, 49%)` });
                        event.preventDefault();
                    }
                    else { 
                        setValidURL(prevValue => ({ ...prevValue, alertText: "", borderCol: `hsl(0, 87%, 67%)`, phColor: `hsl(0, 95%, 77%)` }));
                        setInputText(prevValue => ({ ...prevValue, url: "" }));
                        event.preventDefault(); 
                    }
                }}
            >
            <div className="urlshort-container">
                <input 
                    style={{ borderColor: validURL.borderCol,  '--placeholder-color': validURL.phColor }} 
                    onChange={handleChange} 
                    value={inputText.url} 
                    name="url" 
                    placeholder="Shorten a link here..."
                />
                <button className type="submit">Shorten It!</button>
                <h6 className={validURL.alertText}><i>Please add a valid link</i></h6>
            </div>
            </form>
        </div>
    );
}

export default UrlShortener;