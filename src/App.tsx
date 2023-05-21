import Dropdown from "@components/common/Dropdown";

function App() {
  return <div className="App">
    <Dropdown describe="옵션을 선택하세요." items={[
      { text: "옵션1" },
      { text: "옵션2" },
      { text: "옵션3" }
    ]} />
  </div>;
}

export default App;
