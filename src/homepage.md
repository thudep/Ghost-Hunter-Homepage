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

# 重要通知

<!-- toc -->

## 邮件列表建立

Ghost Hunter 2024 的邮件列表正式建立，重要的通知也会依托邮件列表为大家群发邮件。邮箱的信息是从gitea直接导出的，如果无法收到邮件请直接在群里提出，我们会手动添加。

鉴于小学期有邮件被清华邮箱拦截的先例，建议大家为域名 l.airelinux.org 或者发件人 gh@l.airelinux.org 添加白名单

## 评分函数修复与初赛延迟

我们确认评分函数出现问题, 且已经进行修复, 具体可见[721b5e1](https://ghgit.thudep.com/committee/Ghost-Hunter-JUNO-probe/commit/721b5e1acafd8df7903bbedbb4ee9df4089d4c77)

我们将在12月2日(周一)晚上向各位选手的仓库推送一个 patch, 这可能会导致本地仓库与远程仓库冲突, 如果有问题可以在选手群里提出并寻求帮助

之前的错误的评分将会被从数据库中删除, 有发现分数消失的队伍, 可以尝试在12月3日(周二)再次提交

因为评分函数故障, 我们的初赛时间延迟到这周五(12月6日)晚上23:59

## ssh clone 修复

ssh clone 服务修复了, 位于 ghssh.thudep.com:3322, 选手可以在 ~/.ssh/config 添加以下配置来使用, 也可以在clone的时候手动指定 3322 端口

```config
Host ghssh.thudep.com
    Hostname ghssh.thudep.com
    Port 3322
    User git
```

## Makefile 的提醒

为了让大家在技术培训的时候更快的得到结果, 我们精简了数据集, 将 Makefile 第 20 行的 `seeds:=$(shell seq 16001 16020)` 改为 `seeds:=$(shell seq 16001 16001)`, 在自行使用代码的时候可以改回来。

## 数据集的变更

由于在 Debian12 环境下安装 parquet 依赖对选手太过复杂, 我们决定将数据集的格式从 parquet 改为 hdf5。请大家重新下载数据集。具体的 diff 如下:

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
