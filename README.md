# Loïc Froissart Portfolio Clone

这是一个基于 Vite + React 的静态网站，复制了 [Loïc Froissart](https://www.loicfroissart.com/) 的网站样式和结构。

## 特性

- 📱 响应式设计
- 🎨 简洁的视觉风格
- 📝 JSON 配置驱动的内容管理
- 🚀 自动部署到 GitHub Pages
- ♿ 无障碍导航支持
- 👤 About Me 个人介绍页面

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 内容配置

网站内容通过 `public/config/site-config.json` 文件进行配置。配置文件会在构建时直接导入，无需运行时请求：

### 网站基本信息
```json
{
  "site": {
    "title": "网站标题",
    "subtitle": "副标题",
    "description": "描述文字",
    "interview": "采访链接文字",
    "logo": {
      "src": "/images/logo.svg",
      "alt": "网站Logo描述",
      "width": 80,
      "height": 80
    },
    "welcomeImages": [
      {
        "src": "/images/welcome/hero-image.svg",
        "alt": "首页主图描述",
        "width": 600,
        "height": 400
      }
    ],
    "about": {
      "title": "关于我",
      "content": ["个人介绍段落1", "个人介绍段落2"],
      "skills": ["技能1", "技能2"],
      "experience": [
        {
          "title": "工作职位",
          "period": "时间段",
          "description": "工作描述"
        }
      ],
      "images": [
        {
          "src": "/images/about/portrait.svg",
          "alt": "个人照片",
          "width": 300,
          "height": 400
        }
      ]
    },
    "contact": {
      "name": "联系人姓名",
      "email": "邮箱地址",
      "phone": "电话号码"
    }
  }
}
```

### 项目配置
```json
{
  "projects": [
    {
      "id": "项目ID",
      "title": "项目标题",
      "description": "项目描述",
      "type": "项目类型",
      "year": "年份",
      "featured": true, // 是否为特色项目
      "images": [
        {
          "src": "/images/项目目录/图片文件名.jpg",
          "alt": "图片描述",
          "width": 800,  // 图片宽度（像素）
          "height": 600  // 图片高度（像素）
        }
      ]
    }
  ]
}
```

### 图片管理

#### 网站Logo
- 将 logo 图片放在 `public/images/` 目录下
- 在配置中设置 `logo` 对象，包含路径、描述和尺寸
- Logo 会显示在左侧边栏的标题上方，圆形显示
- 点击 Logo 可以返回首页
- 支持悬停缩放效果

#### 首页图片
- 将首页图片放在 `public/images/welcome/` 目录下
- 在配置中设置 `welcomeImages` 数组
- 支持多张图片，会以网格形式展示
- 点击图片可以查看大图（灯箱效果）

#### 项目图片
- 将项目图片放在 `public/images/项目ID/` 目录下
- 支持 JPG、PNG、SVG 等格式
- 可以为每张图片设置自定义宽高
- 图片会自动适配响应式布局
- 点击图片可以查看大图（灯箱效果）
- 支持键盘导航（ESC 关闭，左右箭头切换）

## GitHub Pages 部署

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为源
4. **重要**：修改 `vite.config.js` 中的 `base` 路径为你的仓库名：
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // 替换为你的实际仓库名
   })
   ```
5. 推送代码后会自动构建和部署

### 本地开发注意事项
- 配置文件在构建时直接导入，修改后需要重启开发服务器
- 图片路径会自动适配 base path
- 如果遇到路径问题，请检查 `vite.config.js` 中的 `base` 设置
- 本地开发服务器地址会显示为 `http://localhost:5173/your-repo-name/`

## 自定义样式

主要的样式文件：

- `src/App.css` - 全局样式
- `src/components/Header.css` - 头部样式
- `src/components/Navigation.css` - 导航样式
- `src/components/MainContent.css` - 主内容样式
- `src/components/ProjectDetail.css` - 项目详情样式

## 项目结构

```
src/
├── components/
│   ├── Header.jsx          # 网站头部
│   ├── Navigation.jsx      # 跳转导航
│   ├── MainContent.jsx     # 主要内容
│   └── ProjectDetail.jsx   # 项目详情页
├── App.jsx                 # 主应用组件
└── main.jsx               # 入口文件

public/
└── config/
    └── site-config.json   # 网站配置文件
```

## 技术栈

- ⚡ Vite - 构建工具
- ⚛️ React - UI 框架
- 🛣️ React Router - 路由管理
- 🎨 CSS3 - 样式
- 🚀 GitHub Actions - 自动部署

## 许可证

MIT License