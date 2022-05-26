import { useEffect, useState } from "react";

const useProducts = () =>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://calm-oasis-76291.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products, setProducts]
}
export default useProducts;