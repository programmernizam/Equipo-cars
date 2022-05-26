import { useEffect, useState } from "react";

const useProductDetails = (itemId) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`https://calm-oasis-76291.herokuapp.com/parts/${itemId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId, setItem]);
  return [item];
};
export default useProductDetails;
