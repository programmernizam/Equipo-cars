import { useEffect, useState } from "react";

const useProductDetails = (itemId) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/parts/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId]);
  return [item];
};
export default useProductDetails;
