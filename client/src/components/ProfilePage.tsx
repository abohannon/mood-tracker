import { Card, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import PageHeader from './PageHeader'

const { Text } = Typography

export function ProfilePage() {
  return (
    <>
      <PageHeader title="Your Profile" icon={<UserOutlined />} />
      <Card style={{ width: '100%' }}>
        <div style={{ padding: '16px' }}>
          <Text>Profile settings and information will appear here.</Text>
        </div>
      </Card>
    </>
  )
}
