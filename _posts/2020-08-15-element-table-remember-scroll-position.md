---
title: Element table 滚动后切换到其他页面再返回保持滚动位置
key: p-2020-08-15-element-table-remember-scroll-position
tags: Vue Element
---

# 需求分析：

在业务中，往往会有这样的场景：  
一个table显示很多内容，出现垂直滚动条。当我们滚动到下面的某一项，点进去查看，退出来后，滚动条又回到了最上面，造成不便。

<!--more-->

# 解决方案：

1. 首先，table所在的组件需要在 keep-alive 中；
   
2. 组件中代码实例如下：
   
```html
  <template>
    <el-table ref="table"></el-table>
  </template>

  <script>
    export default {
      data() {
        scroll: 0 // 定义滚动距离
      },
      activated() {
        // 处理滚动事件
        this.handleScroll();
      },
      mounted() {
        // 监听滚动事件，保存scroll的值
        this.$refs.list.bodyWrapper.addEventListener(
          "scroll",
          e => {
            let target = e.target;
            this.scroll = target.scrollTop;
          },
          false
        );
      },
      beforeDestroy() {
        // 取消监听
        this.$refs.list.bodyWrapper.removeEventListener(
          "scroll",
          e => {
            let target = e.target;
            this.scroll = target.scrollTop;
          },
          false
        );
      },
      methods: {
        /**
         * 更改当前页
         */
        handleCurrentChange() {
          this.scroll = 0;
          this.handleScroll();
        },
        /**
         * 更改每页显示数量
         */
        handleSizeChange() {
          this.scroll = 0;
          this.handleScroll();
        },
        /**
         * 处理滚动事件
         */
        handleScroll() {
          setTimeout(() => {
            let el = this.$el.querySelector(".el-table__body-wrapper");
            el.scrollTop = this.scroll;
          });
        }
      }
    }
  </script>
  ```

# 参考链接：
[https://segmentfault.com/a/1190000020916605](https://segmentfault.com/a/1190000020916605)