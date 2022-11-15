import { Row, Col } from 'antd';
import './App.css';
import FileTable from './components/FileTable';
import useFileFetch from './hooks/useFileFetch';

function App() {
  const {files, loading, error} = useFileFetch()

  return (
    <>
    <Row>
        <Col span={24}>
          <h1 style={{ textAlign: 'center'}}>
          Files List
          </h1>
        </Col>
    </Row>
    <Row>
      <Col span={5} />
      <Col span={14}>
      <FileTable files={files} />
      </Col>
      <Col span={5}/>
    </Row>
    </>

       
  );
}

export default App;
