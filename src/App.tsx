import React, { useState, useEffect } from "react";
import { Vehicle } from "./data/vehicles/contracts";
import { VehicleApi } from "./data/vehicles/api";
import { Filter, initFilter } from "./components/Filter";
import { Table } from "./components/Table";
import "./index.css"


export default function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filter, setFilter] = useState(initFilter);

  useEffect(() => {
    const data = VehicleApi.search(filter);
    setVehicles(data);
  }, [filter]);

  return (
    <>
      <Filter filter={filter} onChange={setFilter} />
      <Table vehicles={vehicles} />
    </>
  );
}