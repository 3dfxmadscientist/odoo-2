
var fullscreen_toggle = {
    fullscreen_toggle: 0,
    search: 0,
    };

openerp.web_keyboard_shortcuts = function (openerp) {
		var QWeb = openerp.web.qweb,
		_t = openerp.web._t;


	openerp.web.WebClient.include({
        update_logo: function() {
            $(document).ready(function() {
                $("table.oe_webclient tr:first td").css({
                    "visibility": "hidden"
                });
                $("table.oe_webclient tr td.oe_leftbar").css({
                    "height": "100%"
                });
                $("table.oe_webclient tr:eq(2)").css({
                    "position": "relative",
                    "height": "100%"
                });
                $("<tr><td colspan=\"2\" class=\"oe_topbar\" style=\"position:fixed;z-index:6;\"><div class=\"oe_menu_placeholder\" /><div class=\"oe_user_menu_placeholder\"/><div class=\"oe_systray\"/></td></tr>").insertBefore("table.oe_webclient tr:first");
                $("<div class=\"fullscreen\" valign=\"top\">Full Screen</div>").insertBefore("table.oe_webclient tr td.oe_leftbar a");
                $("div.fullscreen").hide();
                //$("div.fullscreen").fadeIn(1200);
                $("div.fullscreen").delay(2000).animate({
                    opacity: '0.001',
                    });
                $("div.fullscreen,div.fullscreentrue").mouseenter(function() {
                    $("div.fullscreen,div.fullscreentrue").animate({
                        opacity: '0.001',
                        });
                });
                $("div.fullscreen,div.fullscreentrue").mouseleave(function() {
                    $("div.fullscreen,div.fullscreentrue").animate({
                        opacity: '0.001',
                        });
                });
                var toggle = 0;

                $("div.fullscreen,div.fullscreentrue").click(function() {
                    if (toggle == 0) {
                        $("a.oe_logo").slideToggle("slow");
                        $("div.oe_secondary_menus_container").slideToggle("slow");
                        $("div.oe_footer").slideToggle("slow");
                        $("td.oe_topbar").delay(500).slideToggle("normal");
                        toggle = 1;
                        fullscreen_toggle.fullscreen_toggle = 1;
                        if (fullscreen_toggle.search==1)
                        {
                        $('div.oe_searchview').delay(500).animate({
                            "top": "0px"
                        });
                        }
                        $("div.fullscreen").addClass("fullscreentrue");
                        $("div.fullscreentrue").hide();
                        $("div.fullscreentrue").removeClass("fullscreen");
                        $("div.fullscreentrue").html("Exit Full Screen");
                        //$("div.fullscreentrue").delay(1000).fadeIn(1600);
                        $("div.fullscreentrue").delay(2000).animate({
                            opacity: '0.001',
                            }, "fast");

                    } else {
                        $("td.oe_topbar").slideToggle("normal");
                        $("a.oe_logo").delay(330).slideToggle("slow");
                        $("div.oe_secondary_menus_container").delay(330).slideToggle("slow");
                        $("div.oe_footer").delay(330).slideToggle("slow");
                        toggle = 0;
                        fullscreen_toggle.fullscreen_toggle = 0;
                        if(fullscreen_toggle.search==1)
                        {
                        $('div.oe_searchview').animate({
                            "top": "32px"
                        });
                        }
                        $("div.fullscreentrue").hide();
                        $("div.fullscreentrue").addClass("fullscreen");
                        $("div.fullscreen").removeClass("fullscreentrue");
                        $("div.fullscreen").html("Full Screen");
                        //$("div.fullscreen").fadeIn(1000);
                        $("div.fullscreen").delay(1600).animate({
                            opacity: '0.001',
                            }, "fast");
                    }
                });
            });
            this._super.apply(this, arguments);
        },
        });

};

$(document).ready(function(event) {
	 $(document).keyup(function(event) {
		 $("button u span").unwrap();
	 });
    $(document).keydown(function(event) {
	    	jQuery(".oe_menu").sortable({axis: "x",
			cursor: "move",
		});
    	
    	$("#search_hint").remove();
        var n = String.fromCharCode(event.charCode);
        var d = event.keyCode;
        var alt_dict={}
        if (event.altKey) {
        	$("header button:visible").attr("accesskey",function(index,currentvalue){ 
        																if(currentvalue){
        																	
        																	var button_text = $(this).text();
        																	 $(this).html(button_text.replace(currentvalue,'<u class="alt_base"><span class="under_line">'+currentvalue+'</sapn></u>'));
        																	 alt_dict[currentvalue]=$(this);
        																	 $('.alt_base').addClass("alt_after");
																			}
        															   });

        	
        }
        
        if (event.keyCode && event.keyCode != 18 && event.altKey) {
        	event.preventDefault();
        	var pressed = String.fromCharCode(event.keyCode);
        	if (alt_dict.hasOwnProperty(pressed)!=false)
        	{


        	}
        }
        if (event.keyCode && event.keyCode != 17 && event.ctrlKey) {
            if (d == 83) {
                event.preventDefault();
                var x = document.getElementsByTagName('button');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "oe_button oe_form_button_save oe_highlight" && $(y).is(':visible')) {
                        y.click();
                    }
                }
            }

            if (d == 75) {

                event.preventDefault();
                var x = document.getElementsByTagName('a');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "oe_vm_switch_kanban") {
                        y.click();
                    }
                }

            }

            if (d == 222) {

                event.preventDefault();
                var x = document.getElementsByTagName('a');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "oe_vm_switch_graph") {
                        y.click();
                    }
                }

            }
            if (d == 76) {

                event.preventDefault();
                var x = document.getElementsByTagName('a');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "oe_vm_switch_list") {
                        y.click();
                    }
                }
            }

            if (d == 27) {

                event.preventDefault();
                var x = document.getElementsByTagName('a');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "oe_bold oe_form_button_cancel" && $(y).is(':visible')) {
                        y.click();
                    }
                }

            }

            if (d == 186 | d == 59) {

                event.preventDefault();
                var x = document.getElementsByTagName('a');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "oe_vm_switch_form") {
                        y.click();
                    }
                }

            }

            if (d == 32) {

                event.preventDefault();
                var x = document.getElementsByTagName('button');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if ((y.className == "oe_button oe_list_add oe_highlight" | y.className == "oe_kanban_button_new oe_highlight" | y.className == "oe_button oe_form_button_create") && $(y).is(':visible')) {
                        y.click();
                    }

                }

            }
           
            if (d == 187) {

                event.preventDefault();
                var x = document.getElementsByTagName('button');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    alert(d);
                    if (y.className == "oe_button oe_form_button_edit") {
                        //y.click();
                    }
                }
            }
            if (d == 69) {

                event.preventDefault();
                var x = document.getElementsByTagName('button');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "oe_button oe_form_button_edit") {
                        y.click();
                    }
                }
            }

            if (d == 40) {

                event.preventDefault();
                var x = document.getElementsByTagName('span');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "ui-icon ui-icon-triangle-1-e") {
                        y.click();
                    }
                }
            }

            if (d == 38) {

                event.preventDefault();
                var x = document.getElementsByTagName('span');
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "ui-icon ui-icon-triangle-1-s") {
                        y.click();
                    }
                }
            }

            if (d == 80) {


                event.preventDefault();
                var x = document.getElementsByTagName('div');
                var list = 0;
		var form = 0;
		var check = 0;
		$('.oe_form_sheet').each(function() {
                    if ($(this).parents('div:hidden').length == 0) {
                        form=1;
                    }
		    else {
			form=0;
			check = 0	
			}
                });
		$('.oe_view_manager_view_graph').each(function() {
                    if ($(this).parents('div:hidden').length == 0) {
                        form=1;
                    }
		    else {
			form=0;
			check = 0	
			}
                });
		$('.oe_list_content').each(function() {
                    if ($(this).parents('div:hidden').length == 0) {
                        list=1;
                    }
                });
                for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if ((y.className == "oe_form_sheet oe_form_sheet_width" | y.className == "oe_semantic_html_override editor-render oe_view") & form==1) {
			if ($(y).parents('div:hidden').length == 0) {
                        	check=1;
                    		}
			else continue;
			
			var logo_url =  $('a.oe_logo').children("img").attr("src");
			var add_img = '<img src="'+logo_url+'" class="sheet_logo"/>'
			var graph_img = '<img src="'+logo_url+'" style="padding:10px;padding-bottom:0px" class="sheet_logo"/>'
			var hr='<hr class="sheet_logo" style="border: 2;width: 100%;margin-bottom:25px"/>'
			$('.oe_form_sheet').prepend(hr);
			$('.oe_form_sheet').prepend(add_img);
			$('.oe_semantic_html_override.editor-render.oe_view').prepend(hr);
			$('.oe_semantic_html_override.editor-render.oe_view').prepend(graph_img);
                        html2canvas(y, {
                            onrendered: function(canvas) {
                                myWindow = window.open('', '', 'width='+window.innerWidth+',height='+window.innerHeight);
                                var strDataURI = canvas.toDataURL();
                                var link = document.createElement("img");
                                link.setAttribute("src", strDataURI);
                                link.setAttribute("id", "embedImage");
                                var linkText = document.createTextNode("Click me");
                                link.appendChild(linkText);

                                var openerp_img = document.createElement("img");
                                openerp_img.setAttribute("class", "open");
                                openerp_img.setAttribute("src", logo_url);
                                var openerp_imgText = document.createTextNode("Click me");
                                openerp_img.appendChild(openerp_imgText);

                                var css = document.createElement("style");
                                var cssText = document.createTextNode(".css3button {margin-left:37%;margin-top:2%;font-family: Arial, Helvetica, sans-serif;font-weight:700;font-size: 14px;color: #c2c0c2;padding: 10px 20px;background: -moz-linear-gradient(top,#302e30 0%,#000000);background: -webkit-gradient(linear, left top, left bottom, from(#302e30),to(#000000));-moz-border-radius: 1px;-webkit-border-radius: 1px;border-radius: 1px;border: 1px solid #000000;-moz-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 1px rgba(255,255,255,0.6);-webkit-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 1px rgba(255,255,255,0.6);box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 1px rgba(255,255,255,0.6);text-shadow:0px -1px 0px rgba(000,000,000,1),0px 1px 0px rgba(184,180,184,0.2);}body{background-color:#252525;}img{margin-left:10%;margin-top:2%;}.open{margin-left:35%;margin-top:1%;}");
                                css.appendChild(cssText);

                                var input = document.createElement("input");
                                var inputText = document.createTextNode("a");
                                input.appendChild(inputText);
                                input.setAttribute("id", "saveImage");
                                input.setAttribute("onclick", "download()");
                                input.setAttribute("type", "button");
                                input.setAttribute("class", "css3button");
                                input.setAttribute("value", "Download Png");

                                var jscript = document.createElement("script");
                                jscript.setAttribute("type", "text/javascript");
                                var jscriptText = document.createTextNode("function download(){var img = document.getElementById('embedImage');var button = document.getElementById('saveImage');window.location.href = img.src.replace('image/png', 'image/octet-stream');}");
                                jscript.appendChild(jscriptText);

                                myWindow.document.head.appendChild(css);
                                myWindow.document.head.appendChild(jscript);
                                //myWindow.document.body.appendChild(canvas);
                                myWindow.document.body.appendChild(openerp_img);
                                myWindow.document.body.appendChild(link);
                                myWindow.document.body.appendChild(input);
                                myWindow.focus();
                                $(".sheet_logo").remove();
                            }
                        });

                    }
                }

                if (list == 1 & check==0) {
                    var x = document.getElementsByTagName('table');
                    for (i = 0; i < x.length; i++) {
                        y = x[i];
                        if (y.className == "oe_list_content") {
			if ($(y).parents('div:hidden').length == 0) {
                        	
                    		}
			else continue;
			var logo_url =  $('a.oe_logo').children("img").attr("src");
                            html2canvas(y, {
                                onrendered: function(canvas) {
                                    myWindow = window.open('', '', 'width=950,height=680');
                                    var strDataURI = canvas.toDataURL();

                                    var link = document.createElement("img");
                                    link.setAttribute("src", strDataURI);
                                    link.setAttribute("id", "embedImage");
                                    var linkText = document.createTextNode("Click me");
                                    link.appendChild(linkText);

                                    var openerp_img = document.createElement("img");
                                    openerp_img.setAttribute("class", "open");
                                    openerp_img.setAttribute("src", logo_url);
                                    var openerp_imgText = document.createTextNode("Click me");
                                    openerp_img.appendChild(openerp_imgText);

                                    var css = document.createElement("style");
                                    var cssText = document.createTextNode(".css3button {margin-left:37%;margin-top:2%;font-family: Arial, Helvetica, sans-serif;font-weight:700;font-size: 14px;color: #c2c0c2;padding: 10px 20px;background: -moz-linear-gradient(top,#302e30 0%,#000000);background: -webkit-gradient(linear, left top, left bottom, from(#302e30),to(#000000));-moz-border-radius: 1px;-webkit-border-radius: 1px;border-radius: 1px;border: 1px solid #000000;-moz-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 1px rgba(255,255,255,0.6);-webkit-box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 1px rgba(255,255,255,0.6);box-shadow:0px 1px 3px rgba(000,000,000,0.5),inset 0px 0px 1px rgba(255,255,255,0.6);text-shadow:0px -1px 0px rgba(000,000,000,1),0px 1px 0px rgba(184,180,184,0.2);}body{background-color:#252525;}img{margin-left:10%;margin-top:2%;}.open{margin-left:35%;margin-top:1%;}");
                                    css.appendChild(cssText);

                                    var input = document.createElement("input");
                                    var inputText = document.createTextNode("a");
                                    input.appendChild(inputText);
                                    input.setAttribute("id", "saveImage");
                                    input.setAttribute("onclick", "download()");
                                    input.setAttribute("type", "button");
                                    input.setAttribute("class", "css3button");
                                    input.setAttribute("value", "Download Png");

                                    var jscript = document.createElement("script");
                                    jscript.setAttribute("type", "text/javascript");
                                    var jscriptText = document.createTextNode("function download(){var img = document.getElementById('embedImage');var button = document.getElementById('saveImage');window.location.href = img.src.replace('image/png', 'image/octet-stream');}");
                                    jscript.appendChild(jscriptText);

                                    myWindow.document.head.appendChild(css);
                                    myWindow.document.head.appendChild(jscript);
                                    //myWindow.document.body.appendChild(canvas);
                                    myWindow.document.body.appendChild(openerp_img);
                                    myWindow.document.body.appendChild(link);
                                    myWindow.document.body.appendChild(input);
                                    myWindow.focus();

                                }
                            });
                        }
                    }
                }

            }

            if (d == 8) {

                event.preventDefault();
                var x = document.getElementsByTagName('a');
                f_list = []
                    for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "oe_breadcrumb_item") {
                        f_list.push(y);
                    }

                }
                x = f_list.pop();
                if (x) {
                    x.click();
                }
            }
            if (d == 122) {

                event.preventDefault();
                var x = document.getElementsByTagName('div');
                f_list = []
                    for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "fullscreen") {
                        y.click();
                        if(fullscreen_toggle.search==0)
                        	{
                        	$('div.oe_searchview').delay(500).animate({
                                "top": "-32px"
                            },"fast");
                        	
                        	}
                    }

                }

            }

            if (!fullscreen_toggle.fullscreen_toggle) {
                if (d == 49 | d == 50 | d == 51 | d == 52 | d == 53 | d == 54 | d == 55 | d == 56 | d == 57) {

                    event.preventDefault();
                    n = d - 48;
                    var x = document.getElementsByTagName('a');
                    for (i = 0; i < x.length; i++) {
                        y = x[i];
                        if (y.className == "oe_menu_toggler") {
                            if (n == i + 1) {
                                y.click();
                            }
                        }

                    }
                }
            }

            if (d == 188) {
                event.preventDefault();
                $('.oe_i[data-pager-action="previous"]').each(function() {
                    if ($(this).parents('div:hidden').length == 0) {
                        $(this).trigger('click');
                    }
                });
            }
            if (d == 190) {
                event.preventDefault();
                $('.oe_i[data-pager-action="next"]').each(function() {
                    if ($(this).parents('div:hidden').length == 0) {
                        $(this).trigger('click');
                    }
                });
            }

        }

        if (d == 192) {
            if (event.ctrlKey == 1) {
                event.preventDefault();
                $("div ul li a.oe_menu_leaf:visible:first").focus();
            }

        }

        if (d == 40) {
            for (i = 0; i < $("div ul li a.oe_menu_leaf:visible").length; i++) {
                if ($("div ul li a.oe_menu_leaf:visible:eq(" + i + ")").is(":focus")) {
                    event.preventDefault();
                    var flg = i + 1;
                    $("div ul li a.oe_menu_leaf:visible:eq(" + flg + ")").focus();
                    break;
                }

            }
        }
        if (d == 38) {
            var flg = 0;
            for (i = 0; i < $("div ul li a.oe_menu_leaf:visible").length; i++) {
                if ($("div ul li a.oe_menu_leaf:visible:eq(" + i + ")").is(":focus")) {
                    event.preventDefault();
                    var flg = i - 1;
                    $("div ul li a.oe_menu_leaf:visible:eq(" + flg + ")").focus();
                    break;
                }

            }
        }

        if (event.ctrlKey != 1) {
            if (d == 27) {
                event.preventDefault();
                var x = document.getElementsByTagName('div');
                f_list = []
                    for (i = 0; i < x.length; i++) {
                    y = x[i];
                    if (y.className == "fullscreentrue") {
                        y.click();
                        if(fullscreen_toggle.search==0)
                    	{
                        	$('div.oe_searchview').delay(500).animate({
                                "top": "0px"
                            },"fast");
                    	
                    	}
                    }

                }

            }
        }

    });
});
