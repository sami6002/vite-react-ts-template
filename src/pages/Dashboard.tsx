import { Flex } from 'antd'
import Logo from '../assets/react.svg'

const Dashboard: React.FC = () => {
    return (
        <Flex style={{padding: '16px', height: '100%'}} align='center' justify='center' vertical gap='middle'>
            <img src={Logo} width={120} />
            <h3>Hello React!!!</h3>
            <p>vite@5 react@18 antd@5 react-router-dom@6 react-query@5</p>
        </Flex>
    )
}

export default Dashboard