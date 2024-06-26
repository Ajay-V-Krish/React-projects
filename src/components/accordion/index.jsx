import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnablemultipleselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleselection(getCurrentId) {
    let a = [...multiple];
    const findIndexofCurrentId = a.indexOf(getCurrentId);

    console.log(findIndexofCurrentId);

    if (findIndexofCurrentId === -1) a.push(getCurrentId);
    else a.splice(findIndexofCurrentId, 1);

    setMultiple(a);
  }

  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <h1 className="heading">Accordion</h1>

      <button
        onClick={() => {
          setEnablemultipleselection(!enableMultipleSelection);
        }}
      >
        Enable Multi-selection
      </button>

      <div className="Accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleselection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              <div>
                {enableMultipleSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
