---
sidebar_position: 3
---

# PDKの起動 - Part 3

## これまでのステップを全てこなし、遂に準備が整った! 

## `Pal.uproject`ファイルをダブルクリックしUnreal Engineで開く!


:::note
モジュールが古く再コンパイルする必要があると表示されたら、**YES**を押します。
:::

:::warning
Windowsは長いファイルパスを**本当に**嫌います。**モジュールの再コンパイルが必要だと繰り返し表示され続ける場合は、ファイルパスが長すぎる可能性があります。**
git cloneを使わずにZIPをダウンロードした場合は特にそうでしょう。
`palworldmoddingkit`フォルダの名前を変更したり全ての`-`を削除してみて下さい。また、ドライブのルートに近づけてみて下さい。
:::

:::warning
Wwiseは起動する度に現在のUnreal Engineバージョンと互換性がないと言ってきますが、**YES**を押します。
:::

:::warning
ファイルがUnreal Engineで開かず代わりに関連付けを求められた場合は、Unreal Engineで開き、そこからファイルを開いて下さい。
:::

:::note
起動時にWwiseプロジェクトパスの問題に関するポップアップが表示されるかもしれませんが、無視して隅のXボタンを押してポップアップを閉じます。
![WwisePathIssue](./assets/ResetWwisePath.png)
:::

:::danger
何も起こってないと思うかもしれませんが、Unreal Engineはエディタを開く前にバックグラウンドで多くのものをコンパイルする必要があります。使用しているコンピュータのスペックによっては**長い**時間が掛かる場合があります。
:::
