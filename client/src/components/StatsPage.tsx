import { Card, Typography } from 'antd'
import { BarChartOutlined } from '@ant-design/icons'
import PageHeader from './PageHeader'

const { Text } = Typography

export function StatsPage() {
  return (
    <>
      <PageHeader title="Your Stats" icon={<BarChartOutlined />} />
      <Card style={{ width: '100%' }}>
        <div style={{ padding: '16px' }}>
          <Text>Here you'll see statistics about your moods. Coming soon...</Text>
        </div>
      </Card>
    </>
  )
}
