import React from "react";
import "./Dashboard.css";
import Card from "./Card";
const Dashboard = () => {
  const data = [
    { name: "John Doe", rollNumber: "1234" },
    { name: "Jane Doe", rollNumber: "5678" },
    { name: "Alice Smith", rollNumber: "9012" },
    { name: "Bob Johnson", rollNumber: "3456" },
    { name: "Emily Brown", rollNumber: "7890" },
    { name: "Michael Wilson", rollNumber: "2345" },
    { name: "Sarah Davis", rollNumber: "6789" },
    { name: "David Martinez", rollNumber: "0123" },
  ];
  return (
    <>
      <div className="app m-8">
        <div className="row">
          {data.slice(0, 4).map((item, index) => (
            <Card key={index} name={item.name} rollNumber={item.rollNumber} />
          ))}
        </div>
        <div className="row">
          {data.slice(4, 8).map((item, index) => (
            <Card
              key={index + 4}
              name={item.name}
              rollNumber={item.rollNumber}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
