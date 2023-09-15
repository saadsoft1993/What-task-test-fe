import { Table } from 'antd';
import React from 'react'
import type { ColumnsType } from 'antd/es/table';
import './style.scss'
import EditModal from './components/MainContent/EditModal';
import DeleteModal from './components/MainContent/DeleteModal';

import Header from '../../components/Header'

export function HomePage() {
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Thumbnil',
      dataIndex: 'thumbnil',
      filters: [
        {
          text: 'value',
          value: 'value',
        }
      ],
      filterMode: 'tree',
      filterSearch: true,

      width: '30%',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Url',
      dataIndex: 'url',
      filters: [
        {
          text: 'url',
          value: 'url',
        }
      ],

      filterSearch: true,
      width: '40%',
    },
    {
      title: 'Average Time',
      dataIndex: 'averageTime',
      width: '40%',
    },
    {
      title: 'Ratings',
      dataIndex: 'ratings',
      width: '30%',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      width: '30%',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      width: '30%',
      render: () => (
        <div className='mainContainer'>
          <EditModal />
          <DeleteModal />
        </div>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="table-row">
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </>
  );
}