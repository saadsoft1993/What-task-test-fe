import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const DeleteModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleEditClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={handleEditClick}>
                Delete
            </Button>
            <div>
                <Modal
                    title="Delete Item"
                    open={isModalVisible}
                    onCancel={handleCloseModal}
                    onOk={handleCloseModal}
                >
                </Modal>
            </div>
        </div>
    );
};

export default DeleteModal
