import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import { Button, Table } from 'antd'
import { toJS } from 'mobx'
import { Provider, inject, observer } from 'mobx-react'
import store from './store'
import Add from './Add'





// const CategoryTable = inject('categoryStore')(observer(({ categoryStore }) => {
//   return (
//     <div>
//       <Button type="primary" onClick={() => categoryStore.setShowAddModal(true)}>
//         添加分类
//       </Button>
//       <Table columns={columns} dataSource={data} />
//       <Add />
//     </div>
//   )
// }))


@inject('categoryStore')
@observer class CategoryTable extends React.Component {

  columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: '创建时间',
    dataIndex: 'create_time',
  }, {
    title: '操作',
    dataIndex: 'operate',
    render: (text, record) => (
      <div><Button text="删除" onClick={() => {
        const { categoryStore } = this.props
        categoryStore.deleteCategory(record.id)

      }} >删除</Button></div>
    ),
  }];

  componentWillMount() {
    const { categoryStore } = this.props
    categoryStore.getList()
  }

  render() {
    const { categoryStore } = this.props
    const { list } = categoryStore
    const result = toJS(list)
    return (
      <div>
        <Button type="primary" onClick={() => categoryStore.setShowAddModal(true)}>
          添加分类
        </Button>
        <Table columns={this.columns} dataSource={result} rowKey="id" />
        <Add />
      </div>
    )
  }
}


const CategoryList = ({ match }) => {
  return (
    <Provider {...store}>
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          component={CategoryTable}
        />
      </Switch>
    </Provider>
  )
}

export default CategoryList