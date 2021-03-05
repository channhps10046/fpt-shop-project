import url from '../utils/url';

export function flattenProducts(data){
    return data.map(item => {
        let image = `${url}${item.image[0].url}`;

        return {
            ...item,
            image
        }
    })
}