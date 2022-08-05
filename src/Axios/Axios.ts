import axios, {AxiosInstance} from "axios";
import Instance = WebAssembly.Instance;
import Store from "../Store/Store"



// Axios.interceptors.response.use( ( data ) => {
//      if ( data.status == 200 ) {
//
//      }
//      return data;
// })

let userid : string | null = window.localStorage.getItem("userid");

const obj = {
    axInstance : ( url? : string  , uid? : number, token? :string ) : AxiosInstance => {
        if ( typeof uid == "undefined" ) {
            uid = -1;
        }
        if ( userid != null && Number.parseInt( userid ) > 0 ) {
            uid = Number.parseInt( userid );
        }
        if ( typeof token == "undefined" ) {
            token = "";
        }
        return axios.create({
            baseURL :  "http://localhost:19999" + url,
            timeout : 5000,
            headers : {
                uid,
                token,
            },
        });
    },

};

const RequestUrl : url = {
    User_regiest : "/binren",
    Drug : "/medic",
    Supplier : "/supplier"
}


type url = {
    User_regiest : string,
    Drug : string,
    Supplier : string
}



export default obj;
export {
    RequestUrl
}