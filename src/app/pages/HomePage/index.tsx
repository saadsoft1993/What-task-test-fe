import React, { useEffect, useState } from 'react'

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './style.scss'
import EditModal from './components/EditModal';
import DeleteModal from './components/DeleteModal';

import Header from '../../components/Header'

import { useDispatch, useSelector } from 'react-redux';

import { getVideosAction } from './store/slice'
import { RootState } from 'store'
import { Video } from './store/slice'
import Input from 'app/components/Input'

export function HomePage() {
  const [search, setSearch] = useState('')
  const videos: Video[] = useSelector((state: RootState) => state.videos.videos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideosAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columns: ColumnsType<Video> = [
    {
      title: 'Title',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'URL',
      dataIndex: 'url',
      width: '40%',
      sorter: (a, b) => a.url.length - b.url.length,
    },
    {
      title: 'Ratings',
      dataIndex: 'average_rating',
      width: '30%',
      key: 'average_rating',
      sorter: (a, b) => a.average_rating - b.average_rating
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      width: '30%',
      sorter: (a, b) => a.average_rating - b.average_rating
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      width: '30%',
      render: (_, record) => {
        return (
          <div className='mainContainer'>
            <EditModal video={record} />
            <DeleteModal id={record.id} />
          </div>
        )
      },
    },
  ];

  const onSearch = (search: string) => {
    setSearch(search)
    dispatch(getVideosAction(search))
  }

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="form-row">
          <div className="mb-2 col-3">
            <Input type="text" name="search" className="form-control" placeholder="Search..." value={search} onChange={e => onSearch(e.target.value)} />
          </div>
        </div>
        <div className="table-row">
          <Table columns={columns} dataSource={videos} rowKey="id" />
        </div>
      </div>
    </>
  );
}