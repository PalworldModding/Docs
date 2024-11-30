# How to Contribute

So you want to contribute to the Modding Docs? Awesome! Here's a quick rundown on how to get started.

## Requirements

[NodeJS](https://nodejs.org/en/download/prebuilt-binaries) - **Required for running the Docs site locally as it uses Docusaurus.**

These below are more just recommendations and you can use normal GitHub CLI if you'd prefer or any other code editor, but if you're getting started then get these.

[GitHub Desktop](https://github.com/apps/desktop)

[Visual Studio Code](https://code.visualstudio.com/)

## Setting up GitHub and a local repository

1. Create a GitHub account.

2. In the main [Docs](https://github.com/PalworldModding/Docs) repository, you'll see a Fork button at the top,
click it and it'll create your own copy of this repository which you'll be using to make changes to the Docs.

![fork](https://github.com/user-attachments/assets/04642a01-be12-45d0-bc9e-3a4df005de8c)

3. You should now own a copy of the repository which will be located in `https://github.com/YOUR_GITHUB_USERNAME/Docs`, navigate over there.

4. Next, you'll want to download [GitHub Desktop](https://github.com/apps/desktop) which handles all the complicated stuff for you. After downloading GitHub Desktop and launching the program, it should prompt you to sign in.

5. Once signed in, you want to go to File -> Clone repository... -> Select URL tab and in the first field enter the link found in Step 3 and Local path can be anywhere as long as it's an empty folder.

![image](https://github.com/user-attachments/assets/ceecd6ae-ec91-41d5-aca3-7162f4e4aceb)

6. After it's done cloning, it'll ask you "How are you planning to use this fork?", just select "To contribute to the parent project".

### Important
Whenever making contributions, make sure to create a new branch rather than making changes to the master branch directly. You can create a new branch by going to the Branch tab and selecting "New branch...". Preferrably make the branch name related to what you're planning on contributing. For example if you wanted to contribute updates to the Game Data section with new pal entries: `pal-data-update` (Notice no spaces).

## Making changes to the Docs

Now that you have everything setup, you can get started with making changes to the Docs.

1. Navigate to the Docs folder where you cloned your files to in Step 5, you should see a bunch of files and folders like src, docs, package.json and so on.

![image](https://github.com/user-attachments/assets/5dfa071d-cac6-4733-b7c2-04d8223afe2f)

2. Assuming you've already installed NodeJS, open a command prompt by clicking on the path and typing `cmd`. [Tutorial](https://www.lifewire.com/open-command-prompt-in-folder-8681085)

3. Type yarn and press Enter. After it's done setting up, type yarn start and it should eventually open a local version of the Docs in your browser which will display any changes you make in real time.

4. If you've installed Visual Studio Code already, assuming you want to create new guides or edit existing pages, these can be found inside the `docs` folder. You can right click on the `docs` folder and select `Open with Code` which will open all of the files in there in your code editor.

5. Pages are written in [Markdown](https://www.markdownguide.org/basic-syntax/) which is the files ending in `.md`. On the left side of Visual Studio Code, you'll see different categories like `asset-swapping` or `game-data`. These are folders that determine the categories you see on the sidebar on the Docs site via the `_category_.json` file in those folders.

![image](https://github.com/user-attachments/assets/58ac5743-ea3b-4945-a50f-b9d33da67b77)

6. You can create a new page by creating a new `.md` file in one of these folders depending on what you're planning to add or you can create a new category if nothing matches what you're planning to add. To create a new file with Visual Studio Code, just right click one of the categories and select "New File..." and call it `mypagename.md` where mypagename is whatever you want to call it.

You might notice as you're making changes to the file, the site that's open in your browser will automatically update to reflect the changes you made.

## Committing the changes and making a pull request

After you're done making your changes, you're now ready to push your changes to the main site.

1. Go back to GitHub Desktop and you'll notice you have pending changes. At the bottom, you'll see a `Commit to your-branch-name`, before clicking it, if you look above description, you'll see a text field which is the commit message. Make sure this is a short descriptive message of what your commit is adding, for example: Added item creation guide

![image](https://github.com/user-attachments/assets/48bd07b9-2a7e-486d-963c-956e0607e43d)

2. After adding your commit message, you can hit the blue `Commit to your-branch-name` button.

3. Click the blue `Publish branch` button which will publish your current branch to your forked repository.

4. You should now have an option to Preview Pull Request via GitHub Desktop, click the button and in the new window that opened, click Create Pull Request.

5. Done. Now you just wait for a maintainer of the main Docs repository to approve your changes, you don't need to do anything else!
