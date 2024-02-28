import { createStyles } from "antd-style"
import logo from '../assets/react.svg'
import { Flex, Menu, MenuProps } from "antd"
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'
import { CollapsedContext } from "./LayoutContext"
import { useContext } from "react"

const useStyles = createStyles(({token}) => ({
    logo: {
        height: '64px',
        lineHeight: '64px',
        borderBottom: `1px solid ${token.colorBorderSecondary}`,
        borderRight: `1px solid ${token.colorBorderSecondary}`,
        fontSize: token.fontSizeHeading4,
        padding: '0 16px',
    },
    menu: {
        height: 'calc(100% - 64px)',
        overflow: 'auto',
    }
}))

const items:MenuProps['items'] = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: 'nav 1',
        children: [
            {
                key: '1-1',
                icon: <UserOutlined />,
                label: 'nav 1-1',
            },
            {
                key: '1-2',
                icon: <VideoCameraOutlined />,
                label: 'nav 1-2',
            },
            {
                key: '1-3',
                icon: <UploadOutlined />,
                label: 'nav 1-3',
            },
        ]
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
    },
    {
        key: '3',
        icon: <UploadOutlined />,
        label: 'nav 3',
    },
    
]

export default function SiderBar() {
    const { styles } = useStyles()

    const collapsed = useContext(CollapsedContext)

    return (
        <>
            <Flex className={styles.logo} align="center" gap="small">
                <img src={logo} width={40} /> {!collapsed && 'Vite + React'}
            </Flex>
            <Menu className={styles.menu} theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </>
    )
}