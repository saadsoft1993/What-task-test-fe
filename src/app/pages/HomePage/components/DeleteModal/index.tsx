import React, { useState } from 'react';
import { Modal } from 'antd';
import Button from 'app/components/Button'
import { deleteVideoAction } from '../../store/slice'

import { useDispatch } from 'react-redux';

interface DeleteModalProps {
    id: string
}

const DeleteModal = ({ id }: DeleteModalProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch()

    const onDelete = () => {
        dispatch(deleteVideoAction(id))
        setIsModalVisible(false)
    }

    return (
        <div>
            <Button className="btn btn-secondary" onClick={() => setIsModalVisible(true)}>
                Delete
            </Button>
            <div>
                <Modal
                    title="Delete Item"
                    open={isModalVisible}
                    onCancel={() => setIsModalVisible(false)}
                    onOk={onDelete}
                    okText="Delete"
                >
                    Are you sure ?
                </Modal>
            </div>
        </div>
    );
};

export default DeleteModal
