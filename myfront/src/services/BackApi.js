const baseUrl = 'http://62.84.119.183:8000/api/'

export const createWish = (data) => {
    return fetch(baseUrl + 'wishes/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data.data)
    })
    .then(res => res.json)
}

export const getWishesByUser = (data) => {
    return fetch(baseUrl + 'wishes/get_by_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data.username)
    }).then(res => res.json())
}


export const deleteWish = (data) => {
    fetch(baseUrl + 'wishes/drop/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data.id)
    })
}
