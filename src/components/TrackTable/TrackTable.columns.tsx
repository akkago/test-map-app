import type { ColumnsType } from 'antd/es/table';
import { Space, Table, Tag } from 'antd';
import { ITrack } from '../../store/actions/models/tracks.model';

const trackTableColumns: ColumnsType<ITrack> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
        title: 'Начало',
        key: 'start',
        render: (_, record) => (
          <Space size="middle">
            <a> {record.start}</a>
           
          </Space>
        ),
      },
      {
        title: 'Конец',
        key: 'end',
        render: (_, record) => (
          <Space size="middle">
            <a> {record.end}</a>
           
          </Space>
        ),
      },
      {
        title: 'Редактировать',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Edit</a>
            {/* <a>Delete</a> */}
          </Space>
        ),
      },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  export default trackTableColumns;