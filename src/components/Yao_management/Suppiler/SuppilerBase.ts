import {AxiosInstance, AxiosResponse} from "axios";
import Axios, {RequestUrl} from "../../../Axios/Axios"
import {father} from "@/Utils/Father";


export class SuppilerBase extends father{

    constructor() {
        super( RequestUrl.Supplier );
    };

    public async LoadData () : Promise<AxiosResponse> {
        return await new Promise<AxiosResponse>( ((resolve, reject) =>  {
            super.Getaxios().get("/all" ,{
                params : {
                    from : 0,
                    to : 10
                }
            })
                .then( das => {
                    if (das.status == 200 )
                        resolve(das.data);
                });
        }))

    }

}
