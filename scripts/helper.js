/*App constants*/
const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_SJt5SZPGg";
const kinveyAppSecret = "1482aea99c29409d86eee50181674f4d";

function getSampleUserAuthHeaders() {
    return {
        'Authorization': "Basic " + btoa("gosho:gosho"),
    };
}

function getKinveyAppAuthHeaders() {
    return {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };
}

function getKinveyUserAuthHeaders() {
    return {
        'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
    };
}

function handleAjaxError(err) {
    console.dir(err);
    alertify.error("AJAX error.")
}