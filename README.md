# 本地开发环境启动命令
- yarn dev
- http://localhost:8080/

# 本地开发环境依赖版本
- node "^16.0.0 || >=18.0.0"
- yarn  v1.22.17


# 核心库
- UI库 antd https://ant-design.antgroup.com/components/overview-cn
- Graphql API库 apollographql  https://www.apollographql.com/docs/react/get-started

# 项目规范
## 目录结构
- src/api api接口 
- - src/api/mutation mutation接口
- - src/api/query query接口
- src/ app app入口
- src/assets 静态资源
- src/component 组件库
- src/context context
- src/page 页面
- src/router 路由相关
- env 环境变量
## 命名规范
- 变量名/目录名 小驼峰 eg: myPhoto
- 样式命名规范 css文件蛇形 在ts/jsx 可以用驼峰 会自动转
- 请求规范 query 文件名后缀Query  mutation 文件名后缀是Mutation
## git 提交规范
- git commit 会进行 eslint,stylelint  和 prettier文件格式化 校验，请根据结果修改
## 分支管理规范
- master 上线分支 只允提 pull merge 上线
- dev 版本迭代开发分支 运行push 和 merge ，开发完合到test进行测试 测试完上线合到master
- test 测试分支 只允提 pull merge 上测试
- hotfix/xx 紧急修复bug分支 修复完直接合test进行测试 测试完上线合到master
- 推荐使用fetch 而不是 pull 去更新线上最新分支
- 推荐使用rebase 而不是 merge 去同步origin 分支
## tag管理
- 请遵循 语义化版本 https://semver.org/lang/zh-CN/
- 版本格式：主版本号.次版本号.修订号，版本号递增规则如下：
  主版本号：当你做了不兼容的 API 修改，
  次版本号：当你做了向下兼容的功能性新增，
  修订号：当你做了向下兼容的问题修正。

# 部署
todo
