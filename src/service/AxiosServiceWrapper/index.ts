import axios from "axios"


const queryBuilder = (methodType: string, url: string, token?: string , payload?: any, params?: any, headers?: any) => {

    const baseUrl = `${process.env.NEXT_PUBLIC_API_KEY}/api/`;

    return {
        method: methodType,
        url: `${baseUrl + url}`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token && token}`,
            ...headers
        },
        params: params,
        data: {
            ...payload
        },
    }

}

export const Axios = {

    Request: async (methodType: string, url: string, token?: string , payload?: any, params?: any, headers?: any) => {
        const query = queryBuilder(methodType, url, token, payload, params, headers);
        query.url
        return await axios.request(query);
    }
}