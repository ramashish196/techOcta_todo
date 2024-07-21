import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

const Todo = () => {
  const [inputData, setInputData] = useState([]);
  const [inputList, setInputList] = useState([]);
  const [updateData, setUpdateData] = useState("");
  const [update, setUpdate] = useState(false);
  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  const handleClick = () => {
    setInputList([...inputList, inputData]);
    setInputData("");
    // console.log(inputData);
  };
  const handleUpdate = () => {
    inputList.splice(updateData, 1, inputData);
    setUpdate(false);
    setInputData("");
    // console.log(updateData);
  };
  const handleDelete = (i) => {
    const filterData = inputList.filter((element) => element !== inputList[i]);
    // console.log(filterData);
    setInputList(filterData);
  };
  const handleEdit = (i) => {
    const filterData = inputList.filter((element) => element === inputList[i]);
    setInputData(filterData[0]);
    setUpdateData(i);
    setUpdate(true);
  };
  return (
    <div>
      <div className="w-full p-4 shadow-md lg:max-w-lg mx-auto bg-zinc-200  mt-2 rounded-lg">
        <h3 className="text-4xl font-semibold text-center text-green-600">
          Todo
        </h3>
        <div className="flex justify-between items-center w-full space-y-2 ">
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={inputData}
            required
            placeholder="Enter something..."
            className="h-10 mt-4 border-2 outline-none border-green-800 rounded-md w-2/3 text-2xl"
          />
          {update ? (
            <Button variant="contained" color="success" onClick={handleUpdate}>
              update
            </Button>
          ) : (
            <Button
              sx={{ height: "40px" }}
              variant="contained"
              color="success"
              onClick={handleClick}
            >
              add todo
            </Button>
          )}
        </div>
        <div>
          <ul>
            {inputList.map((item, i) => (
              <>
                <li className="flex justify-between items-center w-full h-10 text-2xl mt-4 px-2 bg-green-500 rounded-md text-zinc-950">
                  {item}
                  <div className="flex gap-4">
                    <EditIcon
                      onClick={() => handleEdit(i)}
                      className="flex-initial "
                    />
                    <DeleteIcon
                      onClick={() => handleDelete(i)}
                      className="flex-initial"
                    />
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
