---
title: "FSNotes 7 for macOS and iOS"
date: 2026-01-19T21:45:00+03:00
draft: false
---

# FSNotes 7.0.0 Release Notes

<p>Hi, friends!</p>

<p>A huge amount of work has gone into FSNotes 7. The editor has been sped up, the code highlighting engine has been rewritten, even more attention has been paid to the UI, and many other things you asked for made it into this release:</p>

<p style="text-align: center; margin: 50px 0">
    <img src="/img/fsnotes7/FSNotes7_macOS_iOS.webp" style="display: inline; margin: 0 auto; width: 600px; max-width: 600px"/>
</p>

**Release Date:** January 19, 2026 

**Platforms:** macOS 12+, iOS 18+  


## New Features

### Search & Navigation
- Search in selected view (#1761)
- Search in preview mode (#1012)
- Search within notes on iOS (#1532)
- Use selection as find in preview (#528)
- Show match count in search results (#819)
- Shortcut to search for title of current note/backlinks (#1539)

### UI/UX
- Sidebar frosted glass background (#1840)
- Allow wider sidebar for macOS (#1738, #1419)
- Swipe to delete notes on macOS (#1696)
- Improved default line spacing and preferences UX (#887)
- Larger line spacing for todo items (#1579)
- Maintain document position when toggling edit/preview mode (#1756)

### Editing
- Keyboard shortcuts to move lines (#1186)
- Delete completed tasks (#1209)
- Apply italic formatting using asterisks instead of underscores (#841, #592)
- Clickable autolinks (#1413)
- Fixed undo/redo (#1445)
- Context-aware word autocomplete (#499)

### Statistics
- Word and character count (#1475, #314)

### Links & Files
- Linking files using relative paths (#1754)
- Support for local file links (#544)
- Allow dragging from note list to other applications (#1360)

### Git Integration
- Menu items for git pull & push (#1670)

### Tags
- Multiple tag selection with AND logic (#1077)

### URL Schemes
- Specify folder in URL scheme (#1468)
- Find or Create action (#1467)
- Open created note in new window option for fsnotes://new (#1508)
- New URL schemes for Add and Append (#697)

### Clipboard
- Shortcut to copy note to clipboard (#303)

## Bug Fixes

### Critical
- Repeated crashing upon typing (#1838)
- Slow text entry on medium-sized files (#1855)
- Notes in list showing same name until clicked (#1852)

### UI/Visual
- Unexpected sort order by title (#1841)
- Code wrapping in preview mode (#1178)
- Mermaid text low contrast in dark mode (#1068)
- Text formatted with Code Span shows black background in preview (#1780)
- Emoji line height (#1788)
- Header font-weights previewed in edit mode (#1764)
- Dark theme breaks after changing notes color (#1435)
- Note list preview blank on old entries (#1844)

### Settings & Behavior
- Better default for "Hide FSNotes when activating another application" (#1175)
- Inconsistent keyboard shortcuts for locking (#1674)
- Un-unpinnable note (#1794)
- Settings reset if storage folder is deleted (#1835)

### iOS
- iPhone SE keyboard covers settings text fields (#1849)

### Performance
- Long paragraphs lead to sluggish editing (#1086)

### macOS
- Application crashed after folder renaming (#1785)


## Key Improvements
1. Performance optimizations for large files and long paragraphs
2. Enhanced search capabilities across all modes
3. Improved UX with expandable sidebar and position preservation
4. Extensive URL scheme integration
5. Numerous stability and visual fixes

## Acknowledgments
Many features in this release are based on community requests, some dating back to 2018-2019.

---

Note: These release notes are based on milestone v7.0.0 as of January 19, 2026. 