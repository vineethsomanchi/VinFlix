export const fetchVideos = (category) => (
    $.ajax({
        method: "GET",
        url: `api/videos`,
        data: category
    })
);

export const fetchVideo = (id) => {
    debugger
    return $.ajax({
        method: "GET",
        url: `api/videos/${id}`
    })
};

