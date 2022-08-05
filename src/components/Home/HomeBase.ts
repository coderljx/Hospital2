import {AxiosInstance} from "axios";
import axios from "../../Axios/Axios"
import {ref} from "vue";
import {Router} from "vue-router";
import HomeService from "@/components/Home/HomeService";


export class Home implements HomeService {

    private instace: AxiosInstance;

    public obj = ref({
        // 当前登陆用户的头像
        circleUrl: "https://img0.baidu.com/it/u=882622322,99837820&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        editableTabs: [{
            title: "首页",
            name: "首页",
        }],
    });
    constructor() {
        this.instace = axios.axInstance( "");
    }

    AddTab = (TableName: string, routerName: string, router: Router) : void => {
        let objs = this.obj.value.editableTabs;
        let index: number = 0;
        for (let i = 0; i < objs.length; i++) {
            // @ts-ignore
            if (TableName === objs[i].name) {
                index ++;
            }
        }
        if (index === 0) {
            this.obj.value.editableTabs.push({
                title: TableName,
                name: TableName,
            });
        }
        router.push(`/Home/${routerName}`);
    };

    RemoveTab = (Name: string) : void => {
        let objs = this.obj.value.editableTabs;
        let Index: number = -1;
        for (let i = 0; i < objs.length; i++) {
            // @ts-ignore
            if (objs[i].name === Name) {
                Index = i;
            }
        }
        objs.splice(Index, 1);
    }


};





