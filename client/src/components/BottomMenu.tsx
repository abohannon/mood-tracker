import { Menu, FloatButton } from 'antd';
import { HomeOutlined, BarChartOutlined, UserOutlined, PlusOutlined, ClockCircleOutlined } from '@ant-design/icons';

interface BottomMenuProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const BottomMenu = ({ currentTab, onTabChange }: BottomMenuProps) => {
  const handleMenuClick = (e: { key: string }) => {
    onTabChange(e.key);
  };

  return (
    <>
      <Menu
        mode="horizontal"
        selectedKeys={[currentTab]}
        onClick={handleMenuClick}
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-around',
          borderTop: '1px solid #f0f0f0',
          backgroundColor: 'white',
          paddingBottom: 'env(safe-area-inset-bottom)', // For iPhone X and newer
          transform: 'translateZ(0)', // Force hardware acceleration
          backfaceVisibility: 'hidden', // Prevent flickering
          willChange: 'transform', // Optimize for animations
          height: '56px' // Fixed height to prevent resizing
        }}
        disabledOverflow={true}
        items={[
          {
            key: 'home',
            icon: <HomeOutlined style={{ fontSize: '20px' }} />,
            label: 'Home',
            style: { flex: 1, textAlign: 'center', margin: 0 }
          },
          {
            key: 'stats',
            icon: <BarChartOutlined style={{ fontSize: '20px' }} />,
            label: 'Stats',
            style: { flex: 1, textAlign: 'center', margin: 0 }
          },
          {
            key: 'profile',
            icon: <UserOutlined style={{ fontSize: '20px' }} />,
            label: 'Profile',
            style: { flex: 1, textAlign: 'center', margin: 0 }
          },
        ]}
      />

      {/* Floating Action Button with submenu */}
      <FloatButton.Group
        trigger="click"
        style={{
          right: 24,
          bottom: 70,
          zIndex: 1001
        }}
        icon={<PlusOutlined />}
        type="primary"
      >
        <FloatButton
          icon={<ClockCircleOutlined />}
          tooltip="Today"
          onClick={() => console.log('Add today\'s mood')}
        />
      </FloatButton.Group>
    </>
  );
};

export default BottomMenu;
