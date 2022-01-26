import axios from "axios"

const instance=axios.create({
    baseURL:"https://thapp0274.herokuapp.com/todo-list/api/"
})
export default instance