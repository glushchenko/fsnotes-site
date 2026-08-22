---
title: "FSNotes 6 for iOS"
description: "Archived release notes for FSNotes 6 for iOS, including a new design, Git versioning, encrypted folders, editor improvements, and web sharing."
date: 2023-05-27T18:23:15+03:00
draft: false
---

## Meet FSNotes 6 for iOS!

### New design

The biggest design change in the history of the program. The new FSNotes adheres even more to Apple's human interface guidelines. Branded icons, menus, toolbars, headers, animations and smooth transitions. Everything has become closer to the familiar Apple system programs.

I want to give a huge thanks to my friend Dylan Seeger for his valuable advice. Thanks to his ticketing, you see this update like this.

<div class="content_image_row">
    <img src="/img/fsnotes6-ios/s1x.webp" class="image_medium" alt="FSNotes 6 interface on iPhone"/>
    <img src="/img/fsnotes6-ios/s2x.webp" class="image_medium" alt="FSNotes 6 note editor on iPhone"/>
</div>

---

### Versioning with git

The last version added versioning, but I didn't think it was enough. Therefore, meet git! If you are a programmer, you probably know what it is, but if you don't, you can learn about it here: https://en.wikipedia.org/wiki/Git.

You can create a git repository for each folder and commit your notes and send the changes to your server.

Changes are pulled up when the app activates and you can also set it to do it every 30 seconds automatically.

<div class="content_image_row">
    <img src="/img/fsnotes6-ios/git-icon.webp" class="image_icon" alt="Git repository icon in FSNotes"/>
</div>

---

### Encrypted folders

Folder encryption appeared in the desktop program a year ago, now I'm adding the same feature in the mobile version as well. The first step you should take is to set a master password in the settings.

Then continue to each folder specifically by selecting it in the sidebar with a long press or in the navigation menu.

The selected folder with all the notes will be encrypted with AES-256.

<img src="/img/fsnotes6-ios/encrypt.webp" class="image_medium" alt="Encrypted folder settings in FSNotes for iOS"/>

---

### Application icons

The old icon by Roman Kliuchkovych was beautiful, but time is of the essence, for the sixth version the new icon was drawn by Dylan Seeger. You can find his website in the settings!

I often use the main wallpaper color black, so there is also an all-black version. Mine is set to look like this::

<img src="/img/fsnotes6-ios/icon.webp" class="image_medium" alt="FSNotes 6 application icons"/>

---

### Improvements in the editor

Even more actions are available directly within the editor, thanks to the new toolbar you can now quickly create a new note or go to search on the main screen.

<img src="/img/fsnotes6-ios/toolbar.webp" class="image_medium" alt="FSNotes editor toolbar on iPhone"/>

---

### Web sharing

Sometimes there is a need to quickly share a note. However, not everyone has markdown-enabled editors, much less textbundle. For this purpose, I have added publishing to the web. With a long click on a note in the list, bring up the context menu and select the "Create Web Page" menu item.

The note will open in your browser and the link will be copied to your clipboard. So far there is no heavy load and I have not deleted the notes, but over time I think they will be temporary, with a shelf life of 1 month.

<img src="/img/fsnotes6-ios/ipadwpc.webp" class="image_wide" alt="Creating a web page from an FSNotes note"/>

--- 

### Soulver core

In collaboration with Zac Cohan, SoulverCore syntax has been added. This calculator now displays in Preview mode. Read more about its functions here: https://github.com/soulverteam/SoulverCore#getting-started

### Fixes

Earlier there were some problems with encryption of folders, app crashes, and previewing notes. All of this has been fixed.

New bugs may have been added, of course.

-- Oleksandr, Kharkiv, Ukraine
