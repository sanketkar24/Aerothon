import React from 'react';
import PartList from './PartList';
import { Layout, Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  FunnelPlotOutlined,
  ShopOutlined
} from '@ant-design/icons';
import './RecyclerListings.css'

const { Sider } = Layout;
const { Header, Content } = Layout;
const { SubMenu } = Menu;

export default function RecyclerListings(){

    return (
        <Layout>
            <Header style={{ color: 'white', background: '#001529', padding: 10, position: 'sticky', top: 0, zIndex: 1, width: '100%', height: '90px' }}>
                <h1 id="recycler-listings-header">Marketplace</h1>
            </Header>
            
            <Layout style={{ minHeight: '100vh' }}>
                <Sider style={{position: 'sticky'}}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['5']} mode="inline">
                    <SubMenu key="sub1" icon={<FunnelPlotOutlined />} title="Filter by">
                        <Menu.Item key="1">Manufacturer</Menu.Item>
                        <Menu.Item key="2">Use Case</Menu.Item>
                        <Menu.Item key="3">Material</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4" icon={<AppstoreOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="5" icon={<ShopOutlined />}>
                        Marketplace
                    </Menu.Item>
                    <Menu.Divider className='custom-divider'/>
                    <Menu.Item key="6">
                     Logout
                    </Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                    <Layout>
                        <div className="recycler-listings-main" style={heading_style}>
                            <h2>Browse available parts</h2>
                            <br />
                            <PartList />
                        </div>
                    </Layout>
                </Content>
            </Layout>
            
        </Layout>
  );
}

const heading_style = {
    margin: "15px",
}
