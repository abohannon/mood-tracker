import { Typography, Flex, Divider } from 'antd';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

const DateTimeDisplay = () => {
  // Format today's date and current time
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  const formattedTime = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <Flex align="center" style={{ background: '#f5f5f5', padding: '8px 16px', borderRadius: '8px' }}>
      <Flex align="center" gap="small">
        <CalendarOutlined style={{ color: '#1890ff' }} />
        <Text strong>{formattedDate}</Text>
      </Flex>
      <Divider type="vertical" style={{ margin: '0 12px', height: '20px' }} />
      <Flex align="center" gap="small">
        <ClockCircleOutlined style={{ color: '#1890ff' }} />
        <Text strong>{formattedTime}</Text>
      </Flex>
    </Flex>
  );
};

export default DateTimeDisplay;
