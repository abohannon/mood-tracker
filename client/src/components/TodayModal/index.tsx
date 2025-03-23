import { Modal, Typography, Flex } from 'antd';
import { SmileOutlined, MehOutlined, FrownOutlined } from '@ant-design/icons';
import DateTimeDisplay from './DateTimeDisplay';
import MoodButton from './MoodButton';

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
      maskClosable={false}
      centered
      styles={{ body: { paddingBottom: '32px' } }}
    >
      <Flex vertical align="center" gap="middle" style={{ width: '100%' }}>
        <Title level={4}>
          How are you?
        </Title>

        <DateTimeDisplay />

        <Flex wrap="wrap" justify="center">
          <MoodButton
            icon={<SmileOutlined style={{ fontSize: '40px', color: '#52c41a' }} />}
            label="Great"
            onClick={onClose}
          />

          <MoodButton
            icon={<SmileOutlined style={{ fontSize: '40px', color: '#91d5ff' }} />}
            label="Good"
            onClick={onClose}
          />

          <MoodButton
            icon={<MehOutlined style={{ fontSize: '40px', color: '#faad14' }} />}
            label="Meh"
            onClick={onClose}
          />

          <MoodButton
            icon={<FrownOutlined style={{ fontSize: '40px', color: '#fa8c16' }} />}
            label="Bad"
            onClick={onClose}
          />

          <MoodButton
            icon={<FrownOutlined style={{ fontSize: '40px', color: '#f5222d' }} />}
            label="Awful"
            onClick={onClose}
          />
        </Flex>
      </Flex>
    </Modal>
  );
};

export default TodayModal;
