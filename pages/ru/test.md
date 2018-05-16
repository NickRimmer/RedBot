---
layout: empty
permalink: /pages/ru/test2/
---

pages:
{% for p in site.pages %}
    {{p.url}}
{% endfor %}