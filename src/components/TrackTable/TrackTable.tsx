import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Select, Space, Table, Typography } from 'antd';
import useTrackTable from './TrackTable.hook';
import { ITrack } from '../../store/actions/models/tracks.model';
import { updateTracks } from '../../store/saga/tracks';

const { Option } = Select;

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    // inputType: 'number' | 'text';
    record: ITrack;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    // inputType,
    record,
    index,
    children,
    ...restProps
}) => {

    // <Input />
    // <Select defaultValue="lucy" style={{ width: 120 }} onChange={}>
    //                     <Option value="jack">Jack</Option>
    //                     <Option value="lucy">Lucy</Option>
    //                     <Option value="Yiminghe">yiminghe</Option>
    //                 </Select>

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    <Select defaultValue={record[dataIndex]} style={{ width: 120 }} >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                        <Option value={record[dataIndex]}>{record[dataIndex]}</Option>
                    </Select>


                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

export default function TrackTable() {
    const {
        tracks,
        onSelectedTrackChange,
        selectedTrack
    } = useTrackTable();
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record: ITrack) => record.key === editingKey;

    const edit = (record: ITrack) => {
        form.setFieldsValue({ ...record });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            // const row = (await form.validateFields()) as ITrack;
            const row = (await form.validateFields()) as any;

            const newData = [...tracks || []];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                updateTracks(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                updateTracks(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const trackTableColumns/*: ColumnsType<ITrack>*/ = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Начало',
            dataIndex: 'start',
            key: 'start',
            render: (_, record) => (
                <Space size="middle">
                    <a> {record.start}</a>
                </Space>
            ),
            editable: true,
        },
        {
            title: 'Конец',
            dataIndex: 'end',
            key: 'end',
            render: (_, record) => (
                <Space size="middle">
                    <a> {record.end}</a>

                </Space>
            ),
            editable: true,
        },
        {
            title: 'Редактировать',
            key: 'action',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = trackTableColumns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: ITrack) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const rowSelection = {
        selectedTrack,
        onChange: onSelectedTrackChange,
    };

    return (
        <Form form={form} component={false}>
            <Table
                pagination={false}
                // columns={trackTableColumns}
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                columns={mergedColumns}
                dataSource={tracks as ITrack[]}
                rowClassName="editable-row"
                rowSelection={rowSelection}
            />
        </Form>
    )
}