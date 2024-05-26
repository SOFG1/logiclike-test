import { axiosInstance } from "."

export const coursesApi = {
    getCourses: async () => {
        return axiosInstance.get("courses.json")
    }
}