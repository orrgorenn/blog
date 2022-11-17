import { getToday } from './getToday.mjs'

export const frontmatter = {
  posts: `---
layout: ../../layouts/BlogPost.astro
title:
slug:
description:
pubDate: ${getToday()[0]} ${getToday()[1]} ${getToday()[2]}
category: 
heroImage: /placeholder.png
---

Write here
`,
  projects: `---
title:
subtitle:
createdAt: ${new Date().getTime()}
tags: []
image:
  src:
  alt:
---

Write here
`
}
