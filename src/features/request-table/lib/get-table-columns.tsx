import { AnyAction, Dispatch } from "@reduxjs/toolkit";

import { ColumnsType } from "antd/lib/table";

import { BaseSelect, IBaseSelect } from "src/shared/components";

import { IRequestItem } from "src/shared/models";

import { onChangeStoreHandler } from "./change-store-handler";

export const getTableColumns = (
  isLoading: boolean,
  selectItems: IBaseSelect[],
  dispatch: Dispatch<AnyAction>
): ColumnsType<IRequestItem> => [
  { title: "Id", dataIndex: "id", key: "id", width: 140 },
  { title: "Name", dataIndex: "name", key: "name", width: 140 },
  {
    title: "Start store",
    dataIndex: "startStoreId",
    key: "startStoreId",
    width: 140,
    render: (rowValue, record) => (
      <BaseSelect
        className="request-table__select"
        loading={isLoading}
        activeValue={rowValue}
        onChange={(value) =>
          onChangeStoreHandler(record, value, "start", dispatch)
        }
        items={selectItems}
      />
    ),
  },
  {
    title: "End store",
    dataIndex: "endStoreId",
    key: "endStoreId",
    width: 140,
    render: (rowValue, record) => (
      <BaseSelect
        className="request-table__select"
        loading={isLoading}
        activeValue={rowValue}
        onChange={(value) =>
          onChangeStoreHandler(record, value, "end", dispatch)
        }
        items={selectItems}
      />
    ),
  },
];
