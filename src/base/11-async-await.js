// Async
// esto no tiene catch, para hacer eso hay uqe hacer un trycatch dentro
export const getImagen = async() =>{
    try {
        const apikey = 'MXJ6pn6Zw9MTU5r5nDbDdf6Z3QiE4KNR';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        
        return url;

    } catch (error) {
        return 'No Existe';
    }
    
}



//const apikey = 'MXJ6pn6Zw9MTU5r5nDbDdf6Z3QiE4KNR';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
// peticion.then(resp=> resp.json())
// .then(({data})=>{
//     const {url} = data.images.original;
//     const img = document.createElement('img');
//     img.src= url;
//     document.body.append(img);
// })
// .catch(console.warn);