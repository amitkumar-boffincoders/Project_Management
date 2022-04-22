import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { employe } from "./employe_data";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const Backlog = () => {
  useEffect(() => {
    const newData = employe.map((x, i) => {
      return { ...x, id: i + 1 };
    });
    setEmployeeArray(newData);
  }, [employe]);
  const [employeArray, setEmployeeArray] = useState([]);
  // const [characters, updateCharacters] = useState(employeArray);
  function handleOnDragEnd(result) {
    const items = Array.from(employeArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setEmployeeArray(items);
  }

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));
  return (
    <div>
      <section className="content">
        <div className="row">
 
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div className="task-list Characters">
                  <div className="row">
                    <div className="col-sm-3 dash" style={{padding:"7px 17px"}}>
                      <h4>TO do</h4>
                    </div>
                    <div className="col-sm-3 dash"  style={{padding:"7px 17px"}}>
                      <h4>In Process</h4>
                    </div>
                    <div className="col-sm-3 dash"  style={{padding:"7px 17px"}}>
                      <h4>Review</h4>
                    </div>
                    <div className="col-sm-3 dash"  style={{padding:"7px 17px"}}>
                      <h4>Done</h4>
                    </div>
                  </div>
                  <div
                    className="row"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {employeArray.map((data, index) => {
                      return (
                        <div className="col-sm-3">
                          <Draggable
                            key={index}
                            draggableId={data.id.toString()}
                            index={index}
                          >
                            {(provided, snapShot) => (
                              <div
                                className="team-work box"
                                ref={provided.innerRef}
                                snapshot={snapShot}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <h5>{data.title}</h5>
                                <p>
                                  <span>{data.screen}</span>
                                </p>

                              
                              <div className="perfo">
                              <BorderLinearProgress
                                  className="work"
                                  variant="determinate"
                                  value={data.progress}
                                />
                              </div>
                               
                                <b className="mt-3">{data.value}</b>
                                <div className="d-content">
                                  <h5>Team</h5>
                                  <img
                                    src={data.image}
                                    
                                  />
                                  <img
                                    src={data.image1}
                                    
                                  />
                                  <img
                                    src={data.image2}
                                    
                                  />
                                  <span className="multiple">
                                    {data.member}
                                  </span>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </section>
    </div>
  );
};

export default Backlog;
