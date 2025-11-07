---
title: Team
nav:
  order: 6
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

All current and previous members of the lab.

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'Principal Investigator'" %}
{% include list.html data="members" component="portrait" filter="role != 'Principal Investigator'" %}

{% include section.html background="images/background.jpg" dark=true %}

Lab Alumni

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
