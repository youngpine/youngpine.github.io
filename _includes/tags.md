<div id="tags">
<h2>标签</h2>
<ul>
{% for tag in site.tags %}
<li id="{{ tag[0] }}-ref"><a href="/page.html">{{ tag[0] }}</a></li>
{% endfor %}
{% for tag in site.tags %}
<li id="{{ cat[0] }}-ref"><a href="/production.html">{{ cat[0] }}</a></li>
{% endfor %}
</ul>
</div>