/*
    cloudcount - Bookmarklet to count the number of mentions of "cloud" in
      a webpage.
    Copyright (C) 2013  Steve Kerrison

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

*/

(function(){

	var v = "1.3.2";

	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initCloudCount();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initCloudCount();
	}
	
	function initCloudCount() {
	  (window.cloudCount = function() {
	    var count = (($("body").text().match(/cloud/ig) || []).length);
	    var times = (count == 1) ? " time" : " times";
	    alert('Oh my, "cloud" is mentioned ' + count + times + ' in the body of this page');
	  })();
  }

})();
