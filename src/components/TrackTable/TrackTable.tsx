import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import trackTableColumns from './TrackTable.columns';
import useTrackTable from './TrackTable.hook';
import { ITrack } from '../../store/actions/models/tracks.model';

export default function TrackTable() {
    const {
        tracks,
        onSelectedTrackChange,
        selectedTrack
    } = useTrackTable();

    const rowSelection = {
        selectedTrack,
        onChange: onSelectedTrackChange,
    };

    return (
        <Table
            pagination={false}
            columns={trackTableColumns}
            dataSource={tracks as ITrack[]}
            rowSelection={rowSelection}
        />
    )
}