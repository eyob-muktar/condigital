import { Alert, Button,  Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import React from 'react';
import IFileData from '../types/file.type';
import UploadButton from './UploadButton';

type FileProps = { files: IFileData[] };
const url = 'http://localhost:4000/file'


const handleDelete = (id: number) => {
  axios.delete(`${url}/${id}`).then((response) => {
    window.location.reload();
    <Alert message={response.data} type='success' />
  })
}

const columns: ColumnsType<IFileData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    render: text => <>{text/1000} KB</>
  },
  {
    title: 'Uploaded Date',
    dataIndex: 'uploadedAt',
    key: 'uploadedAt',
    render: text => <>{new Date(text).toDateString()}</>
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Button style={{ background: '#f00', color: '#fff'}} onClick={() => handleDelete(record.id)} > Delete </Button>
    ),
  },
];


function FileTable({ files }: FileProps) {
  return (
    <>
    <UploadButton />
    <Table columns={columns} dataSource={files} rowKey="id"/>
    </>
  )
}

export default FileTable;
