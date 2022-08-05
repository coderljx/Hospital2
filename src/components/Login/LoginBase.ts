import ax from "@/Axios/Axios";
import {AxiosInstance, AxiosPromise} from "axios";

export class Login  {
    private readonly instance: AxiosInstance;

    constructor() {
        this.instance = ax.axInstance();
    };

    GetUserInfo = async ( obj : object) :  Promise<AxiosPromise<any>> => {
        return this.instance({
            url: "/user/login",
            method: "POST",
            data: obj
        });
    };


}


