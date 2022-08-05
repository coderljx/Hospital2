import Axios from "@/Axios/Axios";
import {AxiosInstance, AxiosPromise} from "axios";

export class User {
    private ins: AxiosInstance;

    constructor() {
        this.ins = Axios.axInstance();
    }

    GetUser = () => {
    let res : Promise<AxiosPromise> = this.ins.get("/user/all" , {
        headers : {

        }
    });




    }


}
