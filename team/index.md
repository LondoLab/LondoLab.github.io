---
title: People
nav:
  order: 1
  tooltip: Meet the lab
---

# {% include icon.html icon="fa-solid fa-users" %}People

{% include section.html %}

## Current Lab Members

<div class="member-list">
{%- assign current_roles = "principal-investigator,tech,postdoc,programmer,visiting-scholar,phdc,phd,undergrad" | split: "," -%}
{%- for role in current_roles -%}
{%- assign group = site.members | where: "role", role -%}
{%- for m in group -%}
{% include member-row.html member=m %}
{%- endfor -%}
{%- endfor -%}
</div>

{%- assign summer = site.members | where: "role", "summer-scholar" -%}
{% if summer.size > 0 %}
## Cornell AgriTech Summer Scholars

<div class="member-list">
{%- for m in summer -%}
{% include member-row.html member=m %}
{%- endfor -%}
</div>
{% endif %}

{% include section.html %}

## Lab Alumni

<div class="member-list">
{%- assign alum_roles = "alum,tech-alum,intern" | split: "," -%}
{%- for role in alum_roles -%}
{%- assign group = site.members | where: "role", role -%}
{%- for m in group -%}
{% include member-row.html member=m %}
{%- endfor -%}
{%- endfor -%}
</div>

{% include section.html %}

{% capture content %}

{% include figure.html image="images/group.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
