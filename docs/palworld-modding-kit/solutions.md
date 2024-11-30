---
sidebar_position: 5
---

# Issues & Solutions

## Solutions for any issues that may occur.

### Pal could not be compiled. Try rebuilding from source manually.

![Pal could not be compiled](./assets/CouldNotBeCompiled.png)

This is an error that you'll get when trying to launch the Modding Kit if you're missing things. This is a generic error, but luckily we can use the Pal.log file found in Saved/Logs folder of the Modding Kit to determine what's causing the issue! Here's a list of the errors you might get and how to fix them:

#### Detected compiler newer than Visual Studio 2022, please update min version checking in WindowsPlatformCompilerSetup.h

Solution found by **GungnirIncarnate**

Go to Visual Studio Installer -> Modify -> Individual Components and add “MSVC v143 - VS 2022 c++ x64/x86 build tools (v14.38-17.8)”
You can confirm if it’s installed the correct one by going to the VS install path and seeing if the folder is there (C:\Program Files\Microsoft Visual Studio\2022\Enterprise\VC\Tools\MSVC\14.38.33130)
Change your “%appdata%\Unreal Engine\UnrealBuildTool\BuildConfiguration.xml” to
```
<?xml version="1.0" encoding="utf-8" ?>
<Configuration xmlns="https://www.unrealengine.com/BuildConfiguration">
    <WindowsPlatform>
        <CompilerVersion>14.38.33130</CompilerVersion>
        <ToolchainVersion>14.38.33130</ToolchainVersion>
    </WindowsPlatform>
</Configuration>
```