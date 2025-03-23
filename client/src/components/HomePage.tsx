import { Card, Space, Typography } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

export function HomePage() {
  return (
    <Card title="Welcome to Mood Tracker" style={{ maxWidth: 600, margin: '0 auto' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={4}>Track your moods with ease <SmileOutlined /></Title>
        <Text>This application helps you track and analyze your daily moods.</Text>
      </Space>
    </Card>
  )
}
