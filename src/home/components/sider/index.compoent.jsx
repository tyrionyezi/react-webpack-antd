import React , { Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;





export default class Sider extends Component {

    render () {
        const data = [
            {
                title: '一级分类1',
                url: '/1',
                sub:[{
                        title: '一级分类1-1',
                        url: '/2'
                    }, {
                        title: '一级分类1-2',
                        url: '/2'
                    }, {
                        title: '一级分类1-3',
                        url: '/2'
                    },
                ]
            }, {
                title: '二级分类2',
                url: '/1',
                sub:[{
                        title: '二级分类2-1',
                        url: '/2'
                    }, {
                        title: '二级分类2-2',
                        url: '/2'
                    }, {
                        title: '二级分类2-3',
                        url: '/2'
                    },
                ]
            }, {
                title: '三级分类3',
                url: '/1',
                sub:[{
                        title: '三级分类3-1',
                        url: '/2'
                    }, {
                        title: '三级分类3-2',
                        url: '/2'
                    }, {
                        title: '三 级分类3-3',
                        url: '/2'
                    },
                ]
            },
        ]
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['menu0']}>
                {
                    data.map((item, index) => {
                        return (
                            item.sub ? 
                            <SubMenu
                                key={`menu${index}`}
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>{item.title}</span>
                                    </span>
                                }
                            >
                                {
                                    item.sub.map((it,inx) => {
                                       return <Menu.Item key={`sub${inx}`}>{it.title}</Menu.Item>
                                    })
                                }
                            </SubMenu>
                            :
                            <Menu.Item key={`menu${index}`}>
                                <Icon type="user" />
                                <span>{item.title}</span>
                            </Menu.Item>
                            
                        )
                    })
                }
            </Menu>
        )
    }
}