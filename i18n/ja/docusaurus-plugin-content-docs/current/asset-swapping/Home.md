---
sidebar_position: 1
---

# 必要なツールと概要

このガイドは[KURAMAAA0](https://github.com/KURAMAAA0/PalModding)によって書かれました。

このガイドは[Latenos](https://github.com/Latenos/PalWorldModDocs)によって日本語に翻訳されました。

### アセット差し替えMODの作り方

このガイドでは、Palworldのアセット差し替えMODを作成する方法について説明します。

このガイドを読むと、パルやNPCなどのリグ付き3Dアセット、アイテム、武器、オブジェクトなどの静的な3Dアセット、パルのテクスチャ、プレイヤーのテクスチャ、ワールドのテクスチャ、アイコンやHUDなどの画像テクスチャのアセット差し替えMODを作成できるようになります。

## 必要なツール

- [FModel](https://fmodel.app/)を使用してゲームファイルを調べ、エクスポートします。
    - `Palworld Mappings File` ([直接ダウンロード](https://github.com/KURAMAAA0/PalModding/raw/main/Assset%20Swap%20Guide/Mappings.usmap "直接ダウンロード"))がパルワールドでFModelを使用するために必要です。
- [Unreal Engine 5.1.1](https://www.unrealengine.com/en-US/download)を使用して最終的にMODをパッケージ化します。
  - *パルワールドが使用しているバージョンと一致させるため、必ず 5.1.1 を選択してください。*
- [Blender](https://www.blender.org/download/)を使用して3Dモデルを編集し、エクスポートします。
  - DarklightGames氏制作の psk/psa importerアドオン (https://github.com/DarklightGames/io_scene_psk_psa/releases) がゲームファイルをBlenderにインポートするのに必要です。

さぁ、始めよう。
