{% for tag in site.tags %}
<li id="{{ tag[0] }}-ref">--{{ tag[0] }}--</li>
{% endfor %}