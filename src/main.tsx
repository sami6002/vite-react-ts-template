import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import router from './router'
import './styles/index.scss'
import './styles/antd.scss'
import { ConfigProvider } from 'antd'


export const APP: React.FC = () => {
    return (
        <React.StrictMode>
            <ConfigProvider theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
                components: {
                    Layout: {
                        headerPadding: '0 16px',
                        headerBg: '#ffffff',
                        footerPadding: '16px',
                        footerBg: '#f9f9f9',
                        bodyBg: '#f9f9f9',
                    }
                }
            }}>
                <RouterProvider router={router} />
            </ConfigProvider>
        </React.StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<APP />,)
