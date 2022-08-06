import './Item.css';
import { useState } from 'react';

function Item(props) {
  const [isCross, setIsCross] = useState(true);
  const setCross = () => {
    setIsCross(isCross ? false : true);
  }

  return (
    <div className={isCross ? "col-2 cross" : "col-2 null"}
      onClick={setCross}>
    </div>
  );
}

export default Item;