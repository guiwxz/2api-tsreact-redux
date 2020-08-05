import fetch from 'isomorphic-unfetch';

export const getRepository = async (user: String) => {
    return await fetch(`https://api.github.com/users/${user}/repos`)
        .then(async response => {
            const json = await response.json();
            return json;
        })
}


const API_KEY = "AIzaSyB2qz5IiK_z0q4XeH7UkmTPS5JFezvDjmg"
//AIzaSyB7XpdwB1OcJXpb4DDPIJNa4IPqDAbXqHE
export const getVideo = async (channelId: String) => {
    return await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`)
        .then(async response => {
            const json = await response.json();
            return json;
        })
}