import FruitItem from "./components/FruitItem";

function App() {
  const fruits = [
    {
      id: 1,
      title: "Apple",
    },
    {
      id: 2,
      title: "Banana",
    },
    {
      id: 3,
      // title: "Orenge",
    },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <FruitItem key={fruit.id}  id={fruit.id} title = {fruit.title} />
      ))}
    </div>
  );
}

export default App;
