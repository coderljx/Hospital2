import {Router} from "vue-router";



export default interface HomeService {
    /**
     * 给前端页面新增加一个标签
     * */
    AddTab( TableName: string, routerName: string, router: Router ) : void;

    /**
     * 删除已经存在的标签
     * */
    RemoveTab(Name: string) : void;



}