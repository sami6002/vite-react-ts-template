import { Layout } from 'antd'
import { createStyles } from 'antd-style'

const { Header, Footer, Sider, Content } = Layout

import PageFooter from './Footer.tsx'
import PageTopBar from './TopBar.tsx'

import PageSiderBar from './SiderBar.tsx'

import { Outlet } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CollapsedContext } from './LayoutContext.ts'

const useStyles = createStyles(({ token }) => ({
    pageLayout: {
        height: '100vh',
        overflow: 'hidden',
    },
    pageFooter: {
        textAlign: 'center',
    },
    pageSider: {
        // borderRight: `1px solid ${token.colorBorderSecondary}`
    },
    pageHeader: {
        borderBottom: `1px solid ${token.colorBorderSecondary}`
    }
}))

const PageLayout: React.FC = () => {
    const { styles } = useStyles()

    const collapsedValue = useContext(CollapsedContext)

    const [collapsed, setCollapsed] = useState<boolean>(collapsedValue)

    function handleCollapsed() {
        setCollapsed(!collapsed)
    }

    return (
        <CollapsedContext.Provider value={collapsed}>
            <Layout className={styles.pageLayout}>
                <Sider width="200" className={styles.pageSider} theme='light' collapsible collapsed={collapsed} trigger={null}>
                    <PageSiderBar  />
                </Sider>
                <Layout>
                    <Header className={styles.pageHeader}>
                        <PageTopBar onCollapsed={handleCollapsed} />
                    </Header>
                    <Content>
                        <Outlet />
                    </Content>
                    <Footer className={styles.pageFooter}>
                        <PageFooter />
                    </Footer>
                </Layout>
            </Layout>
        </CollapsedContext.Provider>
    )
}

export default PageLayout