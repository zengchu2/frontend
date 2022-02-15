import axios from "axios";

import API from "../apiEndPoints";

function debugLog(data) {
    console.log(data);
}

async function postImage(key, file) {
    let formdata = new FormData();
    formdata.append('key', key);
    formdata.append('file', file);

    let res = await axios.post(URL=API.UPLOADIMAGE, formdata);
    debugLog(res.data);
    return res.data;
}

async function postListAllKeys() {
    let res = await axios.post(URL=API.GETALLKEYS);
    debugLog(res.data);
    return res.data.keys;
}


async function postGetImage(key) {    
    let res = await axios.post(URL=API.GETIMAGE + '?key=' + key);

    debugLog(res.data);
    return res.data.content;
}


export default { postImage, postListAllKeys, postGetImage }

