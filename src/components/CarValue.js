import { useSelector } from "react-redux";
function CarValue() {
  const totalcost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredCars.reduce((acc, car) => {
      acc = acc + car.cost;
      return acc;
    }, 0);
  });
  return <div className="car-value">Total Cost: ${totalcost}</div>;
}

export default CarValue;
