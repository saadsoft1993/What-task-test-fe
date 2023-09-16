import React, { useState } from 'react';
import { Modal } from 'antd';
import Button from 'app/components/Button'
import { FormSelect } from 'react-bootstrap'
import { Video, updateVideoRatingAction } from '../../store/slice'

import { useDispatch } from 'react-redux';

interface EditModalProps {
    video: Video
}

const EditModal = ({ video }: EditModalProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [rating, setRating] = useState(video.average_rating)
    const dispatch = useDispatch()

    const onEdit = () => {
        dispatch(updateVideoRatingAction({
            rating,
            video: video.id
        }))
        setIsModalVisible(false)
    }

    return (
        <div>
            <Button className="btn btn-primary" onClick={() => setIsModalVisible(true)}>
                Edit
            </Button>
            <div>
                <Modal
                    title="Update Rating"
                    open={isModalVisible}
                    onCancel={() => setIsModalVisible(false)}
                    onOk={onEdit}
                    okText="Update"
                >
                    <FormSelect value={rating} onChange={e => setRating(parseInt(e.target.value))}>
                        <option>Rating</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </FormSelect>
                </Modal>
            </div>
        </div>
    );
};

export default EditModal
