<!-- header -->
<div id="header">
      <h1><a href="/" target="_self">松的博客</a></h1>
      <ul class="nav">
          <li><a href="/" target="_self">首页</a></li>
          <li><a href="/page.html" target="_self">博文</a></li>
          <li><a href="/production.html" target="_self">作品</a></li>
          <li><a href="/message.html" target="_self">留言</a></li>
          <li><a href="/about.html" target="_self">关于</a></li>
      </ul>
      <div id="search">
       <script type="text/javascript">
			function searchSubmit(){
				var s_keyword = document.getElementById("search_name").value; 
				if(s_keyword == '' || s_keyword == '搜索'){
				    alert("请输入您想搜索的关键词");
				    return false;
			    }
			}
			</script>
      <form method="post" action="#" name="c_search">
      <input type="text" id="search_text" name="search_text" onfocus="if(this.value == '搜索') {this.value = '';}" onblur="if (this.value == '') {this.value = '搜索';}" /><input type="submit" id="search_button" name="search_button" value="搜索" /></input></input>
      </form>
      </div>
    </div>
<!-- /header -->
