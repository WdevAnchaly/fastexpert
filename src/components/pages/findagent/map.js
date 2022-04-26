import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'


function SearchLocationInput() {
    const [query, setQuery] = useState("");
    const [address, setAddress] = useState("");
    const autoCompleteRef = useRef(null);
    const dispatch = useDispatch();


    let autoComplete;

    const loadScript = (url, callback) => {
        let script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = () => callback();
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    function handleScriptLoad(updateQuery, autoCompleteRef) {
        autoComplete = new window.google.maps.places.Autocomplete(
            autoCompleteRef.current,
            { types: ["(regions)"], componentRestrictions: { country: "us" } }
        );
        autoComplete.setFields(["address_components", "formatted_address"]);
        autoComplete.addListener("place_changed", () =>
            handlePlaceSelect(updateQuery)
        );
    }

    async function handlePlaceSelect(updateQuery) {
        const addressObject = autoComplete.getPlace();
        const query = addressObject.formatted_address;
        updateQuery(query);

        setAddress(addressObject);
        console.log(addressObject);
        console.log(address);
    }


    useEffect(() => {
        loadScript(
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyDrUdD-r-T3kyHRJnsqgxSSGYiPqlprz24&libraries=places',
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );

    }, []);

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     dispatch(addBird(address))
    //     setQuery('');
    //   };

    return (

        <div className="tab-pane active" id="add-agent">
            <div className="input-group">
                <div className="group-s RadIOSeCtIOnIndexPageSGroPu">
                    <h2>Search by ZIP Code</h2>
                    {/* <form onSubmit={handleSubmit}> */}

                        <div className="form-group">
                            <span><img src={`${process.env.PUBLIC_URL}/assets/locator_1.png`} alt="Location" /></span>
                            <input
                                ref={autoCompleteRef}
                                onChange={event => setQuery(event.target.value)}
                                placeholder="Enter Zip Code"
                                value={query}
                            />
                        </div>
                        <div className="input-group-btn _send-button">
                            <Link to='/step'>
                                <button type="submit" className="btn btn-primary pushSubmit" id="passzip" >
                                    <span>Continue</span>
                                </button></Link>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
}

export default SearchLocationInput;