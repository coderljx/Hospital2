import {AxiosInstance, AxiosResponse} from "axios";
import Axios, {RequestUrl} from "@/Axios/Axios";
import {RESPONSE} from "@/Axios/Response/RESPONSE";


export class DrugBase  {

    private ins : AxiosInstance;

    constructor() {
        this.ins = Axios.axInstance(RequestUrl.Drug);
    }

    public async GetLoad ( from : number, to : number) : Promise<AxiosResponse> {
        return await new Promise<AxiosResponse>( ((resolve, reject) => {
            this.ins.get("/all",{
                params : {
                    from ,to
                }
            }).then( data => {
                if ( data.status == 200)
                {
                    resolve(data);
                }else {
                    reject("服务器返回错误");
                }

            })

        }))
    }




}