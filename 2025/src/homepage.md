# Ghost Hunter 中微子数据分析排位赛

- 赛事平台
  - [赛事主页 | Ghost Hunter Homepage](https://ghosthunter.thudep.com/2025)
  - [得分排行 | Ghost Hunter Leaderboard](https://gh-leaderboard.thudep.com)
  - [代码平台 | Ghost Hunter Gitea](https://ghgit.thudep.com)
  - [训练数据 | Ghost Hunter Files](https://ghfile.thudep.com:7200)
  - [状态监控 | DEPSAST Upptime](https://status.thudep.com)
  - [赛事主页2024 | Ghost Hunter Homepage 2024](https://ghosthunter.thudep.com/2024)
- 赛事背景
  - [Ghost Hunter 邀请函](./data/invite.md)
  - [赛事介绍与报名](./data/intro.md)
- 赛事信息
  - [比赛题目: JUNO probe](./data/gh2025.md)
  - [日程安排](./data/schedule.md)
  - [评分方式](./data/scoring-method.md)
- 赛事培训
  - [宣讲会](./data/briefing.md)
  - [probe函数](./data/probe.md)
  - [培训会](./data/training.md)

# 重要通知

## 初赛通过队伍名单公布

初赛通过队伍名单如下, 排名仅供参考, 与决赛得分及排名无关. 如果对该名单有疑问, 可以在选手群里或私信指出.

| 序号  | 队伍名          | 初赛最高分数            | 最高分数获得时间            |
| --- | ------------ | ----------------- | ------------------- |
| 1   | CLW          | 91.43037258731748 | 2025-12-08 18:45:05 |
| 2   | 请输入文本        | 90.41829631892054 | 2026-01-04 13:58:56 |
| 3   | 终极猎手         | 90.04325384444746 | 2026-01-01 12:04:05 |
| 4   | 缪子           | 89.34805761228945 | 2025-12-30 09:29:18 |
| 5   | 无            | 88.79165540112665 | 2025-12-03 22:38:47 |
| 6   | IamBack      | 84.50138061472286 | 2026-01-04 18:40:12 |
| 7   | 509A         | 83.30309476773981 | 2025-12-21 23:19:33 |
| 8   | 魔丸杀手         | 81.29380342492064 | 2025-12-18 14:18:09 |
| 9   | YUDE         | 81.0211566308572  | 2025-12-26 12:44:47 |
| 10  | sukisukisuki | 73.48975823262089 | 2026-01-03 21:05:22 |

## 数据集更新

由于测试集出现负数时间的问题, 我们已经更新了所有的数据集以及测试集.

在新的训练集中, 删除了 `ParticleTruth` 这个 dataset 中的 `Ek` 与 `Evis` , 删除了 `PETruth` 这个 dataset 中的 `LightTime` . 如果您在之前的代码中使用了这些数据, 需要删除掉相关部分.

在新的数据集中, 顶点数没有发生变化, 但是 PE 事件数有所增加, 这会导致您的分数明显下降(大约会降到 40 分左右), 我们会根据未来一周内（到 1.25）选手的代码整体表现, 调整决赛阶段的分数映射函数. 届时将统一调整, 不影响当前阶段的代码提交.
