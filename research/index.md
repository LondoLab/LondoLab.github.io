---
title: Publications
nav:
  order: 3
  tooltip: Published works
---

<div class="pubs-hero">
  <div class="pubs-hero-left">
    <h1>{% include icon.html icon="fa-solid fa-book" %}Publications</h1>
  </div>
  <div class="pubs-hero-right">
    {% include pub-network.html %}
  </div>
</div>

{% include section.html %}

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" %}
