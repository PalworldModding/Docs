---
sidebar_position: 4
---

# Configuration

You're almost ready to begin installing mods, but before we do that, you'll want to ensure your UE4SS-settings.ini is setup properly to ensure smooth gameplay when using UE4SS on Palworld.

## UE4SS-Settings

If you remember where we installed UE4SS in the Installation guide, you can find the `UE4SS-Settings` file inside the ue4ss folder. Open it and lets get started with editing.

1. `bUseUObjectArrayCache` should be set to `false` if it is set to `true`. Having it set to `true` will cause issues with lag and stutters so it is not recommended to be enabled unless you're a developer planning on using the LiveView feature of UE4SS.

2. `GuiConsoleEnabled` and `GuiConsoleVisible` should both be set to `0` if you're just planning on playing with mods. Gui Console is only useful for mod developers and will severely impact game performance. 0 = disabled, 1 = enabled.

3. That's everything, you're now ready to install some mods!