export const createListItem = (videoId) => (
    $.ajax({
        method: 'POST',
        url: `/api/lists`,
        data: { videoId }
    })
);

export const deleteListItem = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/lists/${id}`,
    })
);

export const fetchListItems = () => (
    $.ajax({
        method: 'GET',
        url: `/api/lists`,
    })
);