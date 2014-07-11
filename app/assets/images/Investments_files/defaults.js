<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Action Controller: Exception caught</title>
  <style>
    body {
      background-color: #FAFAFA;
      color: #333;
      margin: 0px;
    }

    body, p, ol, ul, td {
      font-family: helvetica, verdana, arial, sans-serif;
      font-size:   13px;
      line-height: 18px;
    }

    pre {
      font-size: 11px;
      white-space: pre-wrap;
    }

    pre.box {
      border: 1px solid #EEE;
      padding: 10px;
      margin: 0px;
      width: 958px;
    }

    header {
      color: #F0F0F0;
      background: #C52F24;
      padding: 0.5em 1.5em;
    }

    h1 {
      margin: 0.2em 0;
      line-height: 1.1em;
      font-size: 2em;
    }

    h2 {
      color: #C52F24;
      line-height: 25px;
    }

    .details {
      border: 1px solid #D0D0D0;
      border-radius: 4px;
      margin: 1em 0px;
      display: block;
      width: 978px;
    }

    .summary {
      padding: 8px 15px;
      border-bottom: 1px solid #D0D0D0;
      display: block;
    }

    .details pre {
      margin: 5px;
      border: none;
    }

    #container {
      box-sizing: border-box;
      width: 100%;
      padding: 0 1.5em;
    }

    .source * {
      margin: 0px;
      padding: 0px;
    }

    .source {
      border: 1px solid #D9D9D9;
      background: #ECECEC;
      width: 978px;
    }

    .source pre {
      padding: 10px 0px;
      border: none;
    }

    .source .data {
      font-size: 80%;
      overflow: auto;
      background-color: #FFF;
    }

    .info {
      padding: 0.5em;
    }

    .source .data .line_numbers {
      background-color: #ECECEC;
      color: #AAA;
      padding: 1em .5em;
      border-right: 1px solid #DDD;
      text-align: right;
    }

    .line {
      padding-left: 10px;
    }

    .line:hover {
      background-color: #F6F6F6;
    }

    .line.active {
      background-color: #FFCCCC;
    }

    a { color: #980905; }
    a:visited { color: #666; }
    a:hover { color: #C52F24; }

      #route_table {
    margin: 0 auto 0;
    border-collapse: collapse;
  }

  #route_table td {
    padding: 0 30px;
  }

  #route_table tr.bottom th {
    padding-bottom: 10px;
    line-height: 15px;
  }

  #route_table .matched_paths {
    background-color: LightGoldenRodYellow;
  }

  #route_table .matched_paths {
    border-bottom: solid 3px SlateGrey;
  }

  #path_search {
    width: 80%;
    font-size: inherit;
  }

  </style>

  <script>
    var toggle = function(id) {
      var s = document.getElementById(id).style;
      s.display = s.display == 'none' ? 'block' : 'none';
      return false;
    }
    var show = function(id) {
      document.getElementById(id).style.display = 'block';
    }
    var hide = function(id) {
      document.getElementById(id).style.display = 'none';
    }
    var toggleTrace = function() {
      return toggle('blame_trace');
    }
    var toggleSessionDump = function() {
      return toggle('session_dump');
    }
    var toggleEnvDump = function() {
      return toggle('env_dump');
    }
  </script>
</head>
<body>

<header>
  <h1>Routing Error</h1>
</header>
<div id="container">
  <h2>No route matches [GET] &quot;/javascripts/defaults.js&quot;</h2>

  
<p><code>Rails.root: /Users/kjgill/prodigy_finance/investments</code></p>

<div id="traces">
    <a href="#" onclick="hide(&#39;Framework-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Application-Trace&#39;);; return false;">Application Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Full-Trace&#39;);show(&#39;Framework-Trace&#39;);; return false;">Framework Trace</a> |
    <a href="#" onclick="hide(&#39;Application-Trace&#39;);hide(&#39;Framework-Trace&#39;);show(&#39;Full-Trace&#39;);; return false;">Full Trace</a> 

    <div id="Application-Trace" style="display: block;">
      <pre><code></code></pre>
    </div>
    <div id="Framework-Trace" style="display: none;">
      <pre><code>actionpack (4.1.1) lib/action_dispatch/middleware/debug_exceptions.rb:21:in `call&#39;
actionpack (4.1.1) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;
railties (4.1.1) lib/rails/rack/logger.rb:38:in `call_app&#39;
railties (4.1.1) lib/rails/rack/logger.rb:20:in `block in call&#39;
activesupport (4.1.1) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;
activesupport (4.1.1) lib/active_support/tagged_logging.rb:26:in `tagged&#39;
activesupport (4.1.1) lib/active_support/tagged_logging.rb:68:in `tagged&#39;
railties (4.1.1) lib/rails/rack/logger.rb:20:in `call&#39;
actionpack (4.1.1) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;
rack (1.5.2) lib/rack/methodoverride.rb:21:in `call&#39;
rack (1.5.2) lib/rack/runtime.rb:17:in `call&#39;
activesupport (4.1.1) lib/active_support/cache/strategy/local_cache_middleware.rb:26:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
actionpack (4.1.1) lib/action_dispatch/middleware/static.rb:64:in `call&#39;
rack (1.5.2) lib/rack/sendfile.rb:112:in `call&#39;
railties (4.1.1) lib/rails/engine.rb:514:in `call&#39;
railties (4.1.1) lib/rails/application.rb:144:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
rack (1.5.2) lib/rack/content_length.rb:14:in `call&#39;
rack (1.5.2) lib/rack/handler/webrick.rb:60:in `service&#39;
/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/ruby/2.0.0/webrick/httpserver.rb:138:in `service&#39;
/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/ruby/2.0.0/webrick/httpserver.rb:94:in `run&#39;
/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/ruby/2.0.0/webrick/server.rb:295:in `block in start_thread&#39;</code></pre>
    </div>
    <div id="Full-Trace" style="display: none;">
      <pre><code>actionpack (4.1.1) lib/action_dispatch/middleware/debug_exceptions.rb:21:in `call&#39;
actionpack (4.1.1) lib/action_dispatch/middleware/show_exceptions.rb:30:in `call&#39;
railties (4.1.1) lib/rails/rack/logger.rb:38:in `call_app&#39;
railties (4.1.1) lib/rails/rack/logger.rb:20:in `block in call&#39;
activesupport (4.1.1) lib/active_support/tagged_logging.rb:68:in `block in tagged&#39;
activesupport (4.1.1) lib/active_support/tagged_logging.rb:26:in `tagged&#39;
activesupport (4.1.1) lib/active_support/tagged_logging.rb:68:in `tagged&#39;
railties (4.1.1) lib/rails/rack/logger.rb:20:in `call&#39;
actionpack (4.1.1) lib/action_dispatch/middleware/request_id.rb:21:in `call&#39;
rack (1.5.2) lib/rack/methodoverride.rb:21:in `call&#39;
rack (1.5.2) lib/rack/runtime.rb:17:in `call&#39;
activesupport (4.1.1) lib/active_support/cache/strategy/local_cache_middleware.rb:26:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
actionpack (4.1.1) lib/action_dispatch/middleware/static.rb:64:in `call&#39;
rack (1.5.2) lib/rack/sendfile.rb:112:in `call&#39;
railties (4.1.1) lib/rails/engine.rb:514:in `call&#39;
railties (4.1.1) lib/rails/application.rb:144:in `call&#39;
rack (1.5.2) lib/rack/lock.rb:17:in `call&#39;
rack (1.5.2) lib/rack/content_length.rb:14:in `call&#39;
rack (1.5.2) lib/rack/handler/webrick.rb:60:in `service&#39;
/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/ruby/2.0.0/webrick/httpserver.rb:138:in `service&#39;
/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/ruby/2.0.0/webrick/httpserver.rb:94:in `run&#39;
/System/Library/Frameworks/Ruby.framework/Versions/2.0/usr/lib/ruby/2.0.0/webrick/server.rb:295:in `block in start_thread&#39;</code></pre>
    </div>
</div>


    <h2>
      Routes
    </h2>

    <p>
      Routes match in priority from top to bottom
    </p>

    
<table id='route_table' class='route_table'>
  <thead>
    <tr>
      <th>Helper</th>
      <th>HTTP Verb</th>
      <th>Path</th>
      <th>Controller#Action</th>
    </tr>
    <tr class='bottom'>
      <th>
        <a data-route-helper="_path" href="#" title="Returns a relative path (without the http or domain)">Path</a> /
        <a data-route-helper="_url" href="#" title="Returns an absolute url (with the http and domain)">Url</a>
      </th>
      <th>
      </th>
      <th>
        <input id="path_search" name="path[]" placeholder="Path Match" type="search" />
      </th>
      <th>
      </th>
    </tr>
  </thead>
  <tbody class='matched_paths' id='matched_paths'>
  </tbody>
  <tbody>
    <tr class='route_row' data-helper='path'>
  <td data-route-name='investors_index'>
      investors_index<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/investors/index(.:format)' data-regexp='^\/investors\/index(?:\.([^\/.?]+))?$'>
    /investors/index(.:format)
  </td>
  <td data-route-reqs='investors#index'>
    investors#index
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_investor_session'>
      new_investor_session<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/investors/sign_in(.:format)' data-regexp='^\/investors\/sign_in(?:\.([^\/.?]+))?$'>
    /investors/sign_in(.:format)
  </td>
  <td data-route-reqs='devise/sessions#new'>
    devise/sessions#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='investor_session'>
      investor_session<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/investors/sign_in(.:format)' data-regexp='^\/investors\/sign_in(?:\.([^\/.?]+))?$'>
    /investors/sign_in(.:format)
  </td>
  <td data-route-reqs='devise/sessions#create'>
    devise/sessions#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='destroy_investor_session'>
      destroy_investor_session<span class='helper'>_path</span>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/investors/sign_out(.:format)' data-regexp='^\/investors\/sign_out(?:\.([^\/.?]+))?$'>
    /investors/sign_out(.:format)
  </td>
  <td data-route-reqs='devise/sessions#destroy'>
    devise/sessions#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='investor_password'>
      investor_password<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/investors/password(.:format)' data-regexp='^\/investors\/password(?:\.([^\/.?]+))?$'>
    /investors/password(.:format)
  </td>
  <td data-route-reqs='devise/passwords#create'>
    devise/passwords#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_investor_password'>
      new_investor_password<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/investors/password/new(.:format)' data-regexp='^\/investors\/password\/new(?:\.([^\/.?]+))?$'>
    /investors/password/new(.:format)
  </td>
  <td data-route-reqs='devise/passwords#new'>
    devise/passwords#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_investor_password'>
      edit_investor_password<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/investors/password/edit(.:format)' data-regexp='^\/investors\/password\/edit(?:\.([^\/.?]+))?$'>
    /investors/password/edit(.:format)
  </td>
  <td data-route-reqs='devise/passwords#edit'>
    devise/passwords#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/investors/password(.:format)' data-regexp='^\/investors\/password(?:\.([^\/.?]+))?$'>
    /investors/password(.:format)
  </td>
  <td data-route-reqs='devise/passwords#update'>
    devise/passwords#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/investors/password(.:format)' data-regexp='^\/investors\/password(?:\.([^\/.?]+))?$'>
    /investors/password(.:format)
  </td>
  <td data-route-reqs='devise/passwords#update'>
    devise/passwords#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='cancel_investor_registration'>
      cancel_investor_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/investors/cancel(.:format)' data-regexp='^\/investors\/cancel(?:\.([^\/.?]+))?$'>
    /investors/cancel(.:format)
  </td>
  <td data-route-reqs='devise/registrations#cancel'>
    devise/registrations#cancel
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='investor_registration'>
      investor_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='POST'>
    POST
  </td>
  <td data-route-path='/investors(.:format)' data-regexp='^\/investors(?:\.([^\/.?]+))?$'>
    /investors(.:format)
  </td>
  <td data-route-reqs='devise/registrations#create'>
    devise/registrations#create
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='new_investor_registration'>
      new_investor_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/investors/sign_up(.:format)' data-regexp='^\/investors\/sign_up(?:\.([^\/.?]+))?$'>
    /investors/sign_up(.:format)
  </td>
  <td data-route-reqs='devise/registrations#new'>
    devise/registrations#new
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_investor_registration'>
      edit_investor_registration<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/investors/edit(.:format)' data-regexp='^\/investors\/edit(?:\.([^\/.?]+))?$'>
    /investors/edit(.:format)
  </td>
  <td data-route-reqs='devise/registrations#edit'>
    devise/registrations#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/investors(.:format)' data-regexp='^\/investors(?:\.([^\/.?]+))?$'>
    /investors(.:format)
  </td>
  <td data-route-reqs='devise/registrations#update'>
    devise/registrations#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/investors(.:format)' data-regexp='^\/investors(?:\.([^\/.?]+))?$'>
    /investors(.:format)
  </td>
  <td data-route-reqs='devise/registrations#update'>
    devise/registrations#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='DELETE'>
    DELETE
  </td>
  <td data-route-path='/investors(.:format)' data-regexp='^\/investors(?:\.([^\/.?]+))?$'>
    /investors(.:format)
  </td>
  <td data-route-reqs='devise/registrations#destroy'>
    devise/registrations#destroy
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='root'>
      root<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/' data-regexp='^\/$'>
    /
  </td>
  <td data-route-reqs='investors#dashboard'>
    investors#dashboard
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='edit_investor'>
      edit_investor<span class='helper'>_path</span>
  </td>
  <td data-route-verb='GET'>
    GET
  </td>
  <td data-route-path='/investors/:id/edit(.:format)' data-regexp='^\/investors\/([^\/.?]+)\/edit(?:\.([^\/.?]+))?$'>
    /investors/:id/edit(.:format)
  </td>
  <td data-route-reqs='investors#edit'>
    investors#edit
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name='investor'>
      investor<span class='helper'>_path</span>
  </td>
  <td data-route-verb='PATCH'>
    PATCH
  </td>
  <td data-route-path='/investors/:id(.:format)' data-regexp='^\/investors\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /investors/:id(.:format)
  </td>
  <td data-route-reqs='investors#update'>
    investors#update
  </td>
</tr>
<tr class='route_row' data-helper='path'>
  <td data-route-name=''>
  </td>
  <td data-route-verb='PUT'>
    PUT
  </td>
  <td data-route-path='/investors/:id(.:format)' data-regexp='^\/investors\/([^\/.?]+)(?:\.([^\/.?]+))?$'>
    /investors/:id(.:format)
  </td>
  <td data-route-reqs='investors#update'>
    investors#update
  </td>
</tr>

  </tbody>
</table>

<script type='text/javascript'>
  function each(elems, func) {
    if (!elems instanceof Array) { elems = [elems]; }
    for (var i = 0, len = elems.length; i < len; i++) {
      func(elems[i]);
    }
  }

  function setValOn(elems, val) {
    each(elems, function(elem) {
      elem.innerHTML = val;
    });
  }

  function onClick(elems, func) {
    each(elems, function(elem) {
      elem.onclick = func;
    });
  }

  // Enables functionality to toggle between `_path` and `_url` helper suffixes
  function setupRouteToggleHelperLinks() {
    var toggleLinks = document.querySelectorAll('#route_table [data-route-helper]');
    onClick(toggleLinks, function(){
      var helperTxt   = this.getAttribute("data-route-helper"),
          helperElems = document.querySelectorAll('[data-route-name] span.helper');
      setValOn(helperElems, helperTxt);
    });
  }

  // takes an array of elements with a data-regexp attribute and
  // passes their parent <tr> into the callback function
  // if the regexp matches a given path
  function eachElemsForPath(elems, path, func) {
    each(elems, function(e){
      var reg = e.getAttribute("data-regexp");
      if (path.match(RegExp(reg))) {
        func(e.parentNode.cloneNode(true));
      }
    })
  }

  // Ensure path always starts with a slash "/" and remove params or fragments
  function sanitizePath(path) {
    var path = path.charAt(0) == '/' ? path : "/" + path;
    return path.replace(/\#.*|\?.*/, '');
  }

  // Enables path search functionality
  function setupMatchPaths() {
    var regexpElems     = document.querySelectorAll('#route_table [data-regexp]'),
        pathElem        = document.querySelector('#path_search'),
        selectedSection = document.querySelector('#matched_paths'),
        noMatchText     = '<tr><th colspan="4">None</th></tr>';


    // Remove matches if no path is present
    pathElem.onblur = function(e) {
      if (pathElem.value === "") selectedSection.innerHTML = "";
    }

    // On key press perform a search for matching paths
    pathElem.onkeyup = function(e){
      var path        = sanitizePath(pathElem.value),
          defaultText = '<tr><th colspan="4">Paths Matching (' + path + '):</th></tr>';

      // Clear out results section
      selectedSection.innerHTML= defaultText;

      // Display matches if they exist
      eachElemsForPath(regexpElems, path, function(e){
        selectedSection.appendChild(e);
      });

      // If no match present, tell the user
      if (selectedSection.innerHTML === defaultText) {
        selectedSection.innerHTML = selectedSection.innerHTML + noMatchText;
      }
    }
  }

  setupMatchPaths();
  setupRouteToggleHelperLinks();
</script>

</div>


</body>
</html>
