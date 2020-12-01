import { GET_POSTS } from "../constants/postConstants";
import axios from 'axios'

export const fetchposts = () => async dispatch => {
    const res = await axios.get('http://jsonplaceholder.typicode.com/posts')
    dispatch({
        type: GET_POSTS,
        payload: res.data
    })
}