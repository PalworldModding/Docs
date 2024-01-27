---
sidebar_position: 1
---

# Setting Things Up - Part 1

Where we left off would be Double-clicking `Pal.uproject`, You should see this screen
![PDKNewProject](./assets/NewPMKInstance.png)

## ModActor Setup

1) In your `Content Browser` If there isnt a folder named `Content` make one.
2) In `Content` make a folder called `Mods` This is where any mod we make will be at.
3) Your folder structure should look similar below. (***Ignoring dabzQOL and dabzReflex***) ![NewModStruct](./assets/ContentBrowserNewMod.png)
4) Create a folder in `Mods` with the name you want your Mod's Pak file to be called. (In this case, I'll be using dabzReflex)
5) In that folder, We will be creating a new `Blueprint Class` that is a `Actor`. It will be called **_ModActor_** ![NewModActor](./assets/NewModActor.png)
6) Now your Content Browser should look like so, next double-click your `ModActor` and make sure you are on the `Event Graph` tab ![NewActorMade](./assets/ModActorMade.png)
7) Now your ModActor is technically setup, there is some more information to know about it below though.

## ModActor Events

### Used Events
- PreBeginPlay - This event is too early to use to initialize your mod. (Only Works In Mod Actor)
- PostBeginPlay - This event is fired when the Player Controller Begin Play is called (Only Works In Mod Actor)
- PrintToModLoader - Allows the ability to log to UE4SS Console through a blueprint.
- ModMenuButtonPressed - Used to enable ModButtons in UE4SS's mod list area. (Only Works In Mod Actor)

### Unused Events

:::warning
These events shouldn't really be used!
:::

- EventBeginPlay
- EventActorBeginOverlap

![ModActorEvents](./assets/ModActorEvents.png)

## ModActor Variables

:::tip
ModActor variables are used to display information about your mod in UE4SS's loaded mod category.

They are simply just variables added to your blueprint, that arnt used by your blueprint.

![ModActorVars](./assets/ModActorVariables.png)

![ModActorVarsSetup](./assets/ModActorVariablesWorking.png)
:::

### Mod Strings
- ModAuthor - Shows Author in UE4SS Mods panel
- ModDescription - Shows Description for mod in UE4SS Mods Panel
- ModVersion - Shows Version for mod in UE4SS Mods Panel

### Mod Buttons

- ModButtons (Create a String called ModButtons, In the properties panel change the following to the 6 squares in a box) ![ModButtonsArray](./assets/ModButtonsArray.png)
  - Create a new custom event called ModMenuButtonPressed
    - ![ModMenuButtonPressed](./assets/ModMenuButtonPressed.png)
  - 