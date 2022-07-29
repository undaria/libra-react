import axios from "axios";

export const getMystudyHistory = () => {
    return axios.get('http://localhost:8000/mystudy/api/study_history/')
}