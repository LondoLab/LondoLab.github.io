---
title: Team
nav:
  order: 6
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

# Current Lab Members

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}
{% include list.html data="members" component="portrait" filter="role == 'tech'" %}
{% include list.html data="members" component="portrait" filter="role == 'postdoc'" %}
{% include list.html data="members" component="portrait" filter="role == 'phdc'" %}
{% include list.html data="members" component="portrait" filter="role == 'phd'" %}
{% include list.html data="members" component="portrait" filter="role == 'undergrad'" %}
{% include list.html data="members" component="portrait" filter="role == 'mascot'" %}


{% include section.html background="images/background.jpg" dark=true %}

# Cornell Agritech Summer Scholars
{% include list.html data="members" component="portrait" filter="role == 'summer-scholar'" %}

{% include section.html %}

# Lab Alumni
{% include list.html data="members" component="portrait" filter="role == 'alum'" %}
{% include list.html data="members" component="portrait" filter="role == 'tech-alum'" %}
{% include list.html data="members" component="portrait" filter="role == 'intern'" %}

{% include section.html %}

{% capture content %}

{% include figure.html image="images/group.jpg" %}


{% endcapture %}

{% include grid.html style="square" content=content %}
