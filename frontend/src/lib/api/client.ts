import applyCaseMiddleware from "axios-case-converter";
// applyCaseMiddlewareはaxiosで受け取ったレスポンスの値をスネークケースから
// キャメルケースに変換、または送信するリクエストの値をキャメルケースから
// スネークケースに変換してくれる
import axios from "axios";

// ヘッダーはケバブケースのままにする
const options = {
    ignoreHeaders: true
}

const client = applyCaseMiddleware(axios.create({
    baseURL: "http://localhost:3001/api/v1"
}), options)

export default client
