---
layout: empty
permalink: /pages/ru/test2/
sitemap: false
---

pages:
{% for p in site.pages %}
    {{p.url}}
{% endfor %}