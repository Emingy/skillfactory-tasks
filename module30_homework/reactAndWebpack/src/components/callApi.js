import jwtDecode from 'jwt-decode';
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from './constants'
export function callApi(url, method, body) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)

    let tokenData;
    try{
        tokenData = jwtDecode(accessToken)
    } catch (e) {
        console.warm(e)
    }

    const currentTime = Math.round(Date.now/1000);
    const diff = tokenData.exp - currentTime;
    const isAccessTokenValid = diff > 180;

    if(!isAccessTokenValid){
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

        const response = await fetch(urlRefresh, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Autorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({refreshToken})
        });
        const data = await response.json();

        if(response.ok){
            localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
            localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
            accessToken = data.accessToken;
        }else if(data.error){
            throw new Error(data.error);
        }
    }

    return fetch (url, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Autorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(body)
    })
}