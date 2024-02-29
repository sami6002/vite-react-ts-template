import { Avatar, Flex, Dropdown, Button } from "antd"
import type { MenuProps } from "antd"
import { createStyles } from "antd-style"
import { LogoutOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useContext } from "react"
import { CollapsedContext } from "./LayoutContext"

const useStyles = createStyles(({ css }) => ({
    topbar: {
        height: '100%',
    },
    avatar: css`
        background-color: var(--color-primary)
    `,
    right: css`
        line-height: initial;
    `,
}))


const items: MenuProps['items'] = [
    {
      label: 'Logout',
      key: 'logout',
      icon: <LogoutOutlined />,
    },
]

interface Props {
    onCollapsed: () => void
}

const TopBar:React.FC<Props> = ({onCollapsed}: Props) => {
    const { styles } = useStyles()

    const collapsed = useContext(CollapsedContext)

    const onClick: MenuProps['onClick'] = ({ key }) => {
        console.log(`Click on item ${key}`);
    }

    return (
        <Flex className={styles.topbar} justify="space-between" align="center">
            <div className="leftContent">
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={onCollapsed}
                />
            </div>
            <Flex align="center" className={styles.right}>
                <Dropdown menu={{ items, onClick }} placement="bottomRight" trigger={['click']}>
                    <a className="block" onClick={(e) => e.preventDefault()}>
                        <Avatar className={styles.avatar}>SA</Avatar>
                    </a>
                </Dropdown>
            </Flex>
        </Flex>
    )
}

export default TopBar