import react, { useEffect, useState } from "react";

function WinSize() {
  const [Ht, setHt] = useState(window.innerHeight);
  const [Wt, setWt] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setHt(window.innerHeight);
      setWt(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, [Ht, Wt]);

  return (
    <>
      <p>Height:{Ht}</p>
      <p>Width:{Wt}</p>
    </>
  );
}

export default WinSize;
