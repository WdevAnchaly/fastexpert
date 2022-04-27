import Global from '../helpers/global';
export const dataService = {
    getloctionData,
   
};
function getloctionData(props){
    const requestOptions = {
        method: 'GET'
    };
    let lng = props.lng;
    let lat = props.lat;

    return fetch(Global.BASE_API_PATH + `search-pros/get-search-pros-data?host_name=www.fastexpert.com&login_data=eyJsb2dpbl91c2VyX2lkIjoiIiwibG9naW5fdXNlcl90eXBlIjoiIn0=&data=eyJ2ZW5kb3JfdHlwZSI6InJlYWxlc3RhdGVhZ2VudCIsImNpdHlfc3RhdGUiOiIkdl9jaXR5LSR2X3N0YXRlIiwibmVhciI6IiR2X2NpdHksICR2X3N0YXRlIiwic3RhdGUiOiIkdl9zdGF0ZSJ9&user_type=&loadmore=0&pageno=0&sort_type=Recommended&miles=undefined&latp=${lat}&lngp=${lng}&state=${props.shortState}&city=${props.city}&reset=0&desired_lead=&specialize=&online_services=&years_exp=&total_transactions=`, requestOptions)
    .then((response) => response.json())
    .then(actualData =>{
        return actualData;
    })
    .catch((err) => {
     console.log(err.message);
    });
}