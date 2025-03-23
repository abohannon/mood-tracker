import { Card, Typography } from 'antd'

const { Text } = Typography

export function ProfilePage() {
  return (
    <Card title="Your Profile" style={{ maxWidth: 600, margin: '0 auto' }}>
      <Text>Profile settings and information will appear here.</Text>
    </Card>
  )
}
