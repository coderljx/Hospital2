import {AxiosInstance} from "axios";
import Axios , { RequestUrl } from "@/Axios/Axios";
import {RESPONSE} from "@/Axios/Response/RESPONSE";



export  class UserinfoBase {
    private axs : AxiosInstance;

    constructor() {
        this.axs = Axios.axInstance( RequestUrl.User_regiest );
    }

    /**
     * 通过用户的ID， 加载用户的病患记录
     * @param uid 用户 ID
     */
    public async LoadALlData( uid : number ) : Promise<RESPONSE>{
        let res : RESPONSE = {};
        await this.axs.get(  `/getpay/${uid}` )
            .then( data => {
                if ( data.status == 200 ) {
                    res.data = data.data.data;
                }
            });
        return res;
    }





}