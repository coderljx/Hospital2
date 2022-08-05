
// @ts-ignore
import {createRouter, createWebHistory} from "vue-router"
import * as Path from "path";


let Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/Home"
        },
        {
            path: "/login",
            component: () => import("../components/Login/Login.vue"),
        },
        {
            path: "/Home",
            component: () => import("../components/Home/Home.vue"),
            children : [
                {
                    path : "",
                    component : () => import("../components/Home/HomeDefault.vue"),
                },
                {
                    path : "Gh",
                    component : () => import("../components/outpatient_management/User_registration/User_registration.vue"),
                    children : [
                        {
                            path : "userinfo/:id",
                            component : () => import("../components/outpatient_management/User_registration/UserInfo/Userinfo.vue")
                        }
                    ]
                },
                {
                    path: "drug",
                    component: () => import("../components/outpatient_management/Drug/Drug.vue"),
                },
                {
                    path : "inH",
                    component : () => import("../components/outpatient_management/in_hospital/in_hospital.vue"),
                },
                {
                    path : "PR",
                    component : () => import("../components/outpatient_management/PR/PR.vue"),
                },
                {
                    path : "Supplier",
                    component : () => import("../components/Yao_management/Suppiler/Suppiler.vue"),
                }

            ]
        }

    ]
});




// 要跳转的路径               当前的路径               完成跳转
// Router.beforeEach((to, form, next) => {
//
//   return  next();
// })


export default Router;







