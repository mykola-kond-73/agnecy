import axios from 'axios'
import { projectType, personType, messageContentType } from '../Redux/reducer'

//@ts-ignore
const instance = axios.create({
    baseURL: '/',
})

const API = {
    getVideo() {
        return instance.get<ResponceType<string>>('/').then(responce => responce.data)
    },

    getProject(pageSize:number,title:string) {
        return instance.get<ResponceType<Array<projectType>>>(`/?page=${pageSize}&title=${title}`).then(responce => responce.data)
    },

    getPerson() {
        return instance.get<ResponceType<Array<personType>>>('/').then(responce => responce.data)
    },

    postMessage(messaageContent: messageContentType) {
        return instance.post<ResponceType>('/', messaageContent).then(responce => responce.data)
    },

    postSubscribe(subscribeContent: string) {
        return instance.post<ResponceType>('/', { subscribe: subscribeContent }).then(responce => responce.data)
    }
}

export {
    API,
    ResultCodeEnum
}

enum ResultCodeEnum {
    Succes = 0,
    Error = 1
}

type ResponceType<D = {}, RC = ResultCodeEnum> = {
    data: D
    massages: Array<string>
    resultCode: RC
}