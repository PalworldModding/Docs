---
sidebar_position: 6
---

# UE5を使用したMODファイルのパッケージング

このガイドは[KURAMAAA0](https://github.com/KURAMAAA0/PalModding)によって書かれました。

このガイドは[Latenos](https://github.com/Latenos/PalWorldModDocs)によって日本語に翻訳されました。

このセクションのほとんどは、[このガイド](https://www.abbiedoobie.com/2023/10/13/modding-robocop-rogue-city-and-other-ue-5-games/)に強く影響を受けています！非常に役立ちました。

Unreal Engine 5.1.1を起動します。エンジンの言語は英語で説明を行います。

![UE1](https://github.com/KURAMAAA0/PalModding/assets/58988462/ca1c0f4c-3d4d-4559-aded-fa5cd8c20c25)

新しいプロジェクトを作成します：`Games -> Blank Project`、プロジェクト名は `Pal` としてください **(プロジェクト名が "Pal" であることが非常に重要です。そうでないとMODが読み込まれません！)**

プロジェクトのデフォルトは次のとおりです：
- `Blueprint`
- Target Platform: `Desktop`
- Starter Content: `チェックを外す`
- Raytracing: `チェックを外す`

![UE2](https://github.com/KURAMAAA0/PalModding/assets/58988462/0782bbbe-9b49-4597-b530-9805e1f14561)

上部の`Platforms`をクリックし、次に`Packaging Settings`をクリックします。

![UESETTING](https://github.com/KURAMAAA0/PalModding/assets/58988462/5c65653c-c1de-4f95-9e40-e08622395890)

`Use Io Store`のチェックを外し、`Generate Chunks`のチェックを入れます。

![UESETTING2](https://github.com/KURAMAAA0/PalModding/assets/58988462/41cfcb81-5046-4388-bf5d-7fa8253f8f38)

検索バーで`Cook everything`を検索し、`Cook everything in the project content directory (…)`のチェックを入れます。

![UESETTING3](https://github.com/KURAMAAA0/PalModding/assets/58988462/2967a6ba-031e-4464-b245-b67ac9f140a8)

プロジェクト内にFModelと同じフォルダ構造を作成します。Content Browserはすでに`Content`から開始されているため、`Pal\Content\`は無視します。

**例えば**、ンダコアラのモデル、身体のテクスチャ、目のテクスチャを変更した場合、これらのファイルに到達するためのフォルダ構造を作成する必要があります。

![UEPATH1](https://github.com/KURAMAAA0/PalModding/assets/58988462/e86dc337-3c7d-4918-8646-448bbd962089)

![UE3](https://github.com/KURAMAAA0/PalModding/assets/58988462/f737c24f-8954-411d-a51f-5545d5ec050c)

すべての**変更済み**のファイルを対応するフォルダにドロップします。可能であれば、フォルダに入るファイルを一度にすべてドロップします。Import Allをクリックし、FBXのインポートエラーを閉じます。

![UE4](https://github.com/KURAMAAA0/PalModding/assets/58988462/bbbee6b6-fb03-4676-921c-4fecfde55c0b)

現在、テクスチャがうまく表示されていません。これは単純に透明なマテリアルを手動で設定する必要があるためです。
通常は透明なテクスチャ（目、口など）を使用しているマテリアル（球体）をダブルクリックします。
**Blend Mode**を**Translucent**に変更し、**A**（アルファ）を**Opacity**に接続します。

![UE5](https://github.com/KURAMAAA0/PalModding/assets/58988462/ec1e61ba-f8b8-4bd5-8b22-0588f51a4935)

必要なすべてのマテリアルに対してこれを行い、保存することを忘れないでください（右下隅）。

![UE6](https://github.com/KURAMAAA0/PalModding/assets/58988462/85905fae-a8f9-4dda-bac6-7ee05b3c1011)

追加したすべてのファイルがFModelで元々設定されていた名前と**完全に同じ名前**であることを確認してください。

私の場合：
- **DeprivedDepresso** は **SK_NegativeKoala** になります
- **DeprivedDepresso_PhysicsAsset** は **PA_NegativeKoala_PhysicsAsset** になります
- **DeprivedDepresso_Skeleton** は **SK_NegativeKoala_Skeleton** になります

SK_NegativeKoala_Skeletonは元々他のファイルと同じフォルダに含まれていなかったため、新しいフォルダを作成して現在のフォルダから移動する必要があります。
常にパスとファイル名を尊重してください。

![UEPATH2](https://github.com/KURAMAAA0/PalModding/assets/58988462/817dda65-6094-4bf3-9ff6-cec499f17592)

![UE4 5](https://github.com/KURAMAAA0/PalModding/assets/58988462/2f0cfbef-06c0-4c18-b57b-d5f4d9dc899c)

すべてを保存します（右下隅）。
`Content`フォルダに戻り、右クリックして、`Miscellaneous`にマウスを合わせ、`Data Asset`をクリックします。

![UE7](https://github.com/KURAMAAA0/PalModding/assets/58988462/a75cf69e-50d5-480b-b695-2fefde989276)

**PrimaryAssetLabel**を選択します。

![UE8](https://github.com/KURAMAAA0/PalModding/assets/58988462/ea81eeb5-4a13-407e-be31-9d01c842ae9f)

名前を "Label_YourModName" とします。私は "Label_DeprivedDepresso" としました。
ダブルクリックして、以下の変更を行います：
- Priorityを**1以上**に設定します
- Chunk IDを**1000以上**に設定します。これは最終的なmodの .pak で、他の .pak ファイルと区別するのに役立ちます。
- Cook Ruleを**Always Cook**に設定します
- My Directory内のLabel Assetsに**チェックを入れます**
すべてを保存します（右下隅）。

**Platforms, Windows, Shipping**をクリックし、次に**Platforms, Windows, Package Project**をクリックします。

するとmodのパッケージングが開始されます。しばらく時間がかかるので、お茶を飲みながらお待ちください！あるいはコーヒーを...

![BLENDER3](https://github.com/KURAMAAA0/PalModding/assets/58988462/4be2947c-6056-4f43-9d9e-3c30fe1928b2)

パッケージングが完了すると、"Windows"フォルダが作成されます。フォルダを開きます：`Windows -> Pal -> Content -> Paks`。
Paksフォルダには、おそらく2つの .pak ファイルが含まれています。**pakchunk0-Windows** とあなたのファイルです。
私の場合、Chunk IDを1000に設定したため、pakchunk1000-Windowsです。
あなたのゲームのローカルファイルに移動する必要があります。

![STEAM1](https://github.com/KURAMAAA0/PalModding/assets/58988462/c8563873-11e1-4376-a6da-09df5fdd2c0e)

.pak ファイルを `D:\Palworld\Pal\Content\Paks` にコピーします。
ファイル名を *YourModName***_P** に変更し、Palworldを起動します。以上です！
(**あなたの .pak ファイル名は " _P " で終わる必要があります。それ以外の場合、ロードされません。**)
美しい作品をお楽しみください。


### 問題と修正
問題が発生し、修正できた場合は、Discordのkurama0にDMしてください。問題と修正をここに追加できるかもしれません！




