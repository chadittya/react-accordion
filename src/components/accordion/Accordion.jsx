import Button from "../button/Button";
import data from "./data";
import { useState } from "react";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, SetEnableMultiSelection] = useState(false);
  const [multipleSelectedId, setMultipleSelectedId] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    selected === getCurrentId ? setSelected(null) : setSelected(getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    let multipleList = [...multipleSelectedId];
    const findIndexCurrentId = multipleList.indexOf(getCurrentId);

    console.log(findIndexCurrentId);
    if (findIndexCurrentId === -1) {
      multipleList.push(getCurrentId);
    } else {
      multipleList.splice(findIndexCurrentId, 1);
    }
    setMultipleSelectedId(multipleList);
  };

  console.log(selected, multipleSelectedId);

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-svh">
      <Button
        onClick={() => SetEnableMultiSelection(!enableMultiSelection)}
        btnLabel={
          enableMultiSelection
            ? "Disable Multi Selection"
            : "Enable Multi Selection"
        }
        btnStatus={enableMultiSelection ? true : false}
      />
      <div className="flex flex-col gap-2 min-w-[700px] max-w-[700px]">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="rounded-md bg-blue-500 hover:bg-blue-600"
            >
              <div
                className="cursor-pointer flex flex-row justify-between px-4 py-6"
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3 className="text-lg font-semibold text-slate-800">
                  {dataItem.question}
                </h3>
                <span className="text-lg font-semibold text-slate-800">
                  {selected === dataItem.id ? "-" : "+"}
                </span>
              </div>
              {enableMultiSelection
                ? multipleSelectedId.indexOf(dataItem.id) !== -1 && (
                    <div className="bg-blue-300 rounded-b-md px-4 py-6 min-w-full">
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="bg-blue-300 rounded-b-md px-4 py-6 min-w-full">
                      {dataItem.answer}
                    </div>
                  )}
              {/* {selected === dataItem.id ||
              multipleSelectedId.indexOf(dataItem.id) !== -1 ? (
                <div className="bg-blue-300 rounded-b-md px-4 py-6 min-w-full">
                  {dataItem.answer}
                </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <p>No data found!</p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
