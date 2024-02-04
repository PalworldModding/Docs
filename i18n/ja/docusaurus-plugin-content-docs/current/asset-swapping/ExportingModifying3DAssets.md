---
sidebar_position: 3
---

# 3Dアセットのエクスポートと編集

このガイドは[KURAMAAA0](https://github.com/KURAMAAA0/PalModding)によって書かれました。

このガイドは[Latenos](https://github.com/Latenos/PalWorldModDocs)によって日本語に翻訳されました。

このセクションでは、3Dアセットを修正するためにエクスポートする正しいファイルを見つける方法を学びます。Blenderの使い方は学びません。

## パルの3Dモデルの検索とエクスポート

パルの3Dモデルを見つけるには、FModelで`Control + Shift + F`を押すか、上部メニューの`Package -> Search`をクリックして検索窓を使用します。

そして、`SK_<PalCodeName>`（\<PalCodeName\>の部分をパルのコードネームに置き換え）を検索します。

#### パルのコードネームを検索するには、**[こちら](https://github.com/KURAMAAA0/PalModding/blob/main/PalNamesCodeNames.txt "こちら")** のリンクからお目当てのパルを検索してください。（パルの英語名です）

最初の結果をダブルクリックし、**最後に**`_Skeleton`がないものを選んでください。

次に一つ上のパルの名前のフォルダに移動します。一番上にある`Folders`をクリックしてください。

![FMODEL2](https://github.com/KURAMAAA0/PalModding/assets/58988462/6c0d144c-5a52-465b-8d76-f404d6ab3474)

目的のパルのフォルダを右クリックし、Save Folder's Packages **Textures** (.png)をクリックします。

目的のパルのフォルダを右クリックし、Save Folder's Packages **Models** (.psk)をクリックします。

これで**Blender**を開いて作業することができます。

## Importing the 3D models in Blender

:::tip
    Make sure you either scale the armature and model down by 0.01 after import, or while exporting, scale should be set 0.1.

    Make sure you are also disabling `Add Leaf Bones` on export.

    The armature name should be Armature
    ![Armature](./assets/Armature.png)
:::

In Blender, click on `File -> Import -> Unreal PSK (.psk/.pskx)`

![BLENDER1](https://github.com/KURAMAAA0/PalModding/assets/58988462/98e6e332-75d2-4c60-ad49-d557459ce8d4)

Go to the output folder you set when changing FModel's settings, `Output -> Exports` go through the folders until you find the `SK_PalCodeName.psk` file and import it.
The textures should be in the same folder as the .psk, apply them to the Pal model if you don't want to replace it, otherwise ignore.
We'll make `Depresso` (code name: `NegativeKoala`) into a completely sleep-deprived `Depresso` by editing his model.
We will also change his textures, go to **this section** if you want to learn how to replace/edit images (same process as replacing/editing textures).


## Modifying the 3D models in Blender
If you only want to modify your Pal 3D model, you can keep the model present in the viewport and do the modifications directly on it.
If your model has a black background for his eyes and mouth, select the texture(s) with the issue, go to the **Shader Editor**, plug the **Alpha** channel of the texture into the **Alpha** property of the Principled BSDF.

![BLENDERSHADER1](https://github.com/KURAMAAA0/PalModding/assets/58988462/c988b8db-3d1a-48ed-b597-8beda449cfb8)



Then in the Material Properties tab change the `Blend Mode` to `Alpha Blend` and the `Shadow Mode` to `None`.

![BLENDERSHADER2](https://github.com/KURAMAAA0/PalModding/assets/58988462/41e5a112-f107-468d-b69b-e38b9a36bfce)


Your Pal should now be fixed and working!

![BLENDERSHADER3](https://github.com/KURAMAAA0/PalModding/assets/58988462/d0b93d38-ea6d-4a27-9ac4-14beab123f1f)



Here's the poorly made `Sleep Deprived Depresso`, as well as his textures changed.

![BLENDER3](https://github.com/KURAMAAA0/PalModding/assets/58988462/3cd4b1f6-17d9-4160-8c04-d0acc640ce92)


To export, simply go to `File > Export > FBX (.fbx)` and choose where you want to export it.

Let's proceed with the final step, [packaging the file in UE5 to get a mod file!](https://github.com/KURAMAAA0/PalModding/blob/main/Assset%20Swap%20Guide/PackagingInUE5.md)
