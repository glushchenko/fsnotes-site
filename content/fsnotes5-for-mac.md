---
title: "FSNotes 5 for macOS"
date: 2022-05-23T18:23:15+03:00
draft: false
---

## All about FSNotes 5

Hello again! Almost two years have passed since the last major release, time flies by. Last summer, I pulled up FSNotes for iOS, and now it's the turn of the macOS version of the program. A lot of work was done between 4 and 5, but for now I will focus on the innovations of the five.

The interface of the program has not changed much, but inside this update at least half a hundred bugs have been fixed. Attribute caching makes switching between notes even smoother, and new features will not give a reason to return to the old version of the program.

---

## Folder tree

My good friend Matt Sephton created a GitHub issue back in 2018, I think you guessed... Yes, I'm talking about the folder tree in the sidebar. As you know, 'Three years is not too long to wait for what is promised', so get it and sign :) <a href="https://github.com/glushchenko/fsnotes/issues/188">https://github.com/glushchenko/fsnotes/issues/188</a>

![](/img/fsnotes5-mac/1.webp)

The root folder is displayed with a simple title, and can be changed in the settings, as before. If it's iCloud Drive, then for the GitHub version, the label is now also localized. If not, then the default name will be Documents.

---

## Accent colors

It seems to me that the system function was added back in macOS Mojave, now the entire color palette is available in FSNotes.

![](/img/fsnotes5-mac/2.webp)

A lot of work has been done to put in order the selected rows of the table and those on which the focus is set.

![](/img/fsnotes5-mac/4.webp)

Tags are also colored with new colors (available in macOS BigSur and higher).

---

## Printing documents with images

I kept waiting for Apple to fix WKWebView so that it would be possible to humanly print documents. But nothing has changed in macOS Monterey, and I decided to use the old API from WebView.

![](/img/fsnotes5-mac/5.webp)

Now printing user manuals will be more convenient, and images are fully supported.

---

## Tags

Tags experienced many transformations, from storing files in metadata, to inline text that has proven itself well. There was not only flexible management.

1. In the sidebar of FSNotes 5, actions have appeared, thanks to which you can rename or remove tags from all documents in a couple of clicks:

![](/img/fsnotes5-mac/6.webp)

2. It would not be interesting to select one tag, so I added the ability to batch select not only for deletion, but also for renaming. Select ten tags, rename to one.
3. Added "Untagged" smart tag in the sidebar header. This can be useful for cataloging a large number of documents. However, if you do not need it, you can always disable it in "View -> Show in sidebar".
4. In macOS BigSur and above, the tag is highlighted with an accent color from the system settings, it looks like this:

![](/img/fsnotes5-mac/3.webp)

5. Fixed a bunch of bugs related to deselect by clicking on tags, I think you will like the polished new version.

The name of the directory in which the document being used is located has been added to the program header.

Removed the smart tag Inbox and Notes, by default the program displays all notes. You can hide unnecessary documents from the search and the general list in the directories settings, as before.

And there was also an opportunity to use old queries from the search, for this you can click on the magnifying glass in the search bar or just double-click `cmd - L`.

![](/img/fsnotes5-mac/7.webp)

---

## Shortcuts

Previously, you could not override shortcuts for navigating between notes and directories. Now you can in the View menu:

![](/img/fsnotes5-mac/8.webp)

If you select text in the editor and press `cmd - x`, you can cut the entire line at once without selecting the text.

To quickly navigate between smart tags in the sidebar, you can use the shortcuts `ctrl - 1...5`

Improved navigation between sidebar, note list and editor. Controls are available with arrows or as before `return` or  `cmd - return`

To forcefully delete notes bypassing the basket, a shortcut is added `ctrl - cmd - delete`

---

## Other little features

- For tags you can use the '
- Now long paragraph indents are generated correctly for lists, numbered lists, quotes and tasks
- Fixed syntax highlighting for repeated underscores
- Fixed highlighting during search
- Added new default note names Untitled Note and timestamp
- Fixed indents and crashes with help `cmd - [ and ]`
- Added text alignment <a href="https://github.com/glushchenko/fsnotes/issues/311">using tabs</a>
- Fixed file names when creating duplicates
- Fixed saving themes for code highlighting
- Improved search and its auto-completion
- Now you can drag a note from the list of notes to the external editor, this will create a link to the note
- Fixed clicks creating phantom tasks
  
And much more, you can see the full list of changes in the list of releases with the tag <a href="https://github.com/glushchenko/fsnotes/releases">5beta</a>
