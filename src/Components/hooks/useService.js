import { useEffect } from "react";
import { useState } from "react";

const useService = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = `/services.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [!service === true]);

  return [service, setService];
};
export default useService;
