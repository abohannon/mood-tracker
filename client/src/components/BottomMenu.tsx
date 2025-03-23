import { Menu, FloatButton } from 'antd';
import { HomeOutlined, BarChartOutlined, UserOutlined, PlusOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import TodayModal from './TodayModal';

interface BottomMenuProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const BottomMenu = ({ currentTab, onTabChange }: BottomMenuProps) => {
  const [isTodayModalOpen, setIsTodayModalOpen] = useState(false);

  const handleMenuClick = (e: { key: string }) => {
    onTabChange(e.key);
  };

  const openTodayModal = () => {
    setIsTodayModalOpen(true);
  };

  const closeTodayModal = () => {
    setIsTodayModalOpen(false);
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
          bottom: 70, // Adjusted since safe area is now handled at app level
          zIndex: 1001
        }}
        icon={<PlusOutlined  />}
        type="primary"
      >
        <FloatButton
          icon={<ClockCircleOutlined />}
          tooltip="Today"
          onClick={openTodayModal}
        />
      </FloatButton.Group>

      <TodayModal isOpen={isTodayModalOpen} onClose={closeTodayModal} />
    </>
  );
};

export default BottomMenu;
