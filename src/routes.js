import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'
import DataManage from './components/DataManage'
import AddItem from './components/AddItem'
import EditingItem from './components/EditingItem'
import UploadedItem from './components/UploadedItem'
import BaseInfo from './components/BaseInfo'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage },
        {
            path: '/DataManage', component: DataManage,
            children: [
                { path: 'AddItem', component: AddItem },
                { path: 'EditingItem', component: EditingItem },
                { path: 'UploadedItem', component: UploadedItem }
            ]
        },
        { path: '/BaseInfo', component: BaseInfo },
    ]
})

export default router
