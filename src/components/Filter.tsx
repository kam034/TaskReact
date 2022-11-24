import React from "react";
import { VehicleFilter, VehicleType } from "../data/vehicles/contracts";
import { Input } from "@skbkontur/react-ui";
import { VehicleTypeSelect } from "./VehicleTypeSelect";

export interface FilterProps {
  filter: VehicleFilter;
  onChange: (filter: VehicleFilter) => void;
}

export const initFilter: VehicleFilter = {
  title: "",
  type: null
};

export class Filter extends React.Component<FilterProps> {
  render(): React.ReactNode {
    return (
      <div className="filter">
        <Input           
          value={this.props.filter.title}
          onValueChange={this.handleTitleonChange}
        /> 
        <VehicleTypeSelect
          value={this.props.filter.type}
          onChange={this.handleTypeonChange}
        /> 
      </div>
    );
  }

  private handleTitleonChange = (title: string): void => {
    this.props.onChange({ ...this.props.filter, title });
  };

  private handleTypeonChange = (type: VehicleType | null): void => {
    this.props.onChange({ ...this.props.filter, type });
  };
}
