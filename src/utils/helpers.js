export function flattenProducts(data){
    return data.map(item => {
        let image = item.image[0].url;
        // let image = `${url}${item.image[0].url}`;

        return {
            ...item,
            image
        }
    })
}