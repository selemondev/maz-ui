---
title: MazGallery
description: MazGallery is a standalone component to display images in a container and has many options and actions
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

<!--@include: ./../.vitepress/mixins/getting-started.md-->

## Basic usage

<MazGallery
  :images="images"
  :height="400"
/>

```vue
<template>
  <MazGallery
    :images="images"
    :height="400"
  />
</template>

<script lang="ts" setup>
  import MazGallery from 'maz-ui/components/MazGallery'

  const images = [
    'https://placekitten.com/640/500',
    { src: 'https://placekitten.com/640/600', alt: 'image description' },
    { src: 'https://placekitten.com/640/700', alt: 'image description' },
    'https://placekitten.com/640/800',
    'https://placekitten.com/640/1000',
    'https://placekitten.com/800/800'
  ]
</script>
```

## Props & Events emitted

<ComponentPropDoc component="MazGallery" />

<script lang="ts" setup>
  const images = [
    'https://placekitten.com/640/500',
    { src: 'https://placekitten.com/640/600', alt: 'image description' },
    { src: 'https://placekitten.com/640/700', alt: 'image description' },
    'https://placekitten.com/640/800',
    'https://placekitten.com/640/1000',
    'https://placekitten.com/800/800'
  ]
</script>
