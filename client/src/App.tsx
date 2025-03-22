import { useState } from 'react'
import { Button, Layout, Typography, Card, Space } from 'antd'
import { HeartFilled, SmileOutlined } from '@ant-design/icons'

const { Header, Content, Footer } = Layout
const { Title, Text } = Typography

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          <HeartFilled style={{ marginRight: 8 }} />
          Mood Tracker
        </Title>
      </Header>
      <Content style={{ padding: '2rem', minHeight: '80vh' }}>
        <Card title="Welcome to Mood Tracker" bordered={false} style={{ maxWidth: 600, margin: '0 auto' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={4}>Track your moods with ease <SmileOutlined /></Title>
            <Text>This application helps you track and analyze your daily moods.</Text>
            <div style={{ textAlign: 'center' }}>
              <Button type="primary" size="large" onClick={() => setCount((count) => count + 1)}>
                Clicked {count} {count === 1 ? 'time' : 'times'}
              </Button>
            </div>
          </Space>
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Mood Tracker ©{new Date().getFullYear()} Created with Ant Design
      </Footer>
    </Layout>
  )
}

export default App
