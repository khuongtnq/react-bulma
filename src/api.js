import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID LpS4iC6lM_a14ys_5xfzFicXWC96PbxpvxcQgSmYklg",
        },
        params: {
            query: term
        }
    });
return response;
};

export default searchImages;