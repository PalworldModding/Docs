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

## Blenderで3Dモデルをインポートする

:::tip
    インポート後にアーマチュアとモデルを0.01倍にスケーリングするか、エクスポート時にスケールを0.1に設定してください。

    エクスポート時に`Add Leaf Bones`を無効にしていることを確認してください。

    アーマチュアの名前はArmatureである必要があります。
    ![Armature](./assets/Armature.png)
:::

Blenderで、`File -> Import -> Unreal PSK (.psk/.pskx)`をクリックします。

![BLENDER1](https://github.com/KURAMAAA0/PalModding/assets/58988462/98e6e332-75d2-4c60-ad49-d557459ce8d4)

FModelの設定を変更する際に設定した出力フォルダに移動し、`Output -> Exports`を経由して、`SK_PalCodeName.psk`ファイルを見つけてインポートします。

テクスチャは.pskファイルと同じフォルダにあるはずです。Palモデルに適用する場合は、テクスチャを適用してください。それ以外の場合は無視してください。

ンダコアラ（コードネーム:`NegativeKoala`）を完全に睡眠不足のンダコアラに変更します。そのモデルを編集します。
また、テクスチャも変更します。画像の置換え/編集方法については、**このセクション**に移動してください。


## Blenderで3Dモデルを編集する
パルの3Dモデルを変更するだけの場合は、ビューポートにモデルを表示したまま、直接モデルを変更できます。
モデルの目と口の背景が黒い場合は、テクスチャを選択して**Shader Editor**に移動し、テクスチャの**アルファ**チャンネルをPrincipled BSDFの**アルファ**プロパティに接続します。

![BLENDERSHADER1](https://github.com/KURAMAAA0/PalModding/assets/58988462/c988b8db-3d1a-48ed-b597-8beda449cfb8)

次に、マテリアルプロパティタブで`Blend Mode`を`Alpha Blend`、`Shadow Mode`を`None`に変更します。

![BLENDERSHADER2](https://github.com/KURAMAAA0/PalModding/assets/58988462/41e5a112-f107-468d-b69b-e38b9a36bfce)

これでパルの見た目が修正されるはずです！

![BLENDERSHADER3](https://github.com/KURAMAAA0/PalModding/assets/58988462/d0b93d38-ea6d-4a27-9ac4-14beab123f1f)

こちらが手抜きながらも作成された睡眠不足ンダコアラと、テクスチャが変更された様子です。

![BLENDER3](https://github.com/KURAMAAA0/PalModding/assets/58988462/3cd4b1f6-17d9-4160-8c04-d0acc640ce92)

エクスポートするには`File > Export > FBX (.fbx)` を選択し、エクスポート先を選択します。

そして最後のステップ、[UE5でファイルをパッケージ化してModファイルを取得！](https://github.com/KURAMAAA0/PalModding/blob/main/Assset%20Swap%20Guide/PackagingInUE5.md)に進みましょう！　
