set params=/s /e /y

for %%l in (de,fr,ja,ru,uk,zh-hans) do (
  for %%f in (md,mdx,json) do (
    xcopy src\pages\**.%%f i18n\%%l\docusaurus-plugin-content-pages %params%
  )
  for %%f in (jpg,png,gif,json) do (
    xcopy src\pages\**.%%f i18n\%%l\docusaurus-plugin-content-docs\current %params%
  )
  for %%f in (md,mdx,jpg,png,gif,css,json) do (
    xcopy docs\**.%%f i18n\%%l\docusaurus-plugin-content-docs\current %params%
  )
  xcopy blog\** i18n\%%l\docusaurus-plugin-content-blog %params%
)