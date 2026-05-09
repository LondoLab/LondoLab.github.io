---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

We are always interested in forming new collaborations with scientists and growers in New York and at the international scale. Please reach out to the lab by contacting Jason via email.

{%
  include button.html
  type="email"
  text="Email"
  link="jpl275@cornell.edu"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="google.com/maps?um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=Kec7zKNKxdCJMcdIhoOdj-0i&daddr=630+W+North+St,+Geneva,+NY+14456"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/group.jpg"
  caption=""
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/grape_cluster.jpg"
  caption=""
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
**Address**  
Cornell AgriTech  
630 W North St  
Geneva, NY 14456
{% endcapture %}

{% capture col2 %}
**Department**  
School of Integrative Plant Science  
Horticulture Section  
Cornell University
{% endcapture %}

{% capture col3 %}
**Get in touch**  
Prospective students and collaborators —  
email Jason to start a conversation.
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
