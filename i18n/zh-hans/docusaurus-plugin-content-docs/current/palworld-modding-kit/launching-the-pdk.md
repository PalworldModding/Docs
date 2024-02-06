---
sidebar_position: 3
---

# Launching The PDK - Part 3

## After doing all of those steps, we are ready! 

## Double-click the `Pal.uproject` file and it should open in Unreal Engine!


:::note
If it tells you that modules are out of date and need to be recompiled, press **YES**
:::

:::warning
Windows REALLY hates long file paths. **If it continues to tell you that modules need to be recompiled, your file path may be too long.**
This will be especially true if you downloaded the ZIP instead of using git clone. Try renaming the
`palworldmoddingkit` folder, and removing the `-` and everything after it. You can also try moving it closer to the root
of your drive.
:::

:::warning
Wwise will complain about not being compatible with the current Unreal Engine version every single time you start, click **YES**
:::

:::warning
If the file doesn't open in unreal engine and instead asks you for associations, open Unreal Engine, and open the file from there instead
:::

:::note
You may see a popup on launch about Wwise project path issues, ignore it and press the X in the corner to close the popup.
![WwisePathIssue](./assets/ResetWwisePath.png)
:::

:::danger
You may think nothing is happening, Unreal Engine has to compile a lot of things in the background before the editor opens. This may take a LONG while depending on your computers specifications.
:::
