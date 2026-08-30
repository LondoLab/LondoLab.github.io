---
title: People
nav:
  order: 1
  tooltip: Meet the lab
---

<div class="magic-hero">
  <div class="magic-hero-text">
    <h1>{% include icon.html icon="fa-solid fa-users" %}Making Magic</h1>
  </div>
  <div class="magic-hero-photo">
    <img src="{{ 'images/group.jpg' | relative_url }}" alt="The Londo Lab team in the vineyard" loading="lazy">
  </div>
</div>

{% include section.html %}

## Current Lab Members

<div class="member-list">
{%- assign current_roles = "principal-investigator,tech,postdoc,programmer,phdc,phd,undergrad" | split: "," -%}
{%- for role in current_roles -%}
{%- assign group = site.members | where: "role", role -%}
{%- for m in group -%}
{% include member-row.html member=m %}
{%- endfor -%}
{%- endfor -%}
</div>

## Cornell AgriTech Summer Scholars

<div class="member-list">
{%- assign scholars = site.members | where: "role", "summer-scholar" | sort: "order" -%}
{%- for m in scholars -%}
{% include member-row.html member=m %}
{%- endfor -%}
</div>

{% include section.html %}

## Lab Alumni

<div class="member-list">
{%- assign alumni = site.members | where_exp: "m", "m.role == 'alum' or m.role == 'tech-alum' or m.role == 'intern' or m.role == 'visiting-scholar'" | sort: "order" -%}
{%- for m in alumni -%}
{% include member-row.html member=m %}
{%- endfor -%}
</div>

{% include section.html %}

{% capture content %}

{% include figure.html image="images/group.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
