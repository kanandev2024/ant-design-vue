/* eslint-disable no-console,func-names,react/no-multi-comp */
import Table from '../index';
import '../assets/index.less';

const columns = [
  { title: 'title1', dataIndex: 'a', key: 'a', width: 100, fixed: 'left' },
  { title: 'title2', dataIndex: 'b', key: 'b', width: 100, fixed: 'left' },
  { title: 'title3', dataIndex: 'c', key: 'c', width: 150 },
  { title: 'title4', dataIndex: 'c', key: 'd', width: 150 },
  { title: 'title5', dataIndex: 'c', key: 'e', width: 150 },
  { title: 'title6', dataIndex: 'c', key: 'f', width: 150 },
  { title: 'title7', dataIndex: 'c', key: 'g', width: 150 },
  { title: 'title8', dataIndex: 'c', key: 'h', width: 150 },
  { title: 'title9', dataIndex: 'b', key: 'i', width: 150 },
  { title: 'title10', dataIndex: 'b', key: 'j', width: 150 },
  { title: 'title11', dataIndex: 'b', key: 'k', width: 150 },
  { title: 'title12', dataIndex: 'b', key: 'l', width: 100, fixed: 'right' },
];

const data = [
  { a: 'aaa', b: 'bbb', c: '内容内容内容内容内容', d: 3, key: '1' },
  { a: 'aaa', b: 'bbb', c: '内容内容内容内容内容', d: 3, key: '2' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '3' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '4' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '5' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '6' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '7' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '8' },
  { a: 'aaa', c: '内容内容内容内容内容', d: 2, key: '9' },
];
export default {
  render() {
    return (
      <div>
        <h2>Fixed columns and header</h2>
        <Table
          columns={columns}
          scroll={{ x: 1650, y: 300 }}
          data={data}
          style={{ width: '800px' }}
        />
      </div>
    );
  },
};
