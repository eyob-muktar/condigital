import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import React from 'react';

const props: UploadProps = {
  name: 'file',
  action: 'http://localhost:4000/file',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadButton = () => {
  return (
    <Upload {...props}>
    <Button>Click to Upload</Button>
  </Upload>
    )
};

export default UploadButton;
