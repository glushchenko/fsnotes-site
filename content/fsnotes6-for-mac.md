---
title: "FSNotes 6 for macOS"
date: 2022-10-30T08:52:00+03:00
draft: false
---

## All about FSNotes 6

Hello everyone, it's been a long time since the last big issue. The covid ended, the war began, I moved to Lviv, this post I am writing with no light at all. A huge series of events, among which it would seem there is no place for development. But luckily life hasn't stopped and today I am happy to present you a new major update for macOS, on which I've been working since May.

So let's start with the new features.

---

## Multiple windows

You can now open multiple notes at once, and when you close the application will remember the state of the open windows.

The preview status is now remembered too, for each note separately.

You can even open the same note in two different windows at the same time. In one window you can edit the markdown, and in the other window you can see the result of rendering in preview mode.

![](/img/fsnotes6-mac/babdc412-8141-4144-8461-f54e6319ac23.webp)

---

## Deep git integration

Honestly, this is the hardest thing I've done in my entire career. To fully integrate git I had to understand and debug in depth git, swiftgit, libgit, openssh and openssl. But it was worth it and the result was just what you'd expect.

First, you can now set up a remote repository, and do push and pull to it.

Pull is done every 10 seconds (configurable in the settings). This means that your data will always be up to date. You can even synchronize your notes from linux or windows this way.

Push is done automatically with scheduled commits, either with note commit `⌘+s` or project commit `⌘+shift+s`.

![](/img/fsnotes6-mac/38821118-aefb-433d-8cbf-42fe38a689c7.webp)

You asked about repositories in the project folder, now it is possible. All paths are allowed except the iCloud Drive folder (iCloud still does not sync .git repositories well). Or you can specify a centralized location for the repository as before.

You can also enable the option to request a "commit message". And for each commit, have a unique description.

---

## Encrypt all notes in the project (directory)

In FSNotes 6, you can encrypt all project notes in one click. It is enough to right-click on the project in the sidebar and select the appropriate menu item.

If you move an unencrypted note to such a folder, it will be encrypted with the project key, or you will be asked for the password if the project is already encrypted.

And if you create a new note in such a project, by default it will also be converted to encrypted and unlocked, ready for editing.

![](/img/fsnotes6-mac/89eae05c-f48b-4cae-a4f9-4a9fe387e31f.webp)

---

## Converting textbundle <-> md containers

Notes with graphical content are easy to store in textbundle containers (if you haven't enabled this format yet, I recommend doing so in the settings). Convert old notes in one click, and you'll never lose the files attached to the note. This also works the other way around, to remove the container if that format doesn't work for you.

![](/img/fsnotes6-mac/99e83e29-abf3-4bbe-b338-9c33c48bd603.webp)

---

## Sharing notes on the web

Sharing a markdown note, with all the attachments, has never been so easy. In addition to the rendered page itself with the graphics, FSNotes also attaches the markdown source code, which you can download and import in a single click. You can also share graphs, formulas or blocks of code.

Just select a note and press `⌘+option+u`.

![](/img/fsnotes6-mac/30d0048f-4644-4494-8467-0a22f94659c5.webp)

And you can also configure sharing on your own domain.

---

## Ordering folders in the sidebar

You asked, I did.

---

## TOC

I added a table of contents, which can be inserted by typing the code \{{TOC\}}

![](/img/fsnotes6-mac/ab0ef581-1465-4d5c-92cb-4411059be0c2.webp)

---

## Quick notes

It is not always necessary to open the whole program to create a note, when it is enough to call a window in which you can write data and close. The default shortcut `control+alt+shift+O`, of course it is configurable in the settings.

![](/img/fsnotes6-mac/quick_note.webp)

---

## YAML parser

This feature will appeal to anyone who blogs in hugo, octopress and others. In the new version FSNotes headers are parsed and look great in preview, also syntax highlighting works.

---

## And much more

- Added visibility inheritance for subfolders
- Added ability to upload more folders
- Added button to reset font in preferences
- Updated mermaid library
- Added option to disable link highlighting
- Added new icons
- Added path setting for Recycle Bin

More than 50 bug fixes, see the beta logs on GitHub ;-)