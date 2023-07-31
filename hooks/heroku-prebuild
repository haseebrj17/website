#!/bin/bash

echo "Download legal pages"

curl \
  -H "Accept: application/vnd.github.raw" \
  -H "Authorization: Bearer ${PAT}"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/dicebear/legal/contents/docs/legal/site-notice.md \
  > docs/legal/site-notice.md

curl \
  -H "Accept: application/vnd.github.raw" \
  -H "Authorization: Bearer ${PAT}"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/dicebear/legal/contents/docs/legal/privacy-policy.md \
  > docs/legal/privacy-policy.md

curl \
  -H "Accept: application/vnd.github.raw" \
  -H "Authorization: Bearer ${PAT}"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/dicebear/legal/contents/docs/legal/de/site-notice.md \
  > docs/legal/site-notice/de.md

curl \
  -H "Accept: application/vnd.github.raw" \
  -H "Authorization: Bearer ${PAT}"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/dicebear/legal/contents/docs/legal/de/privacy-policy.md \
  > docs/legal/privacy-policy/de.md
