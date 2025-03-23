import { Card, Typography } from 'antd'

const { Text } = Typography

export function StatsPage() {
  return (
    <Card title="Your Mood Stats" style={{ maxWidth: 600, margin: '0 auto' }}>
      <Text>Here you'll see statistics about your moods. Coming soon...</Text>
    </Card>
  )
}
