import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import './home.less';
import SiderComponent from './components/sider/index.compoent';
import Counter from './../components/counter/index.component'
export default class Home extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className="main">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">logo</div>
                    <SiderComponent />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        Content1
                        <Counter value={5000}></Counter>
                    </Content>
                </Layout>
            </Layout>

        )
    }
}