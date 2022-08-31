import { FC, ReactElement } from "react";

import { Select } from "antd";

import classNames from "classnames";

import { IBaseSelect } from "../../model";

import "./base-select.scss";

interface Props {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  activeValue: string;
  items: IBaseSelect[];
  onChange: (value: string) => void;
}

export const BaseSelect: FC<Props> = ({
  className,
  loading,
  disabled,
  activeValue,
  items,
  onChange,
}): ReactElement => {
  return (
    <Select
      className={classNames("base-select", className)}
      disabled={disabled || loading}
      loading={loading}
      value={activeValue}
      onChange={onChange}
      onClick={(e) => e.stopPropagation()}
    >
      {items.map(({ value, label }) => (
        <Select.Option key={value} value={value}>
          {label}
        </Select.Option>
      ))}
    </Select>
  );
};
