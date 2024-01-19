"use client";
import { useContext } from "react";
import { Card } from "../../ui/card/Card";
import "./list.css";
import { BikesContext } from "@/context/bikes";
import { IBike } from "@/types";

export const List = () => {
  const { storedBikes, loading } = useContext(BikesContext);

  const emptyView = () => {
    return (
      <div className="empty">
        {
          <>
            {!storedBikes && loading && <h2>Loading.......</h2>}
            {storedBikes?.length === 0 && !loading && (
              <>
                <h3>Seem you don't have any bike yet 🌩 </h3>
                <span>Fill form to add your first bike 🚲 </span>
              </>
            )}
          </>
        }
      </div>
    );
  };

  const renderList = () => {
    return (
      <ul className="list">
        {storedBikes.map((bike: IBike) => (
          <li className="item" key={bike.id}>
            <Card data={bike} />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <>{storedBikes?.length > 0 && !loading ? renderList() : emptyView()}</>
  );
};
