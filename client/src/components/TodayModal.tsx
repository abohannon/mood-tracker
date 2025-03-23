import { Modal, Typography, Space, Button } from 'antd';
import { SmileOutlined, MehOutlined, FrownOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface TodayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TodayModal = ({ isOpen, onClose }: TodayModalProps) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Space direction="vertical" style={{ width: '100%', textAlign: 'center' }}>
        <Title level={4}>
          How are you?
        </Title>

        <Space size="small" style={{ justifyContent: 'center' }}>
          <Space direction="vertical" align="center">
            <Button
              type="text"
              style={{ fontSize: '24px', height: '60px', width: '60px' }}
              onClick={onClose}
            >
              <SmileOutlined style={{ fontSize: '32px', color: '#52c41a' }} />
            </Button>
            <Typography.Text>Great</Typography.Text>
          </Space>

          <Space direction="vertical" align="center">
            <Button
              type="text"
              style={{ fontSize: '24px', height: '60px', width: '60px' }}
              onClick={onClose}
            >
              <SmileOutlined style={{ fontSize: '32px', color: '#91d5ff' }} />
            </Button>
            <Typography.Text>Good</Typography.Text>
          </Space>

          <Space direction="vertical" align="center">
            <Button
              type="text"
              style={{ fontSize: '24px', height: '60px', width: '60px' }}
              onClick={onClose}
            >
              <MehOutlined style={{ fontSize: '32px', color: '#faad14' }} />
            </Button>
            <Typography.Text>Meh</Typography.Text>
          </Space>

          <Space direction="vertical" align="center">
            <Button
              type="text"
              style={{ fontSize: '24px', height: '60px', width: '60px' }}
              onClick={onClose}
            >
              <FrownOutlined style={{ fontSize: '32px', color: '#fa8c16' }} />
            </Button>
            <Typography.Text>Bad</Typography.Text>
          </Space>

          <Space direction="vertical" align="center">
            <Button
              type="text"
              style={{ fontSize: '24px', height: '60px', width: '60px' }}
              onClick={onClose}
            >
              <FrownOutlined style={{ fontSize: '32px', color: '#f5222d' }} />
            </Button>
            <Typography.Text>Awful</Typography.Text>
          </Space>
        </Space>
      </Space>
    </Modal>
  );
};

export default TodayModal;
