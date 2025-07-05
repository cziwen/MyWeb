# 个人作品集网站

一个现代化、响应式的个人作品集网站，使用HTML、CSS和JavaScript构建。

## 功能特性

- 🎨 现代化设计，美观的UI界面
- 📱 完全响应式，支持移动端和桌面端
- ⚡ 流畅的动画效果和交互
- 🎯 平滑滚动导航
- 📊 技能进度条动画
- 📧 联系表单功能
- 🔝 返回顶部按钮
- 🌙 优雅的悬停效果

## 文件结构

```
MyWeb/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
└── README.md           # 项目说明
```

## 自定义指南

### 1. 个人信息修改

在 `index.html` 中修改以下内容：

- **姓名**: 将 "你的名字" 替换为你的真实姓名
- **职业描述**: 修改 `.hero-subtitle` 中的职业描述
- **个人介绍**: 在 `.hero-description` 和 `.about-text` 中修改个人介绍
- **统计数据**: 在 `.about-stats` 中修改你的经验数据

### 2. 技能展示

在 `index.html` 的 `.skills` 部分：

- 修改技能类别名称
- 调整技能名称和进度条百分比
- 添加或删除技能项

### 3. 项目展示

在 `index.html` 的 `.projects` 部分：

- 替换项目标题和描述
- 修改使用的技术标签
- 更新项目链接（预览和GitHub链接）
- 添加项目截图（替换占位符图标）

### 4. 联系信息

在 `index.html` 的 `.contact` 部分：

- 更新邮箱地址
- 修改电话号码
- 更改地址信息
- 更新社交媒体链接

### 5. 样式定制

在 `styles.css` 中可以修改：

- **颜色主题**: 修改CSS变量或直接更改颜色值
- **字体**: 更换Google Fonts字体
- **布局**: 调整间距、边距等
- **动画**: 修改动画效果和时长

## 部署到GitHub Pages

### 方法一：使用GitHub Pages（推荐）

1. **创建GitHub仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **推送到GitHub**
   ```bash
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git branch -M main
   git push -u origin main
   ```

3. **启用GitHub Pages**
   - 进入GitHub仓库页面
   - 点击 "Settings" 标签
   - 滚动到 "Pages" 部分
   - 在 "Source" 中选择 "Deploy from a branch"
   - 选择 "main" 分支和 "/ (root)" 文件夹
   - 点击 "Save"

4. **访问你的网站**
   - 等待几分钟后，你的网站将在 `https://你的用户名.github.io/你的仓库名` 上线

### 方法二：使用GitHub Actions（高级）

1. 在仓库根目录创建 `.github/workflows/deploy.yml` 文件
2. 配置自动部署脚本
3. 每次推送代码时自动部署

## 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/你的用户名/你的仓库名.git
   cd 你的仓库名
   ```

2. **本地预览**
   - 使用任何本地服务器（如Live Server、Python SimpleHTTPServer等）
   - 或者直接在浏览器中打开 `index.html`

## 技术栈

- **HTML5**: 语义化标记
- **CSS3**: 现代样式和动画
- **JavaScript**: 交互功能
- **Font Awesome**: 图标库
- **Google Fonts**: 字体服务

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 性能优化建议

1. **图片优化**
   - 使用WebP格式
   - 压缩图片大小
   - 使用适当的图片尺寸

2. **代码优化**
   - 压缩CSS和JavaScript文件
   - 使用CDN加载外部资源
   - 启用Gzip压缩

3. **SEO优化**
   - 添加meta标签
   - 优化页面标题和描述
   - 使用语义化HTML标签

## 自定义主题

你可以通过修改CSS变量来快速更换主题：

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --text-color: #333;
    --background-color: #ffffff;
}
```

## 许可证

MIT License - 可自由使用和修改

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 联系方式

如有问题或建议，请通过以下方式联系：

- 邮箱: your.email@example.com
- GitHub: [你的GitHub主页]

---

**注意**: 记得在部署前替换所有的占位符内容，包括个人信息、项目链接和联系方式。 