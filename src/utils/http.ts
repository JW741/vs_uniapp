import { useMemberStore } from "@/stores"
// 请求基地址
const baseURL = 'https://pcapi-xiaotuxian-front.itheima.net'

// 添加拦截器(请求与上传)
const httpInterceptor =  {
    // 拦截前触发
    invoke(options:UniApp.RequestOptions) {
        // 非http开头需要拼接地址
        if (!/^http(s)?/.test(options.url)) {
            options.url = baseURL + options.url
        }
        // 请求超时
        options.timeout = 10000
        // 添加小程序端请求头标识
        options.header = {
            ...options.header,
            'source-client': 'miniapp',
        }
        // 添加token请求头标识
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = memberStore.profile.token
        }
    }
}
uni.addInterceptor('request',httpInterceptor)
uni.addInterceptor('uploadFile',httpInterceptor)

// 类型接口
interface Data<T> {
    code:string
    msg:string
    result:T
}

// 封装请求
export const http = <T>(options:UniApp.RequestOptions)=>{
    // 返回一个promise
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            // 请求成功
            success: (res) => {
                // 判断请求是否成功
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    // 成功
                    resolve(res.data as Data<T>)
                }else if(res.statusCode === 401){
                    // 未授权,跳转登录页面
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({ url: '/pages/login/index' })
                    reject(res)
                }else{
                    uni.showToast({
                        title: (res.data as Data<T>).msg || '请求错误',
                        icon: 'error',
                        mask: true
                    })
                    reject(res)
                }

            },
            fail: (err) => {
                // 失败
                uni.showToast({
                    title: '网络异常',
                    icon: 'error',
                    mask: true
                })
                reject(err)
            }
        })
    })
}
