import { Typography, Flex, Button } from 'antd';
import { ReactNode } from 'react';

const { Text } = Typography;

interface MoodButtonProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

const MoodButton = ({ icon, label, onClick }: MoodButtonProps) => {
  return (
    <Flex vertical align="center">
      <Button
        type="text"
        style={{ height: '60px', width: '60px' }}
        onClick={onClick}
      >
        {icon}
      </Button>
      <Text>{label}</Text>
    </Flex>
  );
};

export default MoodButton;
