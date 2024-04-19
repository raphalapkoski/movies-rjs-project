import api from "./api"

export const getMoviesNowPlaying = async () => {
    return await api.get("/movie/now_playing", {
        params: {
            api_key: "52232246ac3ff487198d6c2b738e7bb1",
            language: "pt-BR",
            page: 1
        }
    });
}

export const getMovieDetails = async (id: string) => {
    return await api.get(`/movie/${id}`, {
        params: {
            api_key: "52232246ac3ff487198d6c2b738e7bb1",
            language: "pt-BR",
        }
    });
}