import { Modal, Typography, Space, Button } from 'antd';

const { Title } = Typography;

interface TodayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TodayModal = ({ isOpen, onClose }: TodayModalProps) => {
  return (
    <Modal
      title={<Title level={4} style={{ margin: 0 }}>Mood Check-in</Title>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Space direction="vertical" style={{ width: '100%', textAlign: 'center' }}>
        <Typography.Text style={{ fontSize: '18px' }}>
          How are you today?
        </Typography.Text>
        <Space style={{ marginTop: '20px' }}>
          <Button type="primary" onClick={onClose}>
            Submit
          </Button>
        </Space>
      </Space>
    </Modal>
  );
};

export default TodayModal;
