

export const addBiz = (biz) => {
    return {
        type: 'ADD_BIZ',
        value: biz
    }
}

export const removeBiz = (index) => {
    return {
        type: 'REMOVE_BIZ',
        value: index
    }
}