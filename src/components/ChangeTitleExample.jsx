import { useEffect } from "react";
import { useState } from "react";

function ChangeTitleExample() {
  const [title] = useState("UCSE - Programacion 2");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <div>ChangeTitleExample</div>;
}

export default ChangeTitleExample;
