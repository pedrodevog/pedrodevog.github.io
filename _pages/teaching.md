---
layout: page
permalink: /teaching/
title: Teaching
description: Teaching activities, educational service, and mentorship.
nav: true
nav_order: 4
calendar: false
---

{% assign cv_sections = site.data.cv.cv.sections %}
{% assign teaching_entries = cv_sections.Experience | where: 'category', 'teaching' %}
{% assign recognition_entries = cv_sections.Awards | where: 'category', 'teaching' %}

<div class="cv">
  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium">Teaching Experience</h3>
    <div>
      {% if teaching_entries and teaching_entries.size > 0 %}
        {% assign entries = teaching_entries %}
        {% include cv/experience.liquid hide_location=true %}
      {% else %}
        <p>No teaching experience entries configured in <code>_data/cv.yml</code>.</p>
      {% endif %}
    </div>
  </div>

  <div class="card mt-3 p-3">
    <h3 class="card-title font-weight-medium">Recognition</h3>
    <div>
      {% if recognition_entries and recognition_entries.size > 0 %}
        {% assign entries = recognition_entries %}
        {% include cv/awards.liquid %}
      {% else %}
        <p>No recognition entries configured in <code>_data/cv.yml</code>.</p>
      {% endif %}
    </div>
  </div>
</div>
