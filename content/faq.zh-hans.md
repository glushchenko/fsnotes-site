---
title: "常见问题"
seo_title: "FSNotes 帮助 — 存储、备份、同步与故障排除"
description: "关于 FSNotes 笔记存储、备份、启动问题、功能建议和平台支持的常见问题。"
date: 2026-02-08T22:21:00+03:00
lastmod: 2026-08-22T00:00:00+03:00
draft: false
---

### 1. 我的笔记去哪了？打开应用后资料库是空的。

FSNotes 直接使用您选择的文件夹，不会另外保存一份隐藏的笔记副本。如果应用显示空资料库，您的文件通常仍然位于原来的位置。

请先确认 FSNotes 选择了正确的存储文件夹。如果文件夹位于 iCloud Drive，请确认文件已经下载到当前设备。如果文件夹位于外置硬盘，请重新连接硬盘，然后再次打开 FSNotes。

建议为重要笔记保留一份独立备份。FSNotes 可以创建基于 Git 的备份，但需要提前完成配置才能发挥作用。

### 2. FSNotes 无法启动，该怎么办？

很抱歉给您带来不便。非常大的资料库或存在问题的文件，有时会导致 FSNotes 无法正常启动。

请尝试暂时把存储文件夹中的内容移到其他位置，然后重新启动 FSNotes。如果应用可以打开，请分批放回笔记，以便找出引起问题的文件或文件夹。您也可以尝试[重置 FSNotes 偏好设置](https://github.com/glushchenko/fsnotes/wiki/Preferences-location)。

如果问题仍然存在，请[在 GitHub 提交 Issue](https://github.com/glushchenko/fsnotes/issues)，并附上 FSNotes 版本、操作系统版本以及启动时的具体情况。

### 3. RTF 支持和横向笔记列表会恢复吗？

FSNotes 7 专注于纯文本和 Markdown 工作方式，当前的笔记列表布局也是这一方向的一部分。目前没有恢复 RTF 支持和横向笔记列表的计划。

我们理解部分长期用户更喜欢以前的使用方式，也欢迎继续提供反馈，但无法保证旧版本中的每项功能都会回归。

### 4. 我希望增加一个新功能，什么时候会实现？

FSNotes 由一个小团队维护，因此稳定性、性能和现有功能通常优先于扩展开发路线。我们会阅读功能建议，但无法承诺某个想法是否或何时实现。

提出建议的最佳位置是 [GitHub Discussions](https://github.com/glushchenko/fsnotes/discussions)。FSNotes 是开源项目，也欢迎经过充分测试的 Pull Request。您还可以 Fork 项目，根据自己的工作方式进行调整。

### 5. 我有一个想法，应该在哪里分享？

请在 [GitHub Discussions](https://github.com/glushchenko/fsnotes/discussions) 分享产品建议。一般问题和交流也可以加入 [FSNotes Telegram 群组](https://t.me/fsnotesapp)。

我们会阅读并认真考虑所有反馈，但不一定能够逐一回复。感谢您帮助 FSNotes 变得更好。

### 6. FSNotes 是否完整支持 iPad 功能？

目前的 iPad 版本不会获得专门针对 iPad 的功能，例如完整的键盘快捷键或多窗口支持。当前开发重点是 macOS 和 iPhone。

现有 iPad 版本仍可在 App Store 下载，但建议在购买前确认其当前功能是否满足您的需求。

---

最后更新：2026 年 8 月 22 日
