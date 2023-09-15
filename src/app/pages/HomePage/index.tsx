import React, { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './style.scss'
import EditModal from './components/MainContent/EditModal';
import DeleteModal from './components/MainContent/DeleteModal';

import Header from '../../components/Header'

import { useDispatch, useSelector } from 'react-redux';

import { getVideosAction } from './store/slice'
import { RootState } from 'store'
import { Video } from './store/slice'
import Input from 'app/components/Input'

export function HomePage() {
  const [search, setSearch] = useState('')
  const accessToken: string = useSelector((state: RootState) => state.login.accessToken)
  const videos: Video[] = useSelector((state: RootState) => state.videos.videos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideosAction({ accessToken }))
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

  const onSearch = (search: string) => {
    setSearch(search)
    dispatch(getVideosAction({ accessToken, search }))
  }

  return (
    <>
      <Header />
      <div className="container py-5">
        <Input name="search" type="text" placeholder='Search' value={search} onChange={e => onSearch(e.target.value)} />
        <div className="table-row">
          <Table columns={columns} dataSource={videos} onChange={onChange} />
        </div>
      </div>
    </>
  );
}