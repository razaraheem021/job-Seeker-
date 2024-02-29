
import { API } from "@/BaseUrl";

export const postLoginUserApi = async (userData) => {
    try {
      const response = await API.post('api/v1/user/login',userData);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };
export const postRegisterUserApi = async (userData) => {
    try {
      const response = await API.post('api/v1/user/register',userData);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

export const getCurrentUserApi = async () => {
  try {
    const response = await API.get('api/v1/user/getUser');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

