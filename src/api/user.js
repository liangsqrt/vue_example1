import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/api/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/api/user',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    // return request({
    //     url: '/user/logout',
    //     method: 'post'
    // })
    // return new Promise(() =>{
    //     if(1>0){resolve()}
    //     else{
    //         reject()
    //     }
    // })
    // return new Promise()


}
