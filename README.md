# 3DTagCloud

![](https://img.shields.io/badge/npm-0.12-orange.svg) ![](https://img.shields.io/github/issues/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/forks/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/stars/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/license/crazylxr/3dtagcloudforeact.svg)

基于 react 的 3d 标签云, [在线 demo](https://jyoketsu.github.io/3d-tag-cloud-for-react-withclick/)

原作者地址：[https://github.com/crazylxr/3d-tag-cloud-for-react](https://github.com/crazylxr/3d-tag-cloud-for-react)
在此基础上将标签参数改为了对象数组并添加了点击事件以满足自己项目需要  
感谢[crazylxr](https://github.com/crazylxr)

## Installation

```bash
npm install react3dtagcloud_withclick --save
```

## Usage

```javascript
import React from "react";
import TagCloud from "react3dtagcloud";

class Demo extends React.Component {
  handleClick(tag) {
    alert(`id:${tag.id};name:${tag.name}`);
  }

  render() {
    let tagName = [
      { id: "java", name: "java" },
      { id: "javscript", name: "javscript" },
      { id: "C", name: "C" },
      { id: "C++", name: "C++" },
      { id: "fe", name: "前端" },
      { id: "React", name: "React" },
      { id: "Vue", name: "Vue" },
      { id: "redux", name: "redux" },
      { id: "writing", name: "写作" },
      { id: "programmer", name: "程序员" },
      { id: "programme", name: "编程" }
    ];
    tagName = [...tagName, ...tagName, ...tagName];

    return (
      <div
        style={{
          width: "300px",
          height: "300px",
          padding: "100px"
        }}
      >
        <TagCloud
          tagName={tagName}
          radius={200}
          onClick={this.handleClick}
        ></TagCloud>
      </div>
    );
  }
}
```

## API

对于标签云可以设置一些自定义属性，具体如下：

| 属性    | 说明         | 类型                | 默认值 |
| ------- | ------------ | ------------------- | ------ |
| tagName | 标签数组     | Array&lt;string&gt; | []     |
| speed   | 球体旋转速度 | number              | 10     |
| radius  | 球的半径     | number              | 200    |
| url     | 前缀 url     | string              | ''     |

## License

MIT
