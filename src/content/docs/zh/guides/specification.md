---
title: 规范
description: An introduction to Sophye Specification.
---

与 Sophye 相关的文件全部存放在系统用户目录或某项目根目录下的 `.sophye` 文件夹中。

## 作用范围

根据 `.sophye` 文件夹所在位置决定了相关能力的作用范围：

- 在系统用户目录下时，作用范围是全局的；
- 在某项目根目录下时，作用范围仅限该项目内。

作用范围不支持多级嵌套。

## 目录结构

```text
.sophye/
  ├── skills/
  └── readme.md
```

### `skills/`

在 `.sophye/skills` 文件夹下存放着所有技能包：

```text
.sophye/skills/
  ├── .meta/
  └── [skill-name]/
        ├── basic.yml
        └── readme.md
```

除了 `.meta` 之外，每个子文件夹都是一个技能包，文件夹名就是技能包的名称，必须包含：

- `basic.yml`——技能包的基本信息；
- `readme.md`——技能包的详细描述。

其中，`basic.yml` 文件的内容格式如下：

| 字段 | 必需 | 说明 |
| --- | --- | --- |
| `name` | 是 | 技能包的名称，与文件夹名保持一致。 |
| `description` | 是 | 技能包的功能简介。 |
