import React from 'react'
import {
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import Dashboard from './Dashboard'
import Article from './Article'
import Category from './Category'
import Tag from './Tag'
import User from './User'

import { observer, inject } from 'mobx-react';
import userStore from '~/User/user.store'


import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const menu_data = [{
  type: 'menu',
  icon: 'pie-chart',
  name: '首页',
  value: 'dashboard',
}, {
  type: 'menu',
  icon: 'pie-chart',
  name: '文章',
  value: 'article',
}, {
  type: 'menu',
  icon: 'pie-chart',
  name: '分类',
  value: 'category',
}, {
  type: 'menu',
  icon: 'pie-chart',
  name: '标签',
  value: 'tag',
}, {
  type: 'menu',
  icon: 'pie-chart',
  name: '用户',
  value: 'user',
}]

const SideMenu = withRouter((props) => {
  const { location } = props;
  let index = 0
  menu_data.forEach((m, i) => {
    if (m.value === location.pathname.slice(1)) {
      index = i
    }
  })
  return (
    <Menu defaultSelectedKeys={[String(index)]} mode="inline">
      {menu_data.map((m, i) => (
        <Menu.Item key={i}>
          <Link to={`/app/${m.value}`}>
            <Icon type={m.icon} />{m.name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
});


const breadcrumbNameMap = {
  '/app/dashboard': '首页',
  '/app/article': '文章列表',
  '/app/article/add': '添加文章',
  '/app/category': '分类',
  '/app/tag': '标签',
  '/app/user': '用户',
};


const BreadBar = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  });
  return (
    <Breadcrumb>
      {breadcrumbItems}
    </Breadcrumb>
  );
});

@observer class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  componentDidMount() {
    userStore.getUserInfo()
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <SideMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff' }} >
            <BreadBar />
            <div className="person-info">
              <div className="person-info-name">{userStore.user_info ? userStore.user_info.name : 'xxx'}</div>
              <div className="person-info-logout" onClick={userStore.logout}>登出</div>
            </div>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/article" component={Article} />
              <Route path="/app/category" component={Category} />
              <Route path="/app/tag" component={Tag} />
              <Route path="/app/user" component={User} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            林向东blog
          </Footer>
        </Layout>
      </Layout>

    );
  }
}

export default App
