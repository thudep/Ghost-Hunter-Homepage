# 通知

## 邮件列表和赛事平台帐号的创建

由于始终有部分同学没有填写邮箱，我们决定采用 GitLab Oauth 来注册帐号。没有清华邮箱的同学请私戳我或者张珺铫来手动创建帐号。

<!-- 请大家在共享文档内填写自己的邮箱, 便于邮件列表和git平台的创建. 没有分组的同学最近也可以开始找队友了. 共享文档链接如下: [腾讯文档-Ghost Hunter 比赛报名分组表](https://docs.qq.com/sheet/DWHpTQ2xlbGlKdllz?tab=v0p8dq) -->

## 数据集的变更

由于在 Debian12 环境下安装 parquet 依赖对选手太过复杂，我们决定将数据集的格式从 parquet 改为 hdf5。请大家重新下载数据集。具体的 diff 如下:

```diff
赛题是这样的, 我们已经有了足够好的模拟数据作为训练集, 你需要用这些训练集, 得到一个probe函数.

- 每个训练集包含10000个顶点, 其格式为:
+ 每个 `h5` 文件包含 **`ParticleTruth`** 以及 **`PETruth`** 两个 **dataset**, 其格式为:
+ **`ParticleTruth`**
+ 包含 10000 个顶点.

- h5文件中的`ParticleTruth` 表
| 名称      | 说明     |
| --------- | -------- |
| `EventID` | 事件编号 |

@@ -18,13 +21,14 @@ h5文件中的`ParticleTruth` 表

注: 顶点可见能量是指顶点沉积并且用来发光的能量.

- parquet文件中的
+ **`PETruth`**

| 名称        | 说明                |
| ----------- | ------------------- |
- | `evtID`     | 事件编号            |
- | `pmtID`     | PMT 编号            |
- | `hitTime`   | PE 击中时间/ns      |
- | `lightTime` | 光子被发出的时间/ns |
+ | `EventID`   | 事件编号            |
+ | `ChannelID` | PMT 编号            |
+ | `HitTime`   | PE 击中时间/ns      |
+ | `LightTime` | 光子被发出的时间/ns |

几何文件`geo.h5`, 其格式为:
```
