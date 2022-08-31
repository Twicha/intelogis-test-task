import { FC, ReactElement } from "react";

import classNames from "classnames";

import "./base-loader.scss";

interface Props {
  isWhite?: boolean;
}

export const BaseLoader: FC<Props> = ({ isWhite }): ReactElement => {
  return (
    <div className="base-loader">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={"base-loader" + index}
            className={classNames("base-loader__item", {
              "base-loader__item--white": isWhite,
            })}
          />
        ))}
    </div>
  );
};
