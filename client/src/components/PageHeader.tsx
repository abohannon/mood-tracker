import { useState } from 'react';
import { Layout, Typography, Button } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { checkForUpdates } from '../App';

const { Header } = Layout;
const { Title } = Typography;

interface PageHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

const PageHeader = ({ title, icon }: PageHeaderProps) => {
  const [updating, setUpdating] = useState(false);

  const handleCheckForUpdates = () => {
    checkForUpdates(setUpdating);
  };

  return (
    <Header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px'
    }}>
      <Title level={3} style={{ color: 'white', margin: 0 }}>
        {icon && <span style={{ marginRight: 8 }}>{icon}</span>}
        {title}
      </Title>
      <Button
        type="text"
        icon={<CloudDownloadOutlined spin={updating} />}
        onClick={handleCheckForUpdates}
        loading={updating}
        style={{ color: 'white' }}
      />
    </Header>
  );
};

export default PageHeader;
