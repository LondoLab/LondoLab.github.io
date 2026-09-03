---
title: Tools & Resources
nav:
  order: 4
  tooltip: Models, data, and grower tools
---

# {% include icon.html icon="fa-solid fa-toolbox" %}Tools &amp; Resources

Open models, data, and decision tools from the lab and our collaborators.

{% include section.html %}

{% capture text %}

The Network for Environment and Weather Applications delivers local weather data and crop, pest, and disease models for growers across the Northeast.

{%
  include button.html
  link="https://newa.cornell.edu"
  text="Open NEWA"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}
{% include feature.html image="images/tool-newa.png" link="https://newa.cornell.edu" title="NEWA" flip=true text=text %}

{% capture text %}

A NEWA tool that tracks grapevine cold hardiness and freeze risk from local weather stations through the dormant season.

{%
  include button.html
  link="https://newa.cornell.edu/grape-cold-hardiness/"
  text="Open ColdSnap"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}
{% include feature.html image="images/tool-coldsnap.png" link="https://newa.cornell.edu/grape-cold-hardiness/" title="ColdSnap Application" flip=true text=text %}

{% capture text %}

Our open-source machine-learning model for predicting grapevine bud freezing tolerance across North America throughout the dormant season.

{%
  include button.html
  link="https://cornell-tree-fruit-physiology.shinyapps.io/North_America_Grape_Freezing_Tolerance/"
  text="Run the model"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}
{%
  include button.html
  type="source"
  link="https://github.com/imbaterry11/NYUS.2"
  flip=true
  style="bare"
%}

{% endcapture %}
{% include feature.html image="images/tool-nyus2.png" link="https://cornell-tree-fruit-physiology.shinyapps.io/North_America_Grape_Freezing_Tolerance/" title="NYUS.2" flip=true text=text %}

{% capture text %}

An interactive dashboard of grapevine cold hardiness measurements and model output.

{%
  include button.html
  link="https://cornell-tree-fruit-physiology.shinyapps.io/VineColD/"
  text="Open VineColD"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}
{% include feature.html image="images/tool-vinecold.png" link="https://cornell-tree-fruit-physiology.shinyapps.io/VineColD/" title="VineColD" flip=true text=text %}
