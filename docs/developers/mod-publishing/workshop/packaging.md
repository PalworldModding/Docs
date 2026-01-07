---
sidebar_position: 2
---

# Packaging

## Palworld Mod Uploader

Before we get started, we'll need to download `Palworld Mod Uploader` which should be available in your Steam Library if you own Palworld. Search for Palworld in your Library and you should be able to find it.

![](assets/library_search.png)

Once you have finished downloading the tool, launch it.

![](assets/mod_uploader.png)

1. **Workshop Content Directory:** This is where your workshop items will be stored and by default it will be located in `C:\Program Files (x86)\Steam\steamapps\workshop\content\1623730`. If the path cannot be detected, you can manually set the path by clicking the `...` button between the path and Reload button. You might also have to manually create the `1623730` folder which is Palworld's Game ID.

2. **Reload:** This lets you refresh the contents inside the Workshop Content Directory, for example if you manually added a new folder in there while the Mod Uploader was open.

3. **Mod Information:** This is where you'll be able to fill in the metadata for your mod, we'll come back to this later in this guide.

4. **Create New Mod:** When you want to initialize a new mod, you want to start by pressing this button.

5. **Guide:** This is the official guide in the Palworld Mod Uploader repository on GitHub.

## Creating a Workshop Mod

Now that we have the basics out of the way, let's look into setting up a mod that we can upload to the workshop. This assumes you have a mod ready that you want to upload.

1. Click `Create a Mod` and a popup will appear asking you what type of mod you want it to be. You can select multiple, for example if your mod utilizes Lua+LogicMod you can select Lua and LogicMods or if it's a PalSchema mod that utilizes custom content from a Pak, you can select Paks+PalSchema.

![](assets/select_mod_type.png)

If the mod creation succeeds, a new folder with numbers is created which is your workshop item's id and the folder will automatically open up in File Explorer. You should now have the following items in your new folder:

- `Info.json` which is the file that contains metadata about your mod like Mod Name, Author, Version, InstallRules and more.
- `thumbnail.png` which is the thumbnail for your mod on the workshop (File size must be under 1MB, otherwise you will get the error `k_EResultLimitExceeded` when trying to upload)
- A folder for the selected type (Scripts/, Paks/, LogicMods/, PalSchema/)
- `.workshop.json` contains tool metadata. Stores the Published ID and the last uploaded Version (You shouldn't modify this file yourself)

If you want to change the mod type afterwards, don't worry! You can change this in either the Mod Information section that was covered in the [Palworld Mod Uploader](#palworld-mod-uploader) section or you can edit the Info.json directly.

:::warning
When developing your mods, changes made in the workshop folder are currently not reflected in-game. You'll need to make your changes inside `Palworld/Mods/NativeMods/UE4SS/` (Lua/PalSchema/C++ Mods) or `Palworld/Pal/Content/Paks/` (LogicMods/Pak Mods) and then move those modified files into your workshop folder when you're done.
:::

## Packaging

Now we can get to the packaging process which is fairly simple. We'll split each mod type into its own section.

### Lua (Scripts)

Note that C++ mods are also supported under the same category (Lua).

When you create a Lua (Scripts) mod, you'll get a `Scripts` folder in which you will have a template `main.lua` file. Everything inside the `Scripts` folder will be packaged with your mod in case you have utility scripts that your mod requires. Lua mods are downloaded into `Palworld/Mods/NativeMods/UE4SS/Mods/YourModName`.

For C++ mods, you'll want to create a `dlls` folder and place your mod's dll file inside it and make sure it's called `main.dll`. You can delete the `Scripts` folder if it's purely a C++ mod.

You should not package an `enabled.txt` file, because Palworld's own Mod Manager will handle enabling/disabling the mod.

![](assets/scripts_folder.png)

### Paks

When you create a Pak mod, you'll get a `Paks` folder in which you will place your `.pak` mods. When a user downloads your Pak mod, the `.pak` files will be downloaded into `Palworld/Pal/Content/Paks/~WorkshopMods/YourModName`.

![](assets/paks_folder.png)

### LogicMods

This is essentially the same as [Paks](#paks), except you'll have a `LogicMods` folder instead of a `Paks` folder. Download location will still be the same LogicMods location as before which is in `Palworld/Pal/Content/Paks/LogicMods`.

![](assets/logicmods_folder.png)

### PalSchema

When you create a PalSchema mod, you'll get a `PalSchema` folder in which you'll be putting folders such as `blueprints`, `raw`, `translations`, `items`, etc. directly.

PalSchema mods are downloaded to `Palworld/Mods/NativeMods/UE4SS/Mods/PalSchema/mods/YourModName`.

![](assets/palschema_folder.png)

![](assets/palschema_example.png)

## Mod Information

Once you have packaged your mod files into their respective folders, you'll have to fill in the mod information before uploading it to the workshop.

![](assets/mod_information.png)

1. Thumbnail of your mod which you can change by clicking on the image or by dragging another image into it. By default it is a picture of a Pengullet with a hammer. Make sure your thumbnail's file size is less than 1MB or you'll get the `k_EResultLimitExceeded` error when uploading your mod to the workshop.

2. **Mod Name:** This is the name it'll show on its workshop page after you've uploaded the mod. `MyAwesomeMod` by default.

3. **Package Name:** This will be the folder name of the mod when it is installed by users. Make sure it only contains alphanumerics and do not add spaces! `MyAwesomeMod` by default.

4. **Version:** Used to determine if there's an update available to the mod. Make sure to increment this each time you update something in your mod before uploading the changes. You don't need to increment this if you're just changing the thumbnail for example.

5. **MinRevision:** You don't need to touch this generally.

6. **Author:** This will be your Steam name by default, you shouldn't need to change it.

7. **Install Rule Types:** This is where you can change the type of your mod, for example if you had a PalSchema mod, but later you decide that you want it to also contain a `.pak` file, you would tick the `Paks` checkbox.

8. **Dependencies:** This is where you can setup dependencies for your mod based on the current mods you have created or downloaded like for example UE4SS.

There are also Tags at the bottom which should be self-explanatory, they're used to search for mods that have those tags.

Once you're done making your changes, make sure to click `Save Info.json`.

## Uploading

Now that you have everything done, you're ready to upload your changes to the Workshop! Note that when you click the `Create a Mod` button, it doesn't only create a mod folder for you, but it also uploads it to the Workshop with hidden visibility meaning only you can see the mod until you make it visible.

So basically when you click the `Upload To Steam` button, it updates the mod on the workshop so this button can also be used to push updates.

Once you begin uploading your mod, it asks you to provide change notes which you can leave empty if you're uploading the mod for the first time. Typically it's a good idea to keep each change concise, for example:

```
- Added more skin variations for Chillet.
- Fixed Cattiva spinning in place when a custom skin is applied to it.
- Removed unnecessary double confirmation window when applying a skin.
```

![](assets/changelog.png)

Hit **OK** and the upload process should now start. Once the uploading has finished, it should open up the workshop page for your mod automatically.

You'll probably see something about your workshop item awaiting analysis. This is a process everyone goes through whenever you update anything in your mod, be it description or the actual files. This shouldn't typically take longer than a minute depending on the type of your mod.

Notice that the visibility is automatically set to Hidden by default for new workshop items. This allows you to test your mod locally before making it public for everyone to download!

![](assets/workshop_notice.png)

You'll have access to a bunch of controls, most of which should be self-explanatory, but you'll probably care most about the `Add/Remove Required Items` and `Change Visibility`:

- **Add/Remove Required Items:** This is where you can setup dependencies for your mods like UE4SS for example. You might have to change this yourself manually on your workshop page since I've noticed that the `Dependencies` section in the Mod Uploader Tool doesn't seem to reflect the changes on your workshop page currently.

- **Change Visibility:** Once you're ready to go public, this is where you can make your mod available for everyone OR you can set it as friends only or even hidden/unlisted if you prefer to keep it private anyway.

![](assets/workshop_page.png)

## Final Notes (Important)

Make sure that you instruct users on how to enable mod support and specifically how to enable your mod since currently the mod support in Palworld is opt-in.

You should put the instructions in your description. Here's a template that you can reference:

```
[h1]Important[/h1]
After you subscribe to the mod, do these steps to enable the mod:

1. Launch the game and wait until you get to the title screen.
2. Go to Options > Mod Management and make sure [b]Enable Mod[/b] is set to [b]ON[/b].
3. Make sure the checkbox next to (MOD NAME HERE) is [b]CHECKED[/b]
4. Click the blue [b]Save[/b] button and the game will now restart.
5. Once the game starts up again, (MOD NAME HERE) should now be enabled.
```

The template utilizes formatting to make it look prettier, but you don't have to use formatting if you don't want to and you don't have to copy the template 1:1, it's just to give an idea. I still recommend leaving a notice of some kind for users, because otherwise you will get a lot of comments saying the mod doesn't work.

Basically put a short description of what your mod does as the first line and then after it, put the instructions and after that you can place whatever else.

**Now to explain why:** When someone hovers over your mod on the search page, it will show the first few lines of the description which should be the lines describing your mod. Having the instructions after that short description will make it easier for them to spot them when they first open up your workshop item's page.

That should be everything, now go upload some mods!

## Useful Resources

[Steam Text Formatting Guide](https://steamcommunity.com/comment/Recommendation/formattinghelp)