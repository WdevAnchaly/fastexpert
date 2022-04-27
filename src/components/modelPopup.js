import React, { useState } from 'react'
import Autocomplete from "react-google-autocomplete";
import Popupcard from './popupcard';
import { useSelector,useDispatch } from 'react-redux';
import { addressSave } from "../actions/index.js"





const ModelPopup = () => {
    const saveAdd = useSelector((state) => {
        return state.combine.useraddress;
    })
    const dispatch = useDispatch();
    
    const [saveAddress, setUpdateAddress] = useState({
        ...saveAdd,
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
    })


    const saveAddressPopup = (place) => {
        // console.log(place);
        let address_components = place.address_components;
        for (let z = 0; z < address_components.length; z++) {
            if (address_components[z].types[0] === 'route') {
                var routes = address_components[z].long_name;
            }
            if (address_components[z].types[0] === 'neighborhood') {
                var neighborhood = address_components[z].long_name;
            }
            if (address_components[z].types[0] === 'sublocality_level_2') {
                var sublocality = address_components[z].long_name;
            }
            if (address_components[z].types[0] === 'sublocality_level_1') {
                var political = address_components[z].long_name;
            }
            if (address_components[z].types[0] === 'locality') {
                var cityName = address_components[z].long_name;
            }
            if (address_components[z].types[0] === 'administrative_area_level_1') {
                var stateName = address_components[z].long_name;
            }
            if (address_components[z].types[0] === 'postal_code') {
                var zipCode = address_components[z].long_name;
            }
            if (address_components[z].types[0] === 'country') {
                var country = address_components[z].long_name;
            }
        }

        // console.log(zipCode);
        setUpdateAddress({
            ...saveAddress,
            place: place,
            formatted_address: place.formatted_address ,
            postal_code :zipCode,
            state:stateName,
            city:cityName,
            political:political,
            sublocality:sublocality,
            neighborhood:neighborhood,
            routes:routes,
            country:country,
        })

        if (zipCode === undefined) {
            // const article = { seller_city: cityName, seller_state: stateName };
            // // console.log(article);
            // axios.post('http://www.fastexpert.com/ads/findagent/check_zipcode.php', article)
            //     .then(response =>{
            //         console.log(response);
            //     });
        }
        const user = saveAddress;
        dispatch(addressSave(user));
    }

    // console.log(saveAddress);

    return (
        <>
            <div className='row justify-content-center'>
                <h2 className='text-center pb-5'> Top Real Estates Agents near {saveAdd.city}, {saveAdd.shortState}</h2>

                <div className='col-lg-3 col-sm-4 col-10 pb-sm-5   '>
                    <p >Find top Real Estate Agents  :</p>
                </div>
                <div className='col-lg-3 col-sm-4 col-10 pb-5 '>
                    <Autocomplete
                        apiKey='AIzaSyDrUdD-r-T3kyHRJnsqgxSSGYiPqlprz24'
                        style={{ width: "100%" }}
                        onPlaceSelected={saveAddressPopup}
                        placeholder='Enter Zip Code'
                        options={{
                            types: ["(regions)"],
                            componentRestrictions: { country: "us" },
                        }}
                    // onChange={reload_card}
                    />
                </div>
                <Popupcard />
            </div>
   

        </>
    )
}

export default ModelPopup;