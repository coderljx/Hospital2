import Axios, {RequestUrl} from "@/Axios/Axios";
import {AxiosInstance, AxiosResponse} from "axios";
import {RESPONSE} from "@/Axios/Response/RESPONSE";
import {ref} from "vue";

export class User_registration {
    private ins: AxiosInstance;

    public datas = ref([]);

    constructor() {
        this.ins = Axios.axInstance(RequestUrl.User_regiest);
    }

    /**
     * 加载数据
     */
    public async Load(from: number , to: number) : Promise<AxiosResponse>  {
        let res = this.ins.get("/all", {
            params: {
                from, to
            }
        });
        return  new Promise( (resolve) =>  {
            res.then( data => {
                if ( data.status == 200 ) {
                    resolve(data);
                }else {
                    return null;
                }
            })
        });

    };


    //删除数据
    /**
     * 请求是异步的， 所以调试才会直接略过。then， 加上await后，代码就会变成同步的，会等待。then执行完毕，这样vue拿到的数据就是赋值完成的数据了
     * @param scope
     * @constructor
     */
     public async Delete(scope: any): Promise<RESPONSE> {
        let row = scope.row;
        let uid = row.id;
        let res1 : RESPONSE = {};
        await this.ins.get(`/delete/${uid}`)
            .then( res => {
            res1.msg = res.data.data;
        });
        return res1;
    }



}


