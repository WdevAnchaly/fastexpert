import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import { connect } from "react-redux";
import { addressSave } from "../../../actions/index"

class SearchLocationInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: [],
            routes: '',
            neighborhood: '',
            sublocality: '',
            political: '',
            city: '',
            state: '',
            postal_code: '',
            country: '',
            formatted_address: '',
            lat: '',
            lng: '',
            shortState: '',
            focus: false,
            loder: false,
        };
    }

    onPlaceSelectedFun = ((place) => {
        
     //   console.log(this.stete);
     this.setState({ loder: true });

        this.setState({ place: place });
        this.setState({ formatted_address: place.formatted_address });
        let address_components = place.address_components;
        var zipCode = '';
        for (let z = 0; z < address_components.length; z++) {
            if (address_components[z].types[0] === 'route') {
                this.setState({ routes: address_components[z].long_name });
            }
            if (address_components[z].types[0] === 'neighborhood') {
                this.setState({ neighborhood: address_components[z].long_name });
            }
            if (address_components[z].types[0] === 'sublocality_level_2') {
                this.setState({ sublocality: address_components[z].long_name });
            }
            if (address_components[z].types[0] === 'sublocality_level_1') {
                this.setState({ political: address_components[z].long_name });
            }
            if (address_components[z].types[0] === 'locality') {
                this.setState({ city: address_components[z].long_name });
            }
            if (address_components[z].types[0] === 'administrative_area_level_1') {
                this.setState({ state: address_components[z].long_name, shortState: address_components[z].short_name });
            }

            if (address_components[z].types[0] === 'postal_code') {
                zipCode = address_components[z].types[0] === 'postal_code' ? address_components[z].long_name : "";
                this.setState({ postal_code: address_components[z].long_name });
                this.setState({ loder: false });
            }

            if (address_components[z].types[0] === 'country') {
                this.setState({ country: address_components[z].long_name });
            }
        }

        let lng = place.geometry.location.lng();
        let lat = place.geometry.location.lat();
        this.setState({ lat: lat });
        this.setState({ lng: lng });

        console.log(this.state)
        if (zipCode === '' || zipCode === 'undefined') {
            
            console.log(this.state)
            var formdata = new FormData();
            formdata.append("seller_state", this.state.shortState);
            formdata.append("seller_city", this.state.city);
            var requestOptions = {
                method: 'POST',
                body: formdata,
            };


            fetch("https://www.fastexpertdev.com/ads/findagent/check_zipcode.php", requestOptions)
                .then(response => response.text())
                .then(result => {
                    let newZip = result.split("~~~");
                    let Zip = newZip[1];
                    console.log(Zip)
                    if (Zip !== "0" || Zip !== 'undefined' ) {
                        this.setState({ postal_code: Zip });
                        console.log(this.state);
                       
                    } else {
                        this.setState({ postal_code: '' });
                    }
                })
                .catch(error => console.log('error', error));
        }
        console.log(this.state)

        setTimeout(() => {
            const user = this.state;
            // console.log(user);
            this.props.addressSave(user);
            this.setState({ loder: false });
        }, 1000);
    })

    focusInputBox = () => {
    
        this.setState({ focus: true });

    }


    render() {

        //console.log(this.props.data);
        return (
            <div className="tab-pane active" id="add-agent">
                <div className="input-group">
                    <div className="group-s RadIOSeCtIOnIndexPageSGroPu">
                        <h2>Search by ZIP Code</h2>
                        <div className='loc_symbool'>
                            <span><img src={`${process.env.PUBLIC_URL}/assets/locator_1.png`} alt="Location" /></span>
                        </div>
                        <Autocomplete
                            apiKey='AIzaSyDrUdD-r-T3kyHRJnsqgxSSGYiPqlprz24'
                            style={{ width: "100%" }}
                            onPlaceSelected={this.onPlaceSelectedFun}
                            placeholder='Enter Zip Code'
                            options={{
                                types: ["(regions)"],
                                componentRestrictions: { country: "us" },
                            }}
                            onChange={(e) => {
                                // this.setState({ focus: false });
                                if (e.target.value === "") {
                                    const user = this.state;
                                    this.props.addressSave(user);
                                }
                            }}
                            className={this.state.focus ? "focusRed" : ""}
                            defaultValue={this.props.data.useraddress.formatted_address ? this.props.data.useraddress.formatted_address : this.state.formatted_address}
                        />
                        {console.log(this.state)}
                        <div className="input-group-btn _send-button" >


                            {this.props.data.useraddress.postal_code ? (
                                <Link to={this.state.loder ? "" : '/lead_type'} >
                                    <button type="submit" className="btn btn-primary pushSubmit" id="passzip">
                                        <span>{this.state.loder ? <div className="d-flex justify-content-center">
                                            <div className="spinner-border text-secondary" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div> : 'Continue'}</span>
                                    </button>
                                </Link>
                            ) : (
                                <button type="submit" className="btn btn-primary pushSubmit " id="passzip" onClick={this.state.loder ?this.focusInputBox :`` }>
                                    <span>{this.state.loder ? <div className="d-flex justify-content-center">
                                        <div className="spinner-border text-secondary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div> : 'Continue'}</span>
                                </button>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    data: state.combine
})
const mapDispatchToProps = {
    addressSave
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchLocationInput);