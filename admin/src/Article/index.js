import React from 'react'
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import { Button, Table } from 'antd'
import Add from './Add'
import { Provider, inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import store from './store'



@inject('articleStore')
@observer class ArticleTable extends React.Component {

  columns = [{
    title: '标题',
    dataIndex: 'title',
  }, {
    title: 'id',
    dataIndex: 'id',
  }, {
    title: 'user_id',
    dataIndex: 'user_id',
  }, {
    title: 'status',
    dataIndex: 'status',
  }, {
    title: 'url_name',
    dataIndex: 'url_name',
  }, {
    title: 'is_open',
    dataIndex: 'is_open',
  }, {
    title: 'is_comment',
    dataIndex: 'is_comment',
  }, {
    title: '创建时间',
    dataIndex: 'create_time',
  }, {
    title: '操作',
    dataIndex: 'operate',
    render: (text, record) => (
      <div><Button text="删除" onClick={() => {
        const { articleStore } = this.props
        console.log(335, record.id)
        articleStore.deleteArticle(record.id)

      }} >删除</Button></div>
    ),
  }]

  componentWillMount() {
    const { articleStore } = this.props
    articleStore.getList()
  }

  render() {
    const { articleStore, match } = this.props
    const { list } = articleStore
    const result = toJS(list)
    return (
      <div>
        <Button type="primary">
          <Link to={`${match.path}/add`}>添加文章</Link>
        </Button>
        <Table columns={this.columns} dataSource={result} rowKey="id" />
      </div>
    )
  }
}

const ArticleList = ({ match }) => {
  return (
    <Provider {...store}>
      <Switch>
        <Route
          exact
          path={match.path}
          component={ArticleTable}
        />
        <Route path={`${match.path}/add`} component={Add} />
      </Switch>
    </Provider>
  )
}

export default ArticleList