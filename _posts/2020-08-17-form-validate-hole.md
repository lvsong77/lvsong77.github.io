---
title: Element 表单验证的坑
key: p-2020-08-17-form-validate-hole
tags: Element
---

# 表单验证

在涉及表单提交的业务时，Element自带的表单验证有时很有用，可以省下不少时间，但是坑也不少，往往出现各种意想不到的问题。

<!--more-->

# 表单验证的坑

## 1. 打开页面自动验证表单

有时会出现打开页面或者打开Dialog自动验证表单的情况，刚打开就一片红。  
  
解决方案如下：  
给form添加 `:validate-on-rule-change="false"`

```HTML
<el-form :validate-on-rule-change="false"></el-form>
```

## 2. 使用Dialog时关闭后再打开显示上次验证结果

我们有很多时候都会在Dialog中使用form进行填写，这时候如果表单验证失败，我们关掉了Dialog，再次打开依然会出现上次的验证结果，即使这次的数据没有问题。

解决方案如下：
给Dialog绑定 `close` 事件，并清除验证。

```HTML
<el-dialog @close="closeDialog"
           :close-on-click-modal="false"
           :close-on-press-escape="false">
  <el-form ref="form" :validate-on-rule-change="false"></el-form>
</el-dialog>
```

```JavaScript
closeDialog() {
  this.$refs.form.resetFields();
}
```

### 注意：两种关闭Dialog的方式的影响

Element默认中，有几种关闭Dialog的方式；其中，以下两种对清空表单验证结果有影响：
  
1. 按ESC关闭Dialog  
     
   如果一个input为空，但是验证规定为必填，鼠标点到input框，此时快速按下ESC关闭Dialog，则会造成下次打开Dialog时，表单验证失败；

2. 点击空白处关闭Dialog  
     
   同第一个类似，点击空的必填input后快速点击空白处，再次打开会验证失败。  
   但实际上很难在极短时间内，点击input后去点击空白处，不过Element有个设计是，单击input之后，不送鼠标，移动到空白处，松开鼠标，此时Dialog会关闭，则会造成上诉问题。

原因分析：

  个人觉得原因在于，极快的关闭Dialog，其调用函数中的 `this.$refs.form` 没有相应的元素，所以清除验证失效了，但是这里也没有报错，不知道为什么。

解决方法：

  如上面代码，给Dialog加上参数 `:close-on-click-modal="false" :close-on-press-escape="false"` 可以禁止这两种关闭Dialog的方式

## 3. prop与v-model中的字段须一致

即：以下代码中的 `name` 字段需一致，否则验证不会成功。

```HTML
<el-form :model="formData" :rules="rules">
  <el-form-item label="名字" prop="name">
    <el-input v-model="formData.name"></el-input>
  </el-form-item>
</el-form>

data() {
  return {
    formData: {
      name: ""
    },
    rules: {
      name: [{ required: true, message: "请输入名字", trigger: ["blur", "change"]}]
    }
  };
},

```

## 4. 表单验证触发方式

对于 `Select` ，trigger的参数应该设置为 `'change'` 而不是'blur'；  

对于 `Input` ，可以设置为 `['blur', 'change']` 使其在编辑和失焦时都触发验证。

# 小结

其实后面两种是比较基本的使用，前面两个真的是耗费了很多时间的坑。也在网上查了很多资料，最终解决了。希望记录下来自己以后好查找，有需要的人万一看到也挺好的。