# Ghost Hunter 中微子数据分析排位赛

- 赛事平台
  - [赛事主页 | Ghost Hunter Homepage](https://ghosthunter.thudep.com)
  - [得分排行 | Ghost Hunter Leaderboard](https://ghosthunter.thudep.com/leaderboard)
  - [代码平台 | Ghost Hunter Gitea](https://ghgit.thudep.com)
  - [训练数据 | Ghost Hunter Files](https://ghfile.thudep.com:4433)
  - [状态监控 | DEPSAST Upptime](https://status.thudep.com)
- 赛事背景
  - [Ghost Hunter 邀请函](./data/invite.md)
  - [赛事介绍与报名](./data/intro.md)
- 赛事信息
  - [比赛题目: JUNO probe](./data/gh2024.md)
  - [日程安排](./data/schedule.md)
  - [评分方式](./data/initial-heats-and-final-round.md)
- 赛事培训
  - [第一次培训: 赛事宣讲会和数据集简介](./data/briefing-and-data-set.md)
  - [第二次培训: 基础技能 & 代码讲解](./data/basic-skills-and-code-analsis.md)
- 赛事讨论
  - [第一次 workshop: 赛事讨论与分享](./data/first-workshop.md)
  - [第二次 workshop: 赛事讨论与分享](./data/second-workshop.md)

# 重要通知:  ssh clone 修复 | Makefile 的提醒 | 数据集的变更

## ssh clone 修复

ssh clone 服务修复了, 位于 ghssh.thudep.com:3322, 选手可以在 ~/.ssh/config 添加以下配置来使用，也可以在clone的时候手动指定 3322 端口

```config
Host ghssh.thudep.com
    Hostname ghssh.thudep.com
    Port 3322
    User git
```

## Makefile 的提醒

为了让大家在技术培训的时候更快的得到结果，我们精简了数据集，将 Makefile 第 20 行的 `seeds:=$(shell seq 16001 16020)` 改为 `seeds:=$(shell seq 16001 16001)`，在自行使用代码的时候可以改回来。

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
