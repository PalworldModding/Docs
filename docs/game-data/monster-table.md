---
sidebar_position: 2
---

# Pals

import styles from "./styles.module.css";

export function GetImageByName(props) {
    if (props.isBoss) {
        return <>
            <div className={styles["table-icon-container"]}>
                <img className={styles["table-icon"]} src={require("./assets/icons/pal/" + props.imageName + ".png").default}/>
                <img className={styles["pal-boss-icon"]} src={require("./assets/icons/generic/T_icon_enemy_strong.png").default}/>
            </div>
        </>
    }
    if (props.isRaidBoss) {
        return <>
            <div className={styles["table-icon-container"]}>
                <img className={styles["table-icon"]} src={require("./assets/icons/pal/" + props.imageName + ".png").default}/>
                <img className={styles["pal-raid-icon"]} src={require("./assets/icons/generic/T_icon_enemy_strong.png").default}/>
            </div>
        </>
    }
    return <>
        <div className={styles["table-icon-container"]}>
            <img className={styles["table-icon"]} src={require("./assets/icons/pal/" + props.imageName + ".png").default}/>
        </div>
    </>
}

<div className={styles["pak-container"]}>
  <code>Pal/Content/Pal/DataTable/Character/DT_PalMonsterParameter.uasset</code>
</div>

<div className={styles["table-with-icons"]}>
| Icon                                                            | Name                                                    | Pal ID                             |
|-----------------------------------------------------------------|---------------------------------------------------------|-------------------------------------|
<GetImageByName  imageName="T_Anubis_icon_normal"/>                                        | Anubis                                                  | Anubis                              |
<GetImageByName isBoss="true" imageName="T_Anubis_icon_normal"/>                                   | Anubis (Boss)                                           | Boss_Anubis                         |
<GetImageByName  imageName="T_FlameBuffalo_icon_normal"/>                                  | Arsox                                                   | FlameBuffalo                        |
<GetImageByName isBoss="true" imageName="T_FlameBuffalo_icon_normal"/>                             | Arsox (Boss)                                            | BOSS_FlameBuffalo                   |
<GetImageByName  imageName="T_BlackMetalDragon_icon_normal"/>                              | Astegon                                                 | BlackMetalDragon                    |
<GetImageByName isBoss="true" imageName="T_BlackMetalDragon_icon_normal"/>                         | Astegon (Boss)                                          | BOSS_BlackMetalDragon               |
<GetImageByName  imageName="T_BossDemo_Image_Volcano"/>                          | Axel & Orserk                                           | GYM_ThunderDragonMan                |
<GetImageByName  imageName="T_BlueDragon_icon_normal"/>                                    | Azurobe                                                 | BlueDragon                          |
<GetImageByName isBoss="true" imageName="T_BlueDragon_icon_normal"/>                               | Azurobe (Boss)                                          | BOSS_BlueDragon                     |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                    | BadCatgirl                                              | BadCatgirl                          |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                               | BadCatgirl (Boss)                                       | BOSS_BadCatgirl                     |
<GetImageByName  imageName="T_ThunderBird_icon_normal"/>                                   | Beakon                                                  | ThunderBird                         |
<GetImageByName isBoss="true" imageName="T_ThunderBird_icon_normal"/>                              | Beakon (Boss)                                           | BOSS_ThunderBird                    |
<GetImageByName  imageName="T_BeardedDragon_icon_normal"/>                                 | BeardedDragon                                           | BeardedDragon                       |
<GetImageByName isBoss="true" imageName="T_BeardedDragon_icon_normal"/>                            | BeardedDragon (Boss)                                    | BOSS_BeardedDragon                  |
<GetImageByName  imageName="T_SoldierBee_icon_normal"/>                                    | Beegarde                                                | SoldierBee                          |
<GetImageByName isBoss="true" imageName="T_SoldierBee_icon_normal"/>                               | Beegarde (Boss)                                         | BOSS_SoldierBee                     |
<GetImageByName  imageName="T_NightLady_icon_normal"/>                                     | Bellanoir                                               | NightLady                           |
<GetImageByName isBoss="true" imageName="T_NightLady_icon_normal"/>                                | Bellanoir (Boss)                                        | BOSS_NightLady                      |
<GetImageByName isRaidBoss="true" imageName="T_NightLady_icon_normal"/>                                | Bellanoir (Raid Boss)                                   | RAID_NightLady                      |
<GetImageByName  imageName="T_NightLady_Dark_icon_normal"/>                                | Bellanoir Libero                                        | NightLady_Dark                      |
<GetImageByName isBoss="true" imageName="T_NightLady_Dark_icon_normal"/>                           | Bellanoir Libero (Boss)                                 | BOSS_NightLady_Dark                 |
<GetImageByName isRaidBoss="true" imageName="T_NightLady_Dark_icon_normal"/>                           | Bellanoir Libero (Raid Boss)                            | RAID_NightLady_Dark                 |
<GetImageByName isRaidBoss="true" imageName="T_NightLady_Dark_icon_normal"/>                         | Bellanoir Libero (Raid Boss)                            | RAID_NightLady_Dark_2               |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                    | BlackPuppy                                              | BlackPuppy                          |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                               | BlackPuppy (Boss)                                       | BOSS_BlackPuppy                     |
<GetImageByName  imageName="T_KingBahamut_icon_normal"/>                                   | Blazamut                                                | KingBahamut                         |
<GetImageByName isBoss="true" imageName="T_KingBahamut_icon_normal"/>                              | Blazamut (Boss)                                         | BOSS_KingBahamut                    |
<GetImageByName  imageName="T_Manticore_icon_normal"/>                                     | Blazehowl                                               | Manticore                           |
<GetImageByName isBoss="true" imageName="T_Manticore_icon_normal"/>                                | Blazehowl (Boss)                                        | BOSS_Manticore                      |
<GetImageByName  imageName="T_Manticore_Dark_icon_normal"/>                                | Blazehowl Noct                                          | Manticore_Dark                      |
<GetImageByName isBoss="true" imageName="T_Manticore_Dark_icon_normal"/>                           | Blazehowl Noct (Boss)                                   | BOSS_Manticore_Dark                 |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | BlueThunderHorse                                        | BlueThunderHorse                    |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                         | BlueThunderHorse (Boss)                                 | BOSS_BlueThunderHorse               |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | BlueberryFairy                                          | BlueberryFairy                      |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                           | BlueberryFairy (Boss)                                   | BOSS_BlueberryFairy                 |
<GetImageByName  imageName="T_ElecLion_icon_normal"/>                                      | Boltmane                                                | ElecLion                            |
<GetImageByName isBoss="true" imageName="T_ElecLion_icon_normal"/>                                 | Boltmane (Boss)                                         | BOSS_ElecLion                       |
<GetImageByName  imageName="T_LittleBriarRose_icon_normal"/>                               | Bristla                                                 | LittleBriarRose                     |
<GetImageByName isBoss="true" imageName="T_LittleBriarRose_icon_normal"/>                          | Bristla (Boss)                                          | BOSS_LittleBriarRose                |
<GetImageByName  imageName="T_SakuraSaurus_icon_normal"/>                                  | Broncherry                                              | SakuraSaurus                        |
<GetImageByName isBoss="true" imageName="T_SakuraSaurus_icon_normal"/>                             | Broncherry (Boss)                                       | BOSS_SakuraSaurus                   |
<GetImageByName  imageName="T_SakuraSaurus_Water_icon_normal"/>                            | Broncherry Aqua                                         | SakuraSaurus_Water                  |
<GetImageByName isBoss="true" imageName="T_SakuraSaurus_Water_icon_normal"/>                       | Broncherry Aqua (Boss)                                  | BOSS_SakuraSaurus_Water             |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                   | BrownRabbit                                             | BrownRabbit                         |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | BrownRabbit (Boss)                                      | BOSS_BrownRabbit                    |
<GetImageByName  imageName="T_Ronin_icon_normal"/>                                         | Bushi                                                   | Ronin                               |
<GetImageByName isBoss="true" imageName="T_Ronin_icon_normal"/>                                    | Bushi (Boss)                                            | BOSS_Ronin                          |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                    | Bushi Noct                                              | Ronin_Dark                          |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                               | Bushi Noct  (Boss)                                      | BOSS_Ronin_Dark                     |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                   | CandleGhost                                             | CandleGhost                         |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | CandleGhost (Boss)                                      | BOSS_CandleGhost                    |
<GetImageByName  imageName="T_BerryGoat_icon_normal"/>                                     | Caprity                                                 | BerryGoat                           |
<GetImageByName isBoss="true" imageName="T_BerryGoat_icon_normal"/>                                | Caprity (Boss)                                          | BOSS_BerryGoat                      |
<GetImageByName  imageName="T_PinkCat_icon_normal"/>                                       | Cattiva                                                 | PinkCat                             |
<GetImageByName isBoss="true" imageName="T_PinkCat_icon_normal"/>                                  | Cattiva (Boss)                                          | BOSS_PinkCat                        |
<GetImageByName  imageName="T_DarkCrow_icon_normal"/>                                      | Cawgnito                                                | DarkCrow                            |
<GetImageByName isBoss="true" imageName="T_DarkCrow_icon_normal"/>                                 | Cawgnito (Boss)                                         | BOSS_DarkCrow                       |
<GetImageByName  imageName="T_FlyingManta_icon_normal"/>                                   | Celaray                                                 | FlyingManta                         |
<GetImageByName isBoss="true" imageName="T_FlyingManta_icon_normal"/>                              | Celaray (Boss)                                          | BOSS_FlyingManta                    |
<GetImageByName  imageName="T_ChickenPal_icon_normal"/>                                    | Chikipi                                                 | ChickenPal                          |
<GetImageByName isBoss="true" imageName="T_ChickenPal_icon_normal"/>                               | Chikipi (Boss)                                          | BOSS_ChickenPal                     |
<GetImageByName  imageName="T_WeaselDragon_icon_normal"/>                                  | Chillet                                                 | WeaselDragon                        |
<GetImageByName isBoss="true" imageName="T_WeaselDragon_icon_normal"/>                             | Chillet (Boss)                                          | BOSS_WeaselDragon                   |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                             | Chillet Ignis                                           | WeaselDragon_Fire                   |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                        | Chillet Ignis  (Boss)                                   | BOSS_WeaselDragon_Fire              |
<GetImageByName  imageName="T_CuteButterfly_icon_normal"/>                                 | Cinnamoth                                               | CuteButterfly                       |
<GetImageByName isBoss="true" imageName="T_CuteButterfly_icon_normal"/>                            | Cinnamoth (Boss)                                        | BOSS_CuteButterfly                  |
<GetImageByName  imageName="T_WoolFox_icon_normal"/>                                       | Cremis                                                  | WoolFox                             |
<GetImageByName isBoss="true" imageName="T_WoolFox_icon_normal"/>                                  | Cremis (Boss)                                           | BOSS_WoolFox                        |
<GetImageByName  imageName="T_WhiteTiger_icon_normal"/>                                    | Cryolinx                                                | WhiteTiger                          |
<GetImageByName isBoss="true" imageName="T_WhiteTiger_icon_normal"/>                               | Cryolinx (Boss)                                         | BOSS_WhiteTiger                     |
<GetImageByName  imageName="T_DreamDemon_icon_normal"/>                                    | Daedream                                                | DreamDemon                          |
<GetImageByName isBoss="true" imageName="T_DreamDemon_icon_normal"/>                               | Daedream (Boss)                                         | BOSS_DreamDemon                     |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                     | DarkAlien                                               | DarkAlien                           |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | DarkAlien (Boss)                                        | BOSS_DarkAlien                      |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                               | DarkMechaDragon                                         | DarkMechaDragon                     |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                          | DarkMechaDragon (Boss)                                  | BOSS_DarkMechaDragon                |
<GetImageByName  imageName="T_DarkMutant_icon_normal"/>                                    | DarkMutant                                              | DarkMutant                          |
<GetImageByName isBoss="true" imageName="T_DarkMutant_icon_normal"/>                               | DarkMutant (Boss)                                       | BOSS_DarkMutant                     |
<GetImageByName  imageName="T_RaijinDaughter_icon_normal"/>                                | Dazzi                                                   | RaijinDaughter                      |
<GetImageByName isBoss="true" imageName="T_RaijinDaughter_icon_normal"/>                           | Dazzi (Boss)                                            | BOSS_RaijinDaughter                 |
<GetImageByName  imageName="T_NegativeKoala_icon_normal"/>                                 | Depresso                                                | NegativeKoala                       |
<GetImageByName isBoss="true" imageName="T_NegativeKoala_icon_normal"/>                            | Depresso (Boss)                                         | BOSS_NegativeKoala                  |
<GetImageByName  imageName="T_DrillGame_icon_normal"/>                                     | Digtoise                                                | DrillGame                           |
<GetImageByName isBoss="true" imageName="T_DrillGame_icon_normal"/>                                | Digtoise (Boss)                                         | BOSS_DrillGame                      |
<GetImageByName  imageName="T_FlowerDinosaur_icon_normal"/>                                | Dinossom                                                | FlowerDinosaur                      |
<GetImageByName isBoss="true" imageName="T_FlowerDinosaur_icon_normal"/>                           | Dinossom (Boss)                                         | BOSS_FlowerDinosaur                 |
<GetImageByName  imageName="T_FlowerDinosaur_Electric_icon_normal"/>                       | Dinossom Lux                                            | FlowerDinosaur_Electric             |
<GetImageByName isBoss="true" imageName="T_FlowerDinosaur_Electric_icon_normal"/>                  | Dinossom Lux (Boss)                                     | BOSS_FlowerDinosaur_Electric        |
<GetImageByName  imageName="T_Garm_icon_normal"/>                                          | Direhowl                                                | Garm                                |
<GetImageByName isBoss="true" imageName="T_Garm_icon_normal"/>                                     | Direhowl (Boss)                                         | BOSS_Garm                           |
<GetImageByName  imageName="T_BlackFurDragon_icon_normal"/>                                | Dragostrophe                                            | BlackFurDragon                      |
<GetImageByName isBoss="true" imageName="T_BlackFurDragon_icon_normal"/>                           | Dragostrophe (Boss)                                     | BOSS_BlackFurDragon                 |
<GetImageByName  imageName="T_LazyCatfish_icon_normal"/>                                   | Dumud                                                   | LazyCatfish                         |
<GetImageByName isBoss="true" imageName="T_LazyCatfish_icon_normal"/>                              | Dumud (Boss)                                            | BOSS_LazyCatfish                    |
<GetImageByName  imageName="T_Deer_icon_normal"/>                                          | Eikthyrdeer                                             | Deer                                |
<GetImageByName isBoss="true" imageName="T_Deer_icon_normal"/>                                     | Eikthyrdeer (Boss)                                      | BOSS_Deer                           |
<GetImageByName  imageName="T_Deer_Ground_icon_normal"/>                                   | Eikthyrdeer Terra                                       | Deer_Ground                         |
<GetImageByName isBoss="true" imageName="T_Deer_Ground_icon_normal"/>                              | Eikthyrdeer Terra (Boss)                                | BOSS_Deer_Ground                    |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                    | ElecLizard                                              | ElecLizard                          |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                               | ElecLizard (Boss)                                       | BOSS_ElecLizard                     |
<GetImageByName  imageName="T_QueenBee_icon_normal"/>                                      | Elizabee                                                | QueenBee                            |
<GetImageByName isBoss="true" imageName="T_QueenBee_icon_normal"/>                                 | Elizabee (Boss)                                         | BOSS_QueenBee                       |
<GetImageByName  imageName="T_FairyDragon_icon_normal"/>                                   | Elphidran                                               | FairyDragon                         |
<GetImageByName isBoss="true" imageName="T_FairyDragon_icon_normal"/>                              | Elphidran (Boss)                                        | BOSS_FairyDragon                    |
<GetImageByName  imageName="T_FairyDragon_Water_icon_normal"/>                             | Elphidran Aqua                                          | FairyDragon_Water                   |
<GetImageByName isBoss="true" imageName="T_FairyDragon_Water_icon_normal"/>                        | Elphidran Aqua (Boss)                                   | BOSS_FairyDragon_Water              |
<GetImageByName  imageName="T_Horus_icon_normal"/>                                         | Faleris                                                 | Horus                               |
<GetImageByName isBoss="true" imageName="T_Horus_icon_normal"/>                                    | Faleris (Boss)                                          | BOSS_Horus                          |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | FeatherOstrich                                          | FeatherOstrich                      |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                           | FeatherOstrich (Boss)                                   | BOSS_FeatherOstrich                 |
<GetImageByName  imageName="T_CatVampire_icon_normal"/>                                    | Felbat                                                  | CatVampire                          |
<GetImageByName isBoss="true" imageName="T_CatVampire_icon_normal"/>                               | Felbat (Boss)                                           | BOSS_CatVampire                     |
<GetImageByName  imageName="T_FengyunDeeper_icon_normal"/>                                 | Fenglope                                                | FengyunDeeper                       |
<GetImageByName isBoss="true" imageName="T_FengyunDeeper_icon_normal"/>                            | Fenglope (Boss)                                         | BOSS_FengyunDeeper                  |
<GetImageByName  imageName="T_LavaGirl_icon_normal"/>                                      | Flambelle                                               | LavaGirl                            |
<GetImageByName isBoss="true" imageName="T_LavaGirl_icon_normal"/>                                 | Flambelle (Boss)                                        | BOSS_LavaGirl                       |
<GetImageByName  imageName="T_FlowerRabbit_icon_normal"/>                                  | Flopie                                                  | FlowerRabbit                        |
<GetImageByName isBoss="true" imageName="T_FlowerRabbit_icon_normal"/>                             | Flopie (Boss)                                           | BOSS_FlowerRabbit                   |
<GetImageByName  imageName="T_IceFox_icon_normal"/>                                        | Foxcicle                                                | IceFox                              |
<GetImageByName isBoss="true" imageName="T_IceFox_icon_normal"/>                                   | Foxcicle (Boss)                                         | BOSS_IceFox                         |
<GetImageByName  imageName="T_Kitsunebi_icon_normal"/>                                     | Foxparks                                                | Kitsunebi                           |
<GetImageByName isBoss="true" imageName="T_Kitsunebi_icon_normal"/>                                | Foxparks (Boss)                                         | BOSS_Kitsunebi                      |
<GetImageByName  imageName="T_IceHorse_icon_normal"/>                                      | Frostallion                                             | IceHorse                            |
<GetImageByName isBoss="true" imageName="T_IceHorse_icon_normal"/>                                 | Frostallion (Boss)                                      | BOSS_IceHorse                       |
<GetImageByName  imageName="T_IceHorse_Dark_icon_normal"/>                                 | Frostallion Noct                                        | IceHorse_Dark                       |
<GetImageByName isBoss="true" imageName="T_IceHorse_Dark_icon_normal"/>                            | Frostallion Noct (Boss)                                 | BOSS_IceHorse_Dark                  |
<GetImageByName  imageName="T_BluePlatypus_icon_normal"/>                                  | Fuack                                                   | BluePlatypus                        |
<GetImageByName isBoss="true" imageName="T_BluePlatypus_icon_normal"/>                             | Fuack (Boss)                                            | BOSS_BluePlatypus                   |
<GetImageByName  imageName="T_CuteMole_icon_normal"/>                                      | Fuddler                                                 | CuteMole                            |
<GetImageByName isBoss="true" imageName="T_CuteMole_icon_normal"/>                                 | Fuddler (Boss)                                          | BOSS_CuteMole                       |
<GetImageByName  imageName="T_Eagle_icon_normal"/>                                         | Galeclaw                                                | Eagle                               |
<GetImageByName isBoss="true" imageName="T_Eagle_icon_normal"/>                                    | Galeclaw (Boss)                                         | BOSS_Eagle                          |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                   | GhostRabbit                                             | GhostRabbit                         |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | GhostRabbit (Boss)                                      | BOSS_GhostRabbit                    |
<GetImageByName  imageName="T_SharkKid_icon_normal"/>                                      | Gobfin                                                  | SharkKid                            |
<GetImageByName isBoss="true" imageName="T_SharkKid_icon_normal"/>                                 | Gobfin (Boss)                                           | BOSS_SharkKid                       |
<GetImageByName  imageName="T_SharkKid_Fire_icon_normal"/>                                 | Gobfin Ignis                                            | SharkKid_Fire                       |
<GetImageByName isBoss="true" imageName="T_SharkKid_Fire_icon_normal"/>                            | Gobfin Ignis (Boss)                                     | BOSS_SharkKid_Fire                  |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                   | GoldenHorse                                             | GoldenHorse                         |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | GoldenHorse (Boss)                                      | BOSS_GoldenHorse                    |
<GetImageByName  imageName="T_Gorilla_icon_normal"/>                                       | Gorirat                                                 | Gorilla                             |
<GetImageByName isBoss="true" imageName="T_Gorilla_icon_normal"/>                                  | Gorirat (Boss)                                          | BOSS_Gorilla                        |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | Gorirat Terra                                           | Gorilla_Ground                      |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                           | Gorirat Terra  (Boss)                                   | BOSS_Gorilla_Ground                 |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                   | GrassDragon                                             | GrassDragon                         |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | GrassDragon (Boss)                                      | BOSS_GrassDragon                    |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                      | GrimGirl                                                | GrimGirl                            |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                 | GrimGirl (Boss)                                         | BOSS_GrimGirl                       |
<GetImageByName  imageName="T_NaughtyCat_icon_normal"/>                                    | Grintale                                                | NaughtyCat                          |
<GetImageByName isBoss="true" imageName="T_NaughtyCat_icon_normal"/>                               | Grintale (Boss)                                         | BOSS_NaughtyCat                     |
<GetImageByName  imageName="T_ElecPanda_icon_normal"/>                                     | Grizzbolt                                               | ElecPanda                           |
<GetImageByName isBoss="true" imageName="T_ElecPanda_icon_normal"/>                                | Grizzbolt (Boss)                                        | BOSS_ElecPanda                      |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                   | GuardianDog                                             | GuardianDog                         |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | GuardianDog (Boss)                                      | BOSS_GuardianDog                    |
<GetImageByName  imageName="T_PlantSlime_icon_normal"/>                                    | Gumoss                                                  | PlantSlime                          |
<GetImageByName isBoss="true" imageName="T_PlantSlime_icon_normal"/>                               | Gumoss (Boss)                                           | BOSS_PlantSlime                     |
<GetImageByName isBoss="true" imageName="T_PlantSlime_icon_normal"/>                        | Gumoss (Boss)                                           | BOSS_PlantSlime_Flower              |
<GetImageByName  imageName="T_WindChimes_icon_normal"/>                                    | Hangyu                                                  | WindChimes                          |
<GetImageByName isBoss="true" imageName="T_WindChimes_icon_normal"/>                               | Hangyu (Boss)                                           | BOSS_WindChimes                     |
<GetImageByName  imageName="T_WindChimes_Ice_icon_normal"/>                                | Hangyu Cryst                                            | WindChimes_Ice                      |
<GetImageByName isBoss="true" imageName="T_WindChimes_Ice_icon_normal"/>                           | Hangyu Cryst (Boss)                                     | BOSS_WindChimes_Ice                 |
<GetImageByName  imageName="T_HadesBird_icon_normal"/>                                     | Helzephyr                                               | HadesBird                           |
<GetImageByName isBoss="true" imageName="T_HadesBird_icon_normal"/>                                | Helzephyr (Boss)                                        | BOSS_HadesBird                      |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                            | Helzephyr Lux                                           | HadesBird_Electric                  |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                       | Helzephyr Lux  (Boss)                                   | BOSS_HadesBird_Electric             |
<GetImageByName  imageName="T_WizardOwl_icon_normal"/>                                     | Hoocrates                                               | WizardOwl                           |
<GetImageByName isBoss="true" imageName="T_WizardOwl_icon_normal"/>                                | Hoocrates (Boss)                                        | BOSS_WizardOwl                      |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                     | HoodGhost                                               | HoodGhost                           |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | HoodGhost (Boss)                                        | BOSS_HoodGhost                      |
<GetImageByName  imageName="T_Baphomet_icon_normal"/>                                      | Incineram                                               | Baphomet                            |
<GetImageByName isBoss="true" imageName="T_Baphomet_icon_normal"/>                                 | Incineram (Boss)                                        | BOSS_Baphomet                       |
<GetImageByName  imageName="T_Baphomet_Dark_icon_normal"/>                                 | Incineram Noct                                          | Baphomet_Dark                       |
<GetImageByName isBoss="true" imageName="T_Baphomet_Dark_icon_normal"/>                            | Incineram Noct (Boss)                                   | BOSS_Baphomet_Dark                  |
<GetImageByName  imageName="T_JetDragon_icon_normal"/>                                     | Jetragon                                                | JetDragon                           |
<GetImageByName isBoss="true" imageName="T_JetDragon_icon_normal"/>                                | Jetragon (Boss)                                         | BOSS_JetDragon                      |
<GetImageByName  imageName="T_Hedgehog_icon_normal"/>                                      | Jolthog                                                 | Hedgehog                            |
<GetImageByName isBoss="true" imageName="T_Hedgehog_icon_normal"/>                                 | Jolthog (Boss)                                          | BOSS_Hedgehog                       |
<GetImageByName  imageName="T_Hedgehog_Ice_icon_normal"/>                                  | Jolthog Cryst                                           | Hedgehog_Ice                        |
<GetImageByName isBoss="true" imageName="T_Hedgehog_Ice_icon_normal"/>                             | Jolthog Cryst (Boss)                                    | BOSS_Hedgehog_Ice                   |
<GetImageByName  imageName="T_Umihebi_icon_normal"/>                                       | Jormuntide                                              | Umihebi                             |
<GetImageByName isBoss="true" imageName="T_Umihebi_icon_normal"/>                                  | Jormuntide (Boss)                                       | BOSS_Umihebi                        |
<GetImageByName  imageName="T_Umihebi_Fire_icon_normal"/>                                  | Jormuntide Ignis                                        | Umihebi_Fire                        |
<GetImageByName isBoss="true" imageName="T_Umihebi_Fire_icon_normal"/>                             | Jormuntide Ignis (Boss)                                 | BOSS_Umihebi_Fire                   |
<GetImageByName  imageName="T_CatMage_icon_normal"/>                                       | Katress                                                 | CatMage                             |
<GetImageByName isBoss="true" imageName="T_CatMage_icon_normal"/>                                  | Katress (Boss)                                          | BOSS_CatMage                        |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                  | Katress Ignis                                           | CatMage_Fire                        |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                             | Katress Ignis  (Boss)                                   | BOSS_CatMage_Fire                   |
<GetImageByName  imageName="T_Kelpie_icon_normal"/>                                        | Kelpsea                                                 | Kelpie                              |
<GetImageByName isBoss="true" imageName="T_Kelpie_icon_normal"/>                                   | Kelpsea (Boss)                                          | BOSS_Kelpie                         |
<GetImageByName  imageName="T_Kelpie_Fire_icon_normal"/>                                   | Kelpsea Ignis                                           | Kelpie_Fire                         |
<GetImageByName isBoss="true" imageName="T_Kelpie_Fire_icon_normal"/>                              | Kelpsea Ignis (Boss)                                    | BOSS_Kelpie_Fire                    |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                     | KendoFrog                                               | KendoFrog                           |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | KendoFrog (Boss)                                        | BOSS_KendoFrog                      |
<GetImageByName  imageName="T_NegativeOctopus_icon_normal"/>                               | Killamari                                               | NegativeOctopus                     |
<GetImageByName isBoss="true" imageName="T_NegativeOctopus_icon_normal"/>                          | Killamari (Boss)                                        | BOSS_NegativeOctopus                |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                            | KingBahamut_Dragon                                      | KingBahamut_Dragon                  |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                       | KingBahamut_Dragon (Boss)                               | BOSS_KingBahamut_Dragon             |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                     | KingWhale                                               | KingWhale                           |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | KingWhale (Boss)                                        | BOSS_KingWhale                      |
<GetImageByName  imageName="T_KingAlpaca_icon_normal"/>                                    | Kingpaca                                                | KingAlpaca                          |
<GetImageByName isBoss="true" imageName="T_KingAlpaca_icon_normal"/>                               | Kingpaca (Boss)                                         | BOSS_KingAlpaca                     |
<GetImageByName  imageName="T_KingAlpaca_Ice_icon_normal"/>                                | Kingpaca Cryst                                          | KingAlpaca_Ice                      |
<GetImageByName isBoss="true" imageName="T_KingAlpaca_Ice_icon_normal"/>                           | Kingpaca Cryst (Boss)                                   | BOSS_KingAlpaca_Ice                 |
<GetImageByName  imageName="T_AmaterasuWolf_icon_normal"/>                                 | Kitsun                                                  | AmaterasuWolf                       |
<GetImageByName isBoss="true" imageName="T_AmaterasuWolf_icon_normal"/>                            | Kitsun (Boss)                                           | BOSS_AmaterasuWolf                  |
<GetImageByName  imageName="T_SheepBall_icon_normal"/>                                     | Lamball                                                 | SheepBall                           |
<GetImageByName isBoss="true" imageName="T_SheepBall_icon_normal"/>                                | Lamball (Boss)                                          | BOSS_SheepBall                      |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                  | LeafPrincess                                            | LeafPrincess                        |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                             | LeafPrincess (Boss)                                     | BOSS_LeafPrincess                   |
<GetImageByName  imageName="T_LizardMan_icon_normal"/>                                     | Leezpunk                                                | LizardMan                           |
<GetImageByName isBoss="true" imageName="T_LizardMan_icon_normal"/>                                | Leezpunk (Boss)                                         | BOSS_LizardMan                      |
<GetImageByName  imageName="T_LizardMan_Fire_icon_normal"/>                                | Leezpunk Ignis                                          | LizardMan_Fire                      |
<GetImageByName isBoss="true" imageName="T_LizardMan_Fire_icon_normal"/>                           | Leezpunk Ignis (Boss)                                   | BOSS_LizardMan_Fire                 |
<GetImageByName  imageName="T_Carbunclo_icon_normal"/>                                     | Lifmunk                                                 | Carbunclo                           |
<GetImageByName isBoss="true" imageName="T_Carbunclo_icon_normal"/>                                | Lifmunk (Boss)                                          | BOSS_Carbunclo                      |
<GetImageByName  imageName="T_BossDemo_Image_Forest"/>                                 | Lily & Lyleen                                           | GYM_LilyQueen                       |
<GetImageByName  imageName="T_Werewolf_icon_normal"/>                                      | Loupmoon                                                | Werewolf                            |
<GetImageByName isBoss="true" imageName="T_Werewolf_icon_normal"/>                                 | Loupmoon (Boss)                                         | BOSS_Werewolf                       |
<GetImageByName  imageName="T_PinkLizard_icon_normal"/>                                    | Lovander                                                | PinkLizard                          |
<GetImageByName isBoss="true" imageName="T_PinkLizard_icon_normal"/>                               | Lovander (Boss)                                         | BOSS_PinkLizard                     |
<GetImageByName  imageName="T_Mutant_icon_normal"/>                                        | Lunaris                                                 | Mutant                              |
<GetImageByName isBoss="true" imageName="T_Mutant_icon_normal"/>                                   | Lunaris (Boss)                                          | BOSS_Mutant                         |
<GetImageByName  imageName="T_LilyQueen_icon_normal"/>                                     | Lyleen                                                  | LilyQueen                           |
<GetImageByName isBoss="true" imageName="T_LilyQueen_icon_normal"/>                                | Lyleen (Boss)                                           | BOSS_LilyQueen                      |
<GetImageByName  imageName="T_LilyQueen_Dark_icon_normal"/>                                | Lyleen Noct                                             | LilyQueen_Dark                      |
<GetImageByName isBoss="true" imageName="T_LilyQueen_Dark_icon_normal"/>                           | Lyleen Noct (Boss)                                      | BOSS_LilyQueen_Dark                 |
<GetImageByName  imageName="T_GrassMammoth_icon_normal"/>                                  | Mammorest                                               | GrassMammoth                        |
<GetImageByName isBoss="true" imageName="T_GrassMammoth_icon_normal"/>                             | Mammorest (Boss)                                        | BOSS_GrassMammoth                   |
<GetImageByName  imageName="T_GrassMammoth_Ice_icon_normal"/>                              | Mammorest Cryst                                         | GrassMammoth_Ice                    |
<GetImageByName isBoss="true" imageName="T_GrassMammoth_Ice_icon_normal"/>                         | Mammorest Cryst (Boss)                                  | BOSS_GrassMammoth_Ice               |
<GetImageByName  imageName="T_GhostBeast_icon_normal"/>                                    | Maraith                                                 | GhostBeast                          |
<GetImageByName isBoss="true" imageName="T_GhostBeast_icon_normal"/>                               | Maraith (Boss)                                          | BOSS_GhostBeast                     |
<GetImageByName  imageName="T_BossDemo_Image_Desert"/>                                     | Marcus & Faleris                                        | GYM_Horus                           |
<GetImageByName  imageName="T_Bastet_icon_normal"/>                                        | Mau                                                     | Bastet                              |
<GetImageByName isBoss="true" imageName="T_Bastet_icon_normal"/>                                   | Mau (Boss)                                              | BOSS_Bastet                         |
<GetImageByName  imageName="T_Bastet_Ice_icon_normal"/>                                    | Mau Cryst                                               | Bastet_Ice                          |
<GetImageByName isBoss="true" imageName="T_Bastet_Ice_icon_normal"/>                               | Mau Cryst (Boss)                                        | BOSS_Bastet_Ice                     |
<GetImageByName  imageName="T_Alpaca_icon_normal"/>                                        | Melpaca                                                 | Alpaca                              |
<GetImageByName isBoss="true" imageName="T_Alpaca_icon_normal"/>                                   | Melpaca (Boss)                                          | BOSS_Alpaca                         |
<GetImageByName  imageName="T_DarkScorpion_icon_normal"/>                                  | Menasting                                               | DarkScorpion                        |
<GetImageByName isBoss="true" imageName="T_DarkScorpion_icon_normal"/>                             | Menasting (Boss)                                        | BOSS_DarkScorpion                   |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                           | Menasting Terra                                         | DarkScorpion_Ground                 |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                      | Menasting Terra  (Boss)                                 | BOSS_DarkScorpion_Ground            |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                     | MoonQueen                                               | MoonQueen                           |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | MoonQueen (Boss)                                        | BOSS_MoonQueen                      |
<GetImageByName  imageName="T_GrassPanda_icon_normal"/>                                    | Mossanda                                                | GrassPanda                          |
<GetImageByName isBoss="true" imageName="T_GrassPanda_icon_normal"/>                               | Mossanda (Boss)                                         | BOSS_GrassPanda                     |
<GetImageByName  imageName="T_GrassPanda_Electric_icon_normal"/>                           | Mossanda Lux                                            | GrassPanda_Electric                 |
<GetImageByName isBoss="true" imageName="T_GrassPanda_Electric_icon_normal"/>                      | Mossanda Lux (Boss)                                     | BOSS_GrassPanda_Electric            |
<GetImageByName  imageName="T_CowPal_icon_normal"/>                                        | Mozzarina                                               | CowPal                              |
<GetImageByName isBoss="true" imageName="T_CowPal_icon_normal"/>                                   | Mozzarina (Boss)                                        | BOSS_CowPal                         |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | MushroomDragon                                          | MushroomDragon                      |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                           | MushroomDragon (Boss)                                   | BOSS_MushroomDragon                 |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                           | MushroomDragon_Dark                                     | MushroomDragon_Dark                 |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                      | MushroomDragon_Dark (Boss)                              | BOSS_MushroomDragon_Dark            |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                   | MysteryMask                                             | MysteryMask                         |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | MysteryMask (Boss)                                      | BOSS_MysteryMask                    |
<GetImageByName  imageName="T_BlackCentaur_icon_normal"/>                                  | Necromus                                                | BlackCentaur                        |
<GetImageByName isBoss="true" imageName="T_BlackCentaur_icon_normal"/>                             | Necromus (Boss)                                         | BOSS_BlackCentaur                   |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | NightBlueHorse                                          | NightBlueHorse                      |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                           | NightBlueHorse (Boss)                                   | BOSS_NightBlueHorse                 |
<GetImageByName  imageName="T_HawkBird_icon_normal"/>                                      | Nitewing                                                | HawkBird                            |
<GetImageByName isBoss="true" imageName="T_HawkBird_icon_normal"/>                                 | Nitewing (Boss)                                         | BOSS_HawkBird                       |
<GetImageByName  imageName="T_NightFox_icon_normal"/>                                      | Nox                                                     | NightFox                            |
<GetImageByName isBoss="true" imageName="T_NightFox_icon_normal"/>                                 | Nox (Boss)                                              | BOSS_NightFox                       |
<GetImageByName  imageName="T_ThunderDragonMan_icon_normal"/>                              | Orserk                                                  | ThunderDragonMan                    |
<GetImageByName isBoss="true" imageName="T_ThunderDragonMan_icon_normal"/>                         | Orserk (Boss)                                           | BOSS_ThunderDragonMan               |
<GetImageByName  imageName="T_SaintCentaur_icon_normal"/>                                  | Paladius                                                | SaintCentaur                        |
<GetImageByName isBoss="true" imageName="T_SaintCentaur_icon_normal"/>                             | Paladius (Boss)                                         | BOSS_SaintCentaur                   |
<GetImageByName  imageName="T_Penguin_icon_normal"/>                                       | Pengullet                                               | Penguin                             |
<GetImageByName isBoss="true" imageName="T_Penguin_icon_normal"/>                                  | Pengullet (Boss)                                        | BOSS_Penguin                        |
<GetImageByName  imageName="T_CaptainPenguin_icon_normal"/>                                | Penking                                                 | CaptainPenguin                      |
<GetImageByName isBoss="true" imageName="T_CaptainPenguin_icon_normal"/>                           | Penking (Boss)                                          | BOSS_CaptainPenguin                 |
<GetImageByName  imageName="T_FlowerDoll_icon_normal"/>                                    | Petallia                                                | FlowerDoll                          |
<GetImageByName isBoss="true" imageName="T_FlowerDoll_icon_normal"/>                               | Petallia (Boss)                                         | BOSS_FlowerDoll                     |
<GetImageByName  imageName="T_dummy_icon"/>                                  | PinkKangaroo                                            | PinkKangaroo                        |
<GetImageByName isBoss="true" imageName="T_dummy_icon"/>                             | PinkKangaroo (Boss)                                     | BOSS_PinkKangaroo                   |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                             | PlantSlime_Flower                                       | PlantSlime_Flower                   |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                  | PurpleSpider                                            | PurpleSpider                        |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                             | PurpleSpider (Boss)                                     | BOSS_PurpleSpider                   |
<GetImageByName  imageName="T_FireKirin_icon_normal"/>                                     | Pyrin                                                   | FireKirin                           |
<GetImageByName isBoss="true" imageName="T_FireKirin_icon_normal"/>                                | Pyrin (Boss)                                            | BOSS_FireKirin                      |
<GetImageByName  imageName="T_FireKirin_Dark_icon_normal"/>                                | Pyrin Noct                                              | FireKirin_Dark                      |
<GetImageByName isBoss="true" imageName="T_FireKirin_Dark_icon_normal"/>                           | Pyrin Noct (Boss)                                       | BOSS_FireKirin_Dark                 |
<GetImageByName  imageName="T_SkyDragon_icon_normal"/>                                     | Quivern                                                 | SkyDragon                           |
<GetImageByName isBoss="true" imageName="T_SkyDragon_icon_normal"/>                                | Quivern (Boss)                                          | BOSS_SkyDragon                      |
<GetImageByName  imageName="T_RedArmorBird_icon_normal"/>                                  | Ragnahawk                                               | RedArmorBird                        |
<GetImageByName isBoss="true" imageName="T_RedArmorBird_icon_normal"/>                             | Ragnahawk (Boss)                                        | BOSS_RedArmorBird                   |
<GetImageByName  imageName="T_ThunderDog_icon_normal"/>                                    | Rayhound                                                | ThunderDog                          |
<GetImageByName isBoss="true" imageName="T_ThunderDog_icon_normal"/>                               | Rayhound (Boss)                                         | BOSS_ThunderDog                     |
<GetImageByName  imageName="T_IceDeer_icon_normal"/>                                       | Reindrix                                                | IceDeer                             |
<GetImageByName isBoss="true" imageName="T_IceDeer_icon_normal"/>                                  | Reindrix (Boss)                                         | BOSS_IceDeer                        |
<GetImageByName  imageName="T_LazyDragon_icon_normal"/>                                    | Relaxaurus                                              | LazyDragon                          |
<GetImageByName isBoss="true" imageName="T_LazyDragon_icon_normal"/>                               | Relaxaurus (Boss)                                       | BOSS_LazyDragon                     |
<GetImageByName  imageName="T_LazyDragon_Electric_icon_normal"/>                           | Relaxaurus Lux                                          | LazyDragon_Electric                 |
<GetImageByName isBoss="true" imageName="T_LazyDragon_Electric_icon_normal"/>                      | Relaxaurus Lux (Boss)                                   | BOSS_LazyDragon_Electric            |
<GetImageByName  imageName="T_VolcanicMonster_icon_normal"/>                               | Reptyro                                                 | VolcanicMonster                     |
<GetImageByName isBoss="true" imageName="T_VolcanicMonster_icon_normal"/>                          | Reptyro (Boss)                                          | BOSS_VolcanicMonster                |
<GetImageByName  imageName="T_VolcanicMonster_Ice_icon_normal"/>                           | Reptyro Cryst                                           | VolcanicMonster_Ice                 |
<GetImageByName isBoss="true" imageName="T_VolcanicMonster_Ice_icon_normal"/>                      | Reptyro Cryst (Boss)                                    | BOSS_VolcanicMonster_Ice            |
<GetImageByName  imageName="T_PinkRabbit_icon_normal"/>                                    | Ribbuny                                                 | PinkRabbit                          |
<GetImageByName isBoss="true" imageName="T_PinkRabbit_icon_normal"/>                               | Ribbuny (Boss)                                          | BOSS_PinkRabbit                     |
<GetImageByName  imageName="T_RobinHood_icon_normal"/>                                     | Robinquill                                              | RobinHood                           |
<GetImageByName isBoss="true" imageName="T_RobinHood_icon_normal"/>                                | Robinquill (Boss)                                       | BOSS_RobinHood                      |
<GetImageByName  imageName="T_RobinHood_Ground_icon_normal"/>                              | Robinquill Terra                                        | RobinHood_Ground                    |
<GetImageByName isBoss="true" imageName="T_RobinHood_Ground_icon_normal"/>                         | Robinquill Terra (Boss)                                 | BOSS_RobinHood_Ground               |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                     | RockBeast                                               | RockBeast                           |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | RockBeast (Boss)                                        | BOSS_RockBeast                      |
<GetImageByName  imageName="T_FlameBambi_icon_normal"/>                                    | Rooby                                                   | FlameBambi                          |
<GetImageByName isBoss="true" imageName="T_FlameBambi_icon_normal"/>                               | Rooby (Boss)                                            | BOSS_FlameBambi                     |
<GetImageByName  imageName="T_Boar_icon_normal"/>                                          | Rushoar                                                 | Boar                                |
<GetImageByName isBoss="true" imageName="T_Boar_icon_normal"/>                                     | Rushoar (Boss)                                          | BOSS_Boar                           |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                   | ScorpionMan                                             | ScorpionMan                         |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | ScorpionMan (Boss)                                      | BOSS_ScorpionMan                    |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                       | Sekhmet                                                 | Sekhmet                             |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                  | Sekhmet (Boss)                                          | BOSS_Sekhmet                        |
<GetImageByName  imageName="T_BlackGriffon_icon_normal"/>                                  | Shadowbeak                                              | BlackGriffon                        |
<GetImageByName isBoss="true" imageName="T_BlackGriffon_icon_normal"/>                             | Shadowbeak (Boss)                                       | BOSS_BlackGriffon                   |
<GetImageByName  imageName="T_WhiteMoth_icon_normal"/>                                     | Sibelyx                                                 | WhiteMoth                           |
<GetImageByName isBoss="true" imageName="T_WhiteMoth_icon_normal"/>                                | Sibelyx (Boss)                                          | BOSS_WhiteMoth                      |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                       | SifuDog                                                 | SifuDog                             |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                  | SifuDog (Boss)                                          | BOSS_SifuDog                        |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                               | SkyDragon_Grass                                         | SkyDragon_Grass                     |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                          | SkyDragon_Grass (Boss)                                  | BOSS_SkyDragon_Grass                |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | SmallArmadillo                                          | SmallArmadillo                      |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                           | SmallArmadillo (Boss)                                   | BOSS_SmallArmadillo                 |
<GetImageByName  imageName="T_ElecCat_icon_normal"/>                                       | Sparkit                                                 | ElecCat                             |
<GetImageByName isBoss="true" imageName="T_ElecCat_icon_normal"/>                                  | Sparkit (Boss)                                          | BOSS_ElecCat                        |
<GetImageByName  imageName="T_Serpent_icon_normal"/>                                       | Surfent                                                 | Serpent                             |
<GetImageByName isBoss="true" imageName="T_Serpent_icon_normal"/>                                  | Surfent (Boss)                                          | BOSS_Serpent                        |
<GetImageByName  imageName="T_Serpent_Ground_icon_normal"/>                                | Surfent Terra                                           | Serpent_Ground                      |
<GetImageByName isBoss="true" imageName="T_Serpent_Ground_icon_normal"/>                           | Surfent Terra (Boss)                                    | BOSS_Serpent_Ground                 |
<GetImageByName  imageName="T_Suzaku_icon_normal"/>                                        | Suzaku                                                  | Suzaku                              |
<GetImageByName isBoss="true" imageName="T_Suzaku_icon_normal"/>                                   | Suzaku (Boss)                                           | BOSS_Suzaku                         |
<GetImageByName  imageName="T_Suzaku_Water_icon_normal"/>                                  | Suzaku Aqua                                             | Suzaku_Water                        |
<GetImageByName isBoss="true" imageName="T_Suzaku_Water_icon_normal"/>                             | Suzaku Aqua (Boss)                                      | BOSS_Suzaku_Water                   |
<GetImageByName  imageName="T_MopBaby_icon_normal"/>                                       | Swee                                                    | MopBaby                             |
<GetImageByName isBoss="true" imageName="T_MopBaby_icon_normal"/>                                  | Swee (Boss)                                             | BOSS_MopBaby                        |
<GetImageByName  imageName="T_MopKing_icon_normal"/>                                       | Sweepa                                                  | MopKing                             |
<GetImageByName isBoss="true" imageName="T_MopKing_icon_normal"/>                                  | Sweepa (Boss)                                           | BOSS_MopKing                        |
<GetImageByName  imageName="T_Monkey_icon_normal"/>                                        | Tanzee                                                  | Monkey                              |
<GetImageByName isBoss="true" imageName="T_Monkey_icon_normal"/>                                   | Tanzee (Boss)                                           | BOSS_Monkey                         |
<GetImageByName  imageName="T_Ganesha_icon_normal"/>                                       | Teafant                                                 | Ganesha                             |
<GetImageByName isBoss="true" imageName="T_Ganesha_icon_normal"/>                                  | Teafant (Boss)                                          | BOSS_Ganesha                        |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | TentacleTurtle                                          | TentacleTurtle                      |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                           | TentacleTurtle (Boss)                                   | BOSS_TentacleTurtle                 |
<GetImageByName  imageName="T_ColorfulBird_icon_normal"/>                                  | Tocotoco                                                | ColorfulBird                        |
<GetImageByName isBoss="true" imageName="T_ColorfulBird_icon_normal"/>                             | Tocotoco (Boss)                                         | BOSS_ColorfulBird                   |
<GetImageByName  imageName="T_CatBat_icon_normal"/>                                        | Tombat                                                  | CatBat                              |
<GetImageByName isBoss="true" imageName="T_CatBat_icon_normal"/>                                   | Tombat (Boss)                                           | BOSS_CatBat                         |
<GetImageByName  imageName="T_Kirin_icon_normal"/>                                         | Univolt                                                 | Kirin                               |
<GetImageByName isBoss="true" imageName="T_Kirin_icon_normal"/>                                    | Univolt (Boss)                                          | BOSS_Kirin                          |
<GetImageByName  imageName="T_VioletFairy_icon_normal"/>                                   | Vaelet                                                  | VioletFairy                         |
<GetImageByName isBoss="true" imageName="T_VioletFairy_icon_normal"/>                              | Vaelet (Boss)                                           | BOSS_VioletFairy                    |
<GetImageByName  imageName="T_BirdDragon_icon_normal"/>                                    | Vanwyrm                                                 | BirdDragon                          |
<GetImageByName isBoss="true" imageName="T_BirdDragon_icon_normal"/>                               | Vanwyrm (Boss)                                          | BOSS_BirdDragon                     |
<GetImageByName  imageName="T_BirdDragon_Ice_icon_normal"/>                                | Vanwyrm Cryst                                           | BirdDragon_Ice                      |
<GetImageByName isBoss="true" imageName="T_BirdDragon_Ice_icon_normal"/>                           | Vanwyrm Cryst (Boss)                                    | BOSS_BirdDragon_Ice                 |
<GetImageByName  imageName="T_GrassRabbitMan_icon_normal"/>                                | Verdash                                                 | GrassRabbitMan                      |
<GetImageByName isBoss="true" imageName="T_GrassRabbitMan_icon_normal"/>                           | Verdash (Boss)                                          | BOSS_GrassRabbitMan                 |
<GetImageByName  imageName="T_BossDemo_Image_Desert"/>                              | Victor & Shadowbeak                                     | GYM_BlackGriffon                    |
<GetImageByName  imageName="T_CuteFox_icon_normal"/>                                       | Vixy                                                    | CuteFox                             |
<GetImageByName isBoss="true" imageName="T_CuteFox_icon_normal"/>                                  | Vixy (Boss)                                             | BOSS_CuteFox                        |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                 | VolcanoDragon                                           | VolcanoDragon                       |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                            | VolcanoDragon (Boss)                                    | BOSS_VolcanoDragon                  |
<GetImageByName  imageName="T_HerculesBeetle_icon_normal"/>                                | Warsect                                                 | HerculesBeetle                      |
<GetImageByName isBoss="true" imageName="T_HerculesBeetle_icon_normal"/>                           | Warsect (Boss)                                          | BOSS_HerculesBeetle                 |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                         | Warsect Terra                                           | HerculesBeetle_Ground               |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                    | Warsect Terra  (Boss)                                   | BOSS_HerculesBeetle_Ground          |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                   | WaterLizard                                             | WaterLizard                         |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | WaterLizard (Boss)                                      | BOSS_WaterLizard                    |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                              | WhiteAlienDragon                                        | WhiteAlienDragon                    |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                         | WhiteAlienDragon (Boss)                                 | BOSS_WhiteAlienDragon               |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                     | WhiteDeer                                               | WhiteDeer                           |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | WhiteDeer (Boss)                                        | BOSS_WhiteDeer                      |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                             | WhiteShieldDragon                                       | WhiteShieldDragon                   |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                        | WhiteShieldDragon (Boss)                                | BOSS_WhiteShieldDragon              |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                     | WingGolem                                               | WingGolem                           |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                                | WingGolem (Boss)                                        | BOSS_WingGolem                      |
<GetImageByName  imageName="T_FoxMage_icon_normal"/>                                       | Wixen                                                   | FoxMage                             |
<GetImageByName isBoss="true" imageName="T_FoxMage_icon_normal"/>                                  | Wixen (Boss)                                            | BOSS_FoxMage                        |
<GetImageByName  imageName="T_itemicon_Material_PalEgg_Unknown"/>                                  | Wixen Noct                                              | FoxMage_Dark                        |
<GetImageByName isBoss="true" imageName="T_itemicon_Material_PalEgg_Unknown"/>                             | Wixen Noct  (Boss)                                      | BOSS_FoxMage_Dark                   |
<GetImageByName  imageName="T_SweetsSheep_icon_normal"/>                                   | Woolipop                                                | SweetsSheep                         |
<GetImageByName isBoss="true" imageName="T_SweetsSheep_icon_normal"/>                              | Woolipop (Boss)                                         | BOSS_SweetsSheep                    |
<GetImageByName  imageName="T_Yeti_icon_normal"/>                                          | Wumpo                                                   | Yeti                                |
<GetImageByName isBoss="true" imageName="T_Yeti_icon_normal"/>                                     | Wumpo (Boss)                                            | BOSS_Yeti                           |
<GetImageByName  imageName="T_Yeti_Grass_icon_normal"/>                                    | Wumpo Botan                                             | Yeti_Grass                          |
<GetImageByName isBoss="true" imageName="T_Yeti_Grass_icon_normal"/>                               | Wumpo Botan (Boss)                                      | BOSS_Yeti_Grass                     |
<GetImageByName  imageName="T_BossDemo_Image_Grass"/>                                 | Zoe & Grizzbolt                                         | GYM_ElecPanda                       |
</div>