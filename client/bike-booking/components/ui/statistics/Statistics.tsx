"use client";
import { useContext } from "react";
import { BikesContext } from "@/context/bikes-context";
import "./statistics.css";

export const Statistics = () => {
  const { statistics } = useContext(BikesContext);
  return (
    <div className="statistics">
      <h4 className="title">Statistics:</h4>
      <ul>
        <li className="item">
          <span className="attr">
            Total Bikes: <span className="val">{statistics.total}</span>
          </span>
        </li>
        <li className="item">
          <span className="attr">
            Available Bikes :{" "}
            <span className="val">{statistics.available}</span>
          </span>
        </li>
        <li className="item">
          <span className="attr">
            Booked Bikes: <span className="val">{statistics.booked}</span>
          </span>
        </li>
        <li className="item">
          <span className="attr">
            Average bike cost: <span className="val">{statistics.avgCost}</span>{" "}
            UAH/hr.
          </span>
        </li>
      </ul>
    </div>
  );
};
