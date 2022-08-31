import { FC, ReactElement } from "react";

import { Link } from "react-router-dom";

import "./page-404.scss";

interface Props {}

export const Page404: FC<Props> = (): ReactElement => (
  <div className="page-404">
    <h1 className="page-404__title">404</h1>
    <p className="page-404__description">Страница не найдена</p>
    <Link to="/" className="page-404__link">
      Перейти на главную
    </Link>
  </div>
);
