export function getAllProduct(){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod")
        .then(res=>res.json())
        .catch(error=>console.log(error))

}