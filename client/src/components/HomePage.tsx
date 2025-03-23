import { Card, Space, Typography } from 'antd'
import { SmileOutlined, HeartFilled } from '@ant-design/icons'
import PageHeader from './PageHeader'

const { Title, Text } = Typography

export function HomePage() {
  // Get current month and year
  const date = new Date()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  return (
    <>
      <PageHeader title={`${month} ${year}`} icon={<HeartFilled />} />
      <Card bordered={false} style={{ width: '100%' }}>
        <Space direction="vertical" size="large" style={{ width: '100%', padding: '16px' }}>
          <Title level={4}>Track your moods with ease <SmileOutlined /></Title>
          <Text>This application helps you track and analyze your daily moods.</Text>
        </Space>
      </Card>
    </>
  )
}
