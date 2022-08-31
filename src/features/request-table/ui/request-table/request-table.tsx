import { FC, ReactElement, useEffect } from "react";

import { Table } from "antd";

import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "src/shared/hooks";

import {
  fetchGetRequestsAction,
  requestsSlice,
  selectStoreItems,
} from "src/shared/store/slices";

import { getTableColumns } from "../../lib";

import "./request-table.scss";

interface Props {
  className?: string;
}

const { setSelectedRequestId } = requestsSlice.actions;

export const RequestTable: FC<Props> = ({ className }): ReactElement => {
  const dispatch = useAppDispatch();

  const { requests, isLoadingUpdate, selectedRequestId } = useAppSelector(
    ({ requests }) => requests
  );

  const storeSelectItems = useAppSelector(selectStoreItems);

  useEffect(() => {
    dispatch(fetchGetRequestsAction());
  }, [dispatch]);

  return (
    <div className={classNames("request-table", className)}>
      <Table
        rowKey="id"
        columns={getTableColumns(isLoadingUpdate, storeSelectItems, dispatch)}
        rowClassName={(row) =>
          classNames("request-table__row", {
            "request-table__row--active": row.id === selectedRequestId,
          })
        }
        onRow={(row) => ({
          onClick() {
            dispatch(setSelectedRequestId(row.id));
          },
        })}
        scroll={{ y: 345 }}
        dataSource={requests}
        pagination={false}
      />
    </div>
  );
};
