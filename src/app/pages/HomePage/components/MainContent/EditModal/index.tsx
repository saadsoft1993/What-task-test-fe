import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const EditModal = () => {
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
                Edit
            </Button>
            <div>
                <Modal
                    title="Edit Item"
                    visible={isModalVisible}
                    onCancel={handleCloseModal}
                    onOk={handleCloseModal}
                >
                </Modal>
            </div>
        </div>
    );
};

export default EditModal
