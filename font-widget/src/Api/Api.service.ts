import axios from 'axios';

const BACKEND_API_URL = 'http://json.ffwagency.md';

export const apiClient = axios.create({
    baseURL: BACKEND_API_URL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getData = async <T extends unknown>(relativeUrl: string): Promise<T> => {
    const response = await apiClient.get<T>(relativeUrl);
    return response.data;
};
export const postData = async <T extends unknown>(relativeUrl: string, data: any): Promise<T> => {
    const response = await apiClient.post<T>(relativeUrl, data);
    return response.data;
};

