# 使用指南

## 快速开始

1. **本地开发**
   ```bash
   npm install
   npm run dev
   ```
   访问 http://localhost:5173

2. **修改内容**
   编辑 `public/config/site-config.json` 文件来更新：
   - 网站标题和描述
   - 联系信息
   - 项目列表
   
   **注意**：修改配置文件后需要重启开发服务器才能看到变化

3. **部署到 GitHub Pages**
   - 将代码推送到 GitHub 仓库
   - 在仓库设置中启用 GitHub Pages
   - 选择 "GitHub Actions" 作为部署源
   - 修改 `vite.config.js` 中的 `base` 为你的仓库名

## 内容配置示例

### 添加新项目
在 `site-config.json` 的 `projects` 数组中添加：

```json
{
  "id": "my-new-project",
  "title": "我的新项目",
  "description": "项目描述",
  "type": "Creative",
  "year": "2024",
  "featured": false,
  "images": [
    {
      "src": "/images/my-new-project/photo1.jpg",
      "alt": "项目图片描述",
      "width": 800,
      "height": 600
    },
    {
      "src": "/images/my-new-project/photo2.jpg",
      "alt": "另一张项目图片",
      "width": 600,
      "height": 800
    }
  ]
}
```

### 添加项目图片
1. 在 `public/images/` 下创建项目目录（如 `my-new-project`）
2. 将图片文件放入该目录
3. 在 JSON 配置中添加图片信息，包括路径、描述和尺寸
4. 图片支持 JPG、PNG、SVG 等格式

### 添加网站Logo
1. 将 logo 图片放入 `public/images/` 目录
2. 在配置文件中添加 logo 配置：
```json
{
  "site": {
    "logo": {
      "src": "/images/your-logo.png",
      "alt": "你的Logo描述",
      "width": 80,
      "height": 80
    }
  }
}
```

**Logo 功能特点：**
- 显示在左侧边栏标题上方
- 圆形显示效果
- 点击可返回首页
- 悬停时有缩放动画效果

### 添加首页图片
1. 在 `public/images/` 下创建 `welcome` 目录
2. 将首页图片放入该目录
3. 在配置文件中添加 welcomeImages 配置：
```json
{
  "site": {
    "welcomeImages": [
      {
        "src": "/images/welcome/main-image.jpg",
        "alt": "首页主图描述",
        "width": 600,
        "height": 400
      },
      {
        "src": "/images/welcome/secondary-image.jpg",
        "alt": "次要图片描述",
        "width": 400,
        "height": 300
      }
    ]
  }
}
```

### 修改联系信息
```json
{
  "site": {
    "contact": {
      "name": "你的姓名",
      "email": "your.email@example.com",
      "phone": "你的电话"
    }
  }
}
```

## 样式自定义

- 全局样式：`src/App.css`
- 组件样式：`src/components/*.css`
- 颜色主题可以通过修改 CSS 变量来调整

## 项目结构

```
myPage/
├── public/
│   └── config/
│       └── site-config.json    # 网站内容配置
├── src/
│   ├── components/             # React 组件
│   ├── App.jsx                # 主应用
│   └── main.jsx               # 入口文件
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 部署配置
└── vite.config.js             # Vite 配置
```

## 常见问题

**Q: 如何更改网站的基础路径？**
A: 修改 `vite.config.js` 中的 `base` 选项

**Q: 如何添加新页面？**
A: 在 `src/components/` 中创建新组件，然后在 `App.jsx` 中添加路由

**Q: 如何修改样式？**
A: 编辑对应的 CSS 文件，或者在 `App.css` 中添加全局样式
