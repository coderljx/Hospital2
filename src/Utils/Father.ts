import {AxiosInstance, AxiosResponse} from "axios";
import Axios, {RequestUrl} from "../Axios/Axios"

export class father {

    private axios : AxiosInstance;

    constructor( url : string ) {
        this.axios = Axios.axInstance( url );
    }

    public Getaxios() : AxiosInstance{
          return this.axios
    }


}