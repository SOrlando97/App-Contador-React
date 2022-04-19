const apikey = 'MXJ6pn6Zw9MTU5r5nDbDdf6Z3QiE4KNR';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
peticion.then(resp=> resp.json())
.then(({data})=>{
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src= url;
    document.body.append(img);
})
.catch(console.warn);