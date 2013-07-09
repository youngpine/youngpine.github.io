<div id="tags">
<h2>标签</h2>
{% for tag in site.tags %}
<li id="{{ tag[0] }}-ref">--{{ tag[0] }}--</li>
{% endfor %}
</ul>
</div>