import { useState } from "react";

const UseState2 = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange2 = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleChange = () => {
    if (inputValue.trim() === "") return;
    setData([...data, inputValue]);
    // console.log([...data, inputValue]);

    setInputValue("");
  };
  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };
  return (
    <>
      <div>To do List</div>
      <input value={inputValue} onChange={handleChange2} type="text" /> <br />
      <button onClick={handleChange}>Thêm</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default UseState2;
