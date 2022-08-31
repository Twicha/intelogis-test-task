import { FC, ReactElement, useEffect, useState } from "react";

import { BaseLoader, BaseSplitter } from "src/shared/components";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import { fetchGetStoresAction } from "src/shared/store/slices";

import { RequestTable } from "src/features/request-table";

import { Map } from "src/features/map";

import "./main-page.scss";

interface Props {}

export const MainPage: FC<Props> = (): ReactElement => {
  const dispatch = useAppDispatch();

  const { isLoading: isLoadingStores } = useAppSelector(({ stores }) => stores);

  const { isLoadingGet: isLoadingRequests } = useAppSelector(
    ({ requests }) => requests
  );

  const [isCursorUp, setIsCursorUp] = useState<boolean>(false);

  const isSomeLoading: boolean = isLoadingRequests && isLoadingStores;

  useEffect(() => {
    dispatch(fetchGetStoresAction());
  }, [dispatch]);

  return (
    <div className="main-page">
      <h1 className="main-page__title">Список заявок</h1>
      {!isSomeLoading && (
        <BaseSplitter
          className="main-page__split"
          leftSlot={<RequestTable />}
          rightSlot={<Map isUpdateMap={isCursorUp} />}
          onStart={() => setIsCursorUp(false)}
          onEnd={() => setIsCursorUp(true)}
        />
      )}
      {isSomeLoading && <BaseLoader />}
    </div>
  );
};
