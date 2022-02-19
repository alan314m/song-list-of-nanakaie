# 七宝的歌单

新手随便做做来练手，请多包涵

<br />

## 前端咋跑？

此项目使用Next.JS(一个基于React.JS的前端框架)撰写。如果运行环境没有Node.JS，请先下载[Node.JS](https://nodejs.org)

<br />

### 开发环境

一直用的npm, 不确定yarn是否还好使。跑开发服务器使用如下指令：

```bash
npm install

npm run dev
# or
yarn dev
```
默认3000端口

<br />

## 导出静态网站

目前next.config.js参考的腾讯云文档。其他部署环境可能需要更改

```bash
npm run build
npm run export
```

Next.JS自动生成的"out"文件夹可直接用于部署静态网页

<br />

## Excel歌单转Json

转Excel到Json需要[Python3](https://www.python.org/), pandas和openpyxl

目前歌曲信息储存于"./public/music_list_7.json"

金山文档输出Excel覆盖"./music_list_7.xlsx"并运行"./music_list_to_json.py"自动输出json文件覆盖"./public/music_list_7.json"

<br />
<br />
<br />

# 以下内容由Next.JS自动生成

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
