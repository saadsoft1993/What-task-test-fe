import { Table } from 'antd';
import React, { useEffect } from 'react'
import type { ColumnsType } from 'antd/es/table';
import './style.scss'
import EditModal from './components/MainContent/EditModal';
import DeleteModal from './components/MainContent/DeleteModal';

import Header from '../../components/Header'

import { useDispatch, useSelector } from 'react-redux';

import { getVideosAction } from './store/slice'
import { RootState } from 'store'
import { Video } from './store/slice'

export function HomePage() {
  const accessToken: string = useSelector((state: RootState) => state.login.accessToken)
  const videos: Video[] = useSelector((state: RootState) => state.videos.videos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideosAction(accessToken))
  }, [])

  interface DataType {
    name: string;
    url: string;
    tags: string[];
    average_rating: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Title',
      dataIndex: 'name',
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
      title: 'Ratings',
      dataIndex: 'average_rating',
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

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="table-row">
          <Table columns={columns} dataSource={videos} onChange={onChange} />
        </div>
      </div>
    </>
  );
}