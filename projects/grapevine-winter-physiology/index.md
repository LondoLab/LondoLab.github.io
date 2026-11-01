---
layout: project
title: Grapevine cold hardiness and dormancy physiology
hero: /images/wintervineyard.jpg
hero_alt: A dormant vineyard in winter
hero_caption: A dormant Finger Lakes vineyard in deep winter
lead: How grapevine buds gain cold hardiness in autumn, hold it through dormancy, and give it up again in spring.
---

## Overview

Grapevine survives winter by moving through a seasonal cycle of dormancy and cold acclimation. In autumn the buds enter dormancy and gain freezing tolerance. Through the coldest months they hold a deep hardiness that tracks the weather. In late winter they begin to lose that hardiness as they prepare to grow. The timing of each step decides how much of the crop survives a hard freeze or a spring frost.

## What we ask

We study what sets the rate of acclimation in fall and deacclimation in spring, how chilling and warm spells move that timing, and how far a genotype can be pushed before it loses hardiness too early. We compare species and cultivars across the genus *Vitis* to find the traits that carry the most winter survival.

## How we measure it

We measure bud freezing tolerance directly with differential thermal analysis, which detects the small burst of heat released as each bud freezes. We pair those measurements with field phenology, controlled chilling and forcing, and long weather records, then build the pattern into models that run across a whole dormant season.

{% include section.html %}

## Figures

<div class="figure-grid">
{% include research-figure.html
  image="/images/research/cold-xray-vinifera.jpg"
  caption="X-ray microtomography of <em>V. vinifera</em> buds after 0, 2, 8 and 13 days of forcing, tracking the inflorescences as buds move toward budbreak."
  credit="Kovaleski et al. 2019, Scientific Reports" doi="10.1038/s41598-019-51415-2" license="CC BY 4.0" %}
{% include research-figure.html
  image="/images/research/cold-xray-riparia.jpg"
  caption="The same X-ray time series in the cold-hardy wild species <em>V. riparia</em>."
  credit="Kovaleski et al. 2019, Scientific Reports" doi="10.1038/s41598-019-51415-2" license="CC BY 4.0" %}
{% include research-figure.html
  image="/images/research/cold-deacclimation-design.png"
  caption="Buds collected at five points from November to March were forced at 22 °C to measure how fast they lose cold hardiness as chill accumulates."
  credit="Wang and Londo 2026, Physiologia Plantarum" doi="10.1111/ppl.71056" license="CC BY 4.0" %}
{% include research-figure.html
  image="/images/research/cold-deacclimation-chill.png"
  caption="Deacclimation rate of 'Riesling' buds rises with accumulated chill, shown as absolute and relative rates."
  credit="Kovaleski et al. 2018, AoB PLANTS" doi="10.1093/aobpla/ply066" license="US public domain" %}
{% include research-figure.html
  image="/images/research/cold-chilling-warming-model.png"
  caption="Model of how chilling accumulation and warm temperature exposure shape bud gene expression during deacclimation."
  credit="Wang and Londo 2026, Physiologia Plantarum" doi="10.1111/ppl.71056" license="CC BY 4.0" %}
{% include research-figure.html
  image="/images/research/cold-aba-deacclimation-model.png"
  caption="Proposed molecular control of deacclimation and budbreak, with ABA acting as a master regulator of cold hardiness and dormancy."
  credit="Kovaleski and Londo 2019, Plant Science" doi="10.1016/j.plantsci.2019.110178" license="CC BY-NC-ND 4.0" %}
{% include research-figure.html
  image="/images/research/cold-phenology.png"
  caption="Timing of budbreak, bloom and veraison across the USDA cold-hardy grape collection in Geneva, NY, from 2008 to 2013."
  credit="Gutierrez et al. 2021, Scientific Reports" doi="10.1038/s41598-021-03783-x" license="CC BY 4.0" %}
{% include research-figure.html
  image="/images/research/cold-nyus2-dataset.png"
  caption="Freezing tolerance (LT50) records behind the NYUS.2 model, by collection site and cultivar."
  credit="Wang et al. 2024, Horticulture Research" doi="10.1093/hr/uhad286" license="CC BY 4.0" %}
{% include research-figure.html
  image="/images/NYUS2.png"
  caption="NYUS.2 turns daily weather into a running estimate of bud freezing tolerance." %}
{% include research-figure.html
  image="/images/gallery/30.jpg"
  caption="Budburst marks the end of dormancy and the point of greatest frost risk." %}
</div>

{% include section.html %}

## Tools and resources

NYUS.2 is our open source model that predicts grapevine bud freezing tolerance across North America through the dormant season. It turns daily weather into a running estimate of hardiness that growers and researchers can use.

{%
  include button.html
  link="https://github.com/imbaterry11/NYUS.2"
  text="NYUS.2 model"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}
