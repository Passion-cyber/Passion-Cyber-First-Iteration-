import { useEffect } from "react";
import Homepage from "../pages/Homepage/Homepage";

const fetchAPI = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (tours.lenght === 0) {
    return (
      <section className="no-tours">
        <h2 className="no-tours-header">No tours</h2>
      </section>
    );
  }
  return (
    <section>
      <Homepage />
    </section>
  );
};

export default fetchAPI;
