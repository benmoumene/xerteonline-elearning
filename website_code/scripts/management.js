/**
 * Licensed to The Apereo Foundation under one or more contributor license
 * agreements. See the NOTICE file distributed with this work for
 * additional information regarding copyright ownership.

 * The Apereo Foundation licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var function_to_use = null;

var management_ajax_php_path = "website_code/php/management/";

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function()
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

// Function properties ajax send prepare
//
// Generic ajax sender for this script

function management_ajax_send_prepare(url){

   	xmlHttp.open("post",management_ajax_php_path + url,true);
	xmlHttp.onreadystatechange=management_stateChanged;
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

}

// Function management state changed update screen
//
// Generic ajax handler for this script

function management_stateChanged(){

	if (xmlHttp.readyState==4){

		if(xmlHttp.responseText!=""){

			document.getElementById('admin_area').innerHTML = xmlHttp.responseText;

		}
	}
}

// Function management state changed alert
//
// Generic ajax handler for this script

function management_alert_stateChanged(){

	if (xmlHttp.readyState==4){

		response = xmlHttp.responseText.trim();
		if(response!=""){

			alert(response);

		}
	}
}

// Function management state changed alert
//
// Generic ajax handler for this script

function management_delete_sub_stateChanged(){

	if (xmlHttp.readyState==4){

		response = xmlHttp.responseText.trim();
		if(response!=""){

			alert(response);

		}
		templates_list();
	}
}

function upload_template(){
	
}

// Function feeds list
//
// remove a share, and check who did it

function feeds_list(){
    function_to_use="feeds";
	if(setup_ajax()!=false){

		var url="syndication.php";

		management_ajax_send_prepare(url)

		xmlHttp.send('no_id=1');

	}
}

// Function remove licenses
//
// remove a share, and check who did it

function remove_feed(id,type){

	if (confirm(REMOVE_PROMPT)) {

		if(setup_ajax()!=false){

			var url="syndication_remove.php";

			management_ajax_send_prepare(url)

			if(type=="RSS"){

				xmlHttp.send('template_id=' + id + '&rss=setfalse');

			}

			if(type=="EXPORT"){

				xmlHttp.send('template_id=' + id + '&export=setfalse');

			}

			if(type=="SYND"){

				xmlHttp.send('template_id=' + id + '&synd=setfalse');

			}

		}

	}
}

// Function licenses list
//
// remove a share, and check who did it

function licenses_list(){
    function_to_use="licenses";
	if(setup_ajax()!=false){

		var url="licenses.php";

		management_ajax_send_prepare(url)

		xmlHttp.send('no_id=1');

	}
}

// Function remove licenses
//
// remove a share, and check who did it

function remove_licenses(id){

	if (confirm(REMOVE_PROMPT)) {

		if(setup_ajax()!=false){

			var url="remove_license.php";

			management_ajax_send_prepare(url)

			xmlHttp.send('remove=' + id);

		}

	}
}

// Function categories list
//
// remove a share, and check who did it

function categories_list(){

	function_to_use="categories";

	if(setup_ajax()!=false){

		var url="categories.php";

		management_ajax_send_prepare(url)

		xmlHttp.send('no_id=1');

	}
}

// Function grouping list
//
// remove a share, and check who did it

function grouping_list(){
    function_to_use="grouping";
    if(setup_ajax()!=false){

        var url="grouping.php";

        management_ajax_send_prepare(url)

        xmlHttp.send('no_id=1');

    }
}

// Function course list
//
// remove a share, and check who did it

function course_list(){
    function_to_use="course";
    if(setup_ajax()!=false){

        var url="course.php";

        management_ajax_send_prepare(url)

        xmlHttp.send('no_id=1');
    }
}


// Function remove category
//
// remove a share, and check who did it

function remove_category(id){

    if (confirm(REMOVE_PROMPT)) {

        if(setup_ajax()!=false){

            var url="remove_category.php";

            management_ajax_send_prepare(url)

            xmlHttp.send('remove=' + id);

        }

    }
}


// Function remove grouping
//
// remove a share, and check who did it

function remove_grouping(id){

    if (confirm(REMOVE_PROMPT)) {

        if(setup_ajax()!=false){

            var url="remove_grouping.php";

            management_ajax_send_prepare(url)

            xmlHttp.send('remove=' + id);

        }

    }
}

// Function remove course
//
// remove a share, and check who did it

function remove_course(id){

    if (confirm(REMOVE_PROMPT)) {

        if(setup_ajax()!=false){

            var url="remove_course.php";

            management_ajax_send_prepare(url)

            xmlHttp.send('remove=' + id);

        }

    }
}

// Function user templates list
//
// remove a share, and check who did it

function user_templates_list(){

	function_to_use="user_templates";

	if(setup_ajax()!=false){

		var url="user_templates.php";

		management_ajax_send_prepare(url);

		xmlHttp.send('no_id=1');

	}
}

function register()
{
    // Open link to community website
    // The way this is implemented, is to open register.php
    // register.php will verify if a unique id for this installation already exists,
    // If not, it will generate is, and then open the registration form on the community website
    window.open("website_code/php/register.php");
}

// Function users list
//
// remove a share, and check who did it

function users_list(){

	function_to_use="users";

	if(setup_ajax()!=false){

		var url="users.php";

		management_ajax_send_prepare(url)

		xmlHttp.send('no_id=1');

	}
}

// Function template_sync
//
// remove a share, and check who did it

function template_sync(){

	if(setup_ajax()!=false){

		var url="sync.php";

		management_ajax_send_prepare(url)

		xmlHttp.send('no_id=1');

	}
}

// Function site list
//
// remove a share, and check who did it

function site_list(){

	function_to_use="site";

	if(setup_ajax()!=false){

		var url="site.php";

		management_ajax_send_prepare(url)

		xmlHttp.send('no_id=1');

	}
}

// Function delete sharing template
//
// remove a share, and check who did it

function templates_list(){

	function_to_use="templates";

	if(setup_ajax()!=false){

		var url="templates.php";

		management_ajax_send_prepare(url)

		xmlHttp.send('no_id=1');

	}
}

// Function delete sharing template
//
// remove a share, and check who did it

function update_template(){

	// Get selected pages of the active_section
	// 1. First get non-selected boxes
	var simple_lo_page_cb = $("#sub_page_select_titleonly_" + active_section + ":checked");
	var simple_lo_page = (simple_lo_page_cb.length > 0);
	var checkboxes_all = $(".sub_page_selection_model_" + active_section);
	var checkboxes_selected = $(".sub_page_selection_model_" + active_section + ":checked");
	var sub_pages = "";
	if (checkboxes_all.length != checkboxes_selected.length)
	{
		checkboxes_selected.each(function(index, checkbox){
			if (sub_pages.length > 0)
				sub_pages += ",";
			sub_pages += checkbox.name;
		});
		if (sub_pages.length > 0)
		{
			sub_pages = "simple_lo_page," + sub_pages;
		}
	}
	if(setup_ajax()!=false){

		var url="template_details_management.php";

		xmlHttp.open("post",management_ajax_php_path + url,true);
		xmlHttp.onreadystatechange=management_alert_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xmlHttp.send('template_id=' + active_section +
					 '&desc=' + document.getElementById(active_section + "desc").value +
					 '&display=' + document.getElementById(active_section + "display").value +
					 '&date_uploaded=' + document.getElementById(active_section + "_date_uploaded").value +
					 '&example=' + document.getElementById(active_section + "example").value +
					 '&access=' + document.getElementById(active_section + "access").value +
					 '&active=' + document.getElementById(active_section + "active").value +
					 '&template_sub_pages=' + sub_pages);

	}

}

// Function update play security
//
// remove a share, and check who did it

function update_play_security(){

	if(setup_ajax()!=false){

		var url="play_security_management.php";

		xmlHttp.open("post",management_ajax_php_path + url,true);
		xmlHttp.onreadystatechange=management_alert_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xmlHttp.send('play_id=' + active_section +
					 '&security=' + document.getElementById(active_section + "security").value +
					 '&data=' + document.getElementById(active_section + "data").value +
					 '&info=' + document.getElementById(active_section + "info").value);

	}

}

// Function remove security
//
// remove a share, and check who did it

function remove_security(){

	if(setup_ajax()!=false){

		var answer = confirm(REMOVE_PROMPT);

		if(answer){

			var url="remove_play_security.php";

			xmlHttp.open("post",management_ajax_php_path + url,true);
			xmlHttp.onreadystatechange=management_stateChanged;
			xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			xmlHttp.send('play_id=' + active_section );

		}
	}

}

// Function update site
//
// remove a share, and check who did it

function update_site(){

	if(setup_ajax()!=false){

		var url="site_details_management.php";

		xmlHttp.open("post",management_ajax_php_path + url,true);
		xmlHttp.onreadystatechange=management_alert_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		copyright = document.getElementById("copyright").value;
		copyright = copyright.split("???").join("AAA");

		xmlHttp.send('site_url=' + document.getElementById("site_url").value +
					 '&apache=' + document.getElementById("apache").value +
					 '&site_title=' + document.getElementById("site_title").value +
					 '&site_name=' + document.getElementById("site_name").value +
					 '&site_logo=' + document.getElementById("site_logo").value +
					 '&organisational_logo=' + document.getElementById("organisational_logo").value +
					 '&welcome_message=' + document.getElementById("welcome_message").value +
					 '&site_text=' + document.getElementById("site_text").value +
					 '&tutorial_text=' + document.getElementById("tutorial_text").value +
					 '&news_text=' + encodeURIComponent(document.getElementById("news_text").value) +
					 '&pod_one=' + encodeURIComponent(document.getElementById("pod_one").value) +
					 '&pod_two=' + encodeURIComponent(document.getElementById("pod_two").value) +
					 '&copyright=' + encodeURIComponent(document.getElementById("copyright").value) +
					 '&demonstration_page=' + document.getElementById("demonstration_page").value +
					 '&form_string=' + document.getElementById("form_string").value +
					 '&peer_form_string=' + document.getElementById("peer_form_string").value +
					 '&feedback_list=' + document.getElementById("feedback_list").value +
					 '&rss_title=' + document.getElementById("rss_title").value +
					 '&module_path=' + document.getElementById("module_path").value +
					 '&website_code_path=' + document.getElementById("website_code_path").value +
					 '&users_file_area_short=' + document.getElementById("users_file_area_short").value +
					 '&php_library_path=' + document.getElementById("php_library_path").value +
					 '&root_file_path=' + document.getElementById("root_file_path").value +
					 '&play_edit_preview_query=' + document.getElementById("play_edit_preview_query").value +
					 '&email_error_list=' + document.getElementById("error_email_list").value +
					 '&error_log_message=' + document.getElementById("error_log_message").value +
					 '&max_error_size=' + document.getElementById("max_error_size").value +
					 '&authentication_method=' + document.getElementById("authentication_method").value +
					 '&ldap_host=' + document.getElementById("ldap_host").value	+
					 '&ldap_port=' + document.getElementById("ldap_port").value +
					 '&bind_pwd=' + encodeURIComponent(document.getElementById("bind_pwd").value) +
					 '&base_dn=' + document.getElementById("base_dn").value +
					 '&bind_dn=' + document.getElementById("bind_dn").value +
					 '&flash_save_path=' + document.getElementById("flash_save_path").value +
					 '&flash_upload_path=' + document.getElementById("flash_upload_path").value +
					 '&flash_preview_check_path=' + document.getElementById("flash_preview_check_path").value +
					 '&flash_flv_skin=' + document.getElementById("flash_flv_skin").value +
					 '&site_email_account=' + document.getElementById("site_email_account").value +
					 '&headers=' + document.getElementById("headers").value +
					 '&email_to_add_to_username=' + document.getElementById("email_to_add_to_username").value +
					 '&proxy1=' + document.getElementById("proxy1").value +
					 '&port1=' + document.getElementById("port1").value +
					 '&site_session_name=' + document.getElementById("site_session_name").value +
					 '&synd_publisher=' + document.getElementById("synd_publisher").value +
					 '&synd_rights=' + document.getElementById("synd_rights").value +
					 '&synd_license=' + document.getElementById("synd_license").value +
					 '&import_path=' + document.getElementById("import_path").value +
					 '&enable_mime_check=' + document.getElementById("enable_mime_check").value +
					 '&mimetypes=' + document.getElementById("mimetypes").value +
					 '&enable_file_ext_check=' + document.getElementById("enable_file_ext_check").value +
					 '&file_extensions=' + document.getElementById("file_extensions").value +
					 '&enable_clamav_check=' + document.getElementById("enable_clamav_check").value +
					 '&clamav_cmd=' + document.getElementById("clamav_cmd").value +
					 '&clamav_opts=' + document.getElementById("clamav_opts").value +
					 '&LDAP_preference=' + document.getElementById("LDAP_preference").value +
					 '&LDAP_filter=' + document.getElementById("LDAP_filter").value +
					 '&integration_config_path=' + document.getElementById("integration_config_path").value +
					 '&admin_username=' + document.getElementById("admin_username").value +
					 '&admin_password=' + encodeURIComponent(document.getElementById("admin_password").value) +
					 '&site_xapi_endpoint=' + document.getElementById("site_xapi_endpoint").value +
					 '&site_xapi_key=' + document.getElementById("site_xapi_key").value +
					 '&site_xapi_secret=' + document.getElementById("site_xapi_secret").value +
 					 '&site_xapi_dashboard_enable=' + document.getElementById("site_xapi_dashboard_enable").value +
					 '&site_xapi_dashboard_nonanonymous=' + document.getElementById("site_xapi_dashboard_nonanonymous").value +
					 '&xapi_dashboard_minrole=' + document.getElementById("xapi_dashboard_minrole").value +
                     '&xapi_dashboard_urls=' + document.getElementById("xapi_dashboard_urls").value +
					 '&site_xapi_dashboard_period=' + document.getElementById("site_xapi_dashboard_period").value);

	}

}

// Function update course
//
// remove a share, and check who did it

function update_course(){

    if(setup_ajax()!=false){

        var url="course_details_management.php";

        xmlHttp.open("post",management_ajax_php_path + url,true);
        xmlHttp.onreadystatechange=management_alert_stateChanged;
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xmlHttp.send('course_freetext_enabled=' + document.getElementById("course_freetext_enabled").value);

    }

}


// Function delete sharing template
//
// remove a share, and check who did it

function user_template(){

	if(setup_ajax()!=false){

		var url="user_details_management.php";

		xmlHttp.open("post",management_ajax_php_path + url,true);
		xmlHttp.onreadystatechange=management_alert_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xmlHttp.send('user_id=' + active_section +
					 '&firstname=' + document.getElementById("firstname" + active_section).value +
					 '&surname=' + document.getElementById("surname"+active_section).value +
					 '&username=' + document.getElementById("username"+active_section).value );

	}

}

// Function play security list
//
// remove a share, and check who did it

function play_security_list(template){

	function_to_use="playsecurity";

	if(setup_ajax()!=false){

		var url="play_security_list.php";

		management_ajax_send_prepare(url);

		xmlHttp.send('logon_id=1');

	}

}

// Function new LTI Key
//
// add a new LTI Key

function new_LTI_key(){

    if(setup_ajax()!=false){

        var url="new_ltikey.php";

        xmlHttp.open("post",management_ajax_php_path + url,true);
        xmlHttp.onreadystatechange=management_stateChanged;
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xmlHttp.send('lti_keys_name=' + document.getElementById("lti_keys_nameNEW").value +
            '&lti_keys_key=' + document.getElementById("lti_keys_keyNEW").value +
            '&lti_keys_secret=' + document.getElementById("lti_keys_secretNEW").value +
            '&lti_keys_context_id=' + document.getElementById("lti_keys_context_idNEW").value);

    }


}

// Function edit LTI Key
//
// edit an LTI Key

function edit_LTI_key(editltikey){

    if(setup_ajax()!=false){

        var url="edit_ltikey.php";

        xmlHttp.open("post",management_ajax_php_path + url,true);
        xmlHttp.onreadystatechange=management_stateChanged;
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xmlHttp.send('lti_keys_name=' + document.getElementById("lti_keys_name" + editltikey).value +
            '&lti_keys_key=' + document.getElementById("lti_keys_key" + editltikey).value +
            '&lti_keys_secret=' + document.getElementById("lti_keys_secret" + editltikey).value +
            '&lti_keys_id=' + editltikey +
            '&lti_keys_context_id=' + document.getElementById("lti_keys_context_id" + editltikey).value);

    }


}

// Function delete LTI Key
//
// delete an LTI Key

function delete_LTI_key(ltikey){



    if(setup_ajax()!=false){
        if (confirm("Are you sure you want to delete")) {


        var url="delete_ltikey.php";

        xmlHttp.open("post",management_ajax_php_path + url,true);
        xmlHttp.onreadystatechange=management_stateChanged;
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xmlHttp.send('lti_keys_id=' + ltikey);
            //document.getElementById("lti_keys_nameNEW").value +
            //'&lti_keys_key=' + document.getElementById("lti_keys_keyNEW").value +
            //'&lti_keys_secret=' + document.getElementById("lti_keys_secretNEW").value +
            //'&lti_keys_context_id=' + document.getElementById("lti_keys_context_idNEW").value);

    }
    }

}

// Function new security
//
// remove a share, and check who did it

function new_security(){

	if(setup_ajax()!=false){

		var url="new_security.php";

		xmlHttp.open("post",management_ajax_php_path + url,true);
		xmlHttp.onreadystatechange=management_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xmlHttp.send('newsecurity=' + document.getElementById("newsecurity").value +
					 '&newdata=' + document.getElementById("newdata").value +
					 '&newdesc=' + document.getElementById("newdesc").value);

	}

}

// Function new category
//
// remove a share, and check who did it

function new_category(){

	if(setup_ajax()!=false){

		var url="new_category.php";

		xmlHttp.open("post",management_ajax_php_path + url,true);
		xmlHttp.onreadystatechange=management_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xmlHttp.send('newcategory=' + document.getElementById("newcategory").value);

	}

}

// Function new grouping
//
// remove a share, and check who did it

function new_grouping(){

    if(setup_ajax()!=false){

        var url="new_grouping.php";

        xmlHttp.open("post",management_ajax_php_path + url,true);
        xmlHttp.onreadystatechange=management_stateChanged;
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xmlHttp.send('newgrouping=' + document.getElementById("newgrouping").value);

    }

}

// Function new course
//
// remove a share, and check who did it

function new_course(){

    if(setup_ajax()!=false){

        var url="new_course.php";

        xmlHttp.open("post",management_ajax_php_path + url,true);
        xmlHttp.onreadystatechange=management_stateChanged;
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xmlHttp.send('newcourse=' + document.getElementById("newcourse").value);

    }

}

// Function new category
//
// remove a share, and check who did it

function new_license(){

	if(setup_ajax()!=false){

		var url="new_license.php";

		xmlHttp.open("post",management_ajax_php_path + url,true);
		xmlHttp.onreadystatechange=management_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xmlHttp.send('newlicense=' + document.getElementById("newlicense").value);

	}

}

// Function error list
//
// remove a share, and check who did it

function errors_list(template){

    function_to_use="errors";
	if(setup_ajax()!=false){

		var url="error_list.php";

		management_ajax_send_prepare(url);

		xmlHttp.send('logon_id=1');

	}

}

// Function delete error logs
//
// deletes all error logs

function delete_error_logs(){

	if (confirm(DELETE_PROMPT)) {

		if(setup_ajax()!=false){

			var url="delete_error_list.php";

			management_ajax_send_prepare(url);

			xmlHttp.send('logon_id=1');

		}

	}

}

// Function delete sharing template
//
// remove a share, and check who did it

function delete_template(template){

	if(setup_ajax()!=false){

		var url="delete_template.php";

		management_ajax_send_prepare(url);

		xmlHttp.send('template_id=' + template);

	}

}


var iframe_language_interval = 0;

function iframe_language_check_upload(){

    if(window["upload_iframe"].document.body.innerHTML!=""){

        if(window["upload_iframe"].document.body.innerHTML.indexOf("****")!=-1){

            clearInterval(iframe_language_interval);

            string = window["upload_iframe"].document.body.innerHTML.substr(window["upload_iframe"].document.body.innerHTML.indexOf(">")+1);

            string = string.substr(0,string.length-4);

            alert(string);

            refresh_languages();

            window["upload_iframe"].document.body.innerHTML="";

        }else{

            clearInterval(iframe_language_interval);

            string = window["upload_iframe"].document.body.innerHTML.substr(window["upload_iframe"].document.body.innerHTML.indexOf(">")+1);

            alert(PHP_ERROR + " - " + string);

        }

    }

}

var iframe_language_interval = 0;

function iframe_language_check(){

    if(window["upload_iframe"].document.body.innerHTML!=""){

        if(window["upload_iframe"].document.body.innerHTML.indexOf("****")!=-1){

            clearInterval(iframe_language_interval);

            string = window["upload_iframe"].document.body.innerHTML.substr(window["upload_iframe"].document.body.innerHTML.indexOf(">")+1);

            string = string.substr(0,string.length-4);

            alert(string);

            if(typeof window_reference==="undefined"){

                //window.opener.screen_refresh();
                window.opener.refresh_workspace();

            }else{

                //window_reference.screen_refresh();
                window_reference.refresh_workspace();

            }

            window["upload_iframe"].document.body.innerHTML="";

        }else{

            clearInterval(iframe_language_interval);

            string = window["upload_iframe"].document.body.innerHTML.substr(window["upload_iframe"].document.body.innerHTML.indexOf(">")+1);

            alert(PHP_ERROR + " - " + string);

        }

    }

}

/**
 *
 * Function iframe upload check initialise
 * This function starts checking the iframe for the response text every 5 seconds (used by the media quota import page).
 * @version 1.0
 * @author Patrick Lockley
 */

function iframe_upload_language_check_initialise(){

    iframe_language_interval = setInterval("iframe_language_check_upload()",500);

}

function iframe_language_check_initialise(){

    iframe_language_interval = setInterval("iframe_language_check()",500);

}

function management_languageChanged(){

    if (xmlHttp.readyState==4){

        response = xmlHttp.responseText.trim();
        if(response!=""){
            p = response.indexOf("****");
            if (p != -1)
            {
                msg = response.substr(0, p);
                innerhtml = response.substr(p+4);
                elmnt = document.getElementById('languagedetails_child');
                elmnt.innerHTML = innerhtml;
                if (msg != "")
                    alert(msg);
            }
            else
            {
                alert(response);
            }

        }
    }
}

function delete_language(code){
    var answer = confirm(MANAGEMENT_DELETE_LANGUAGE + code);
    if (answer)
    {
        if (setup_ajax() != false)
        {
            var url = "../language/delete_language.php";

            xmlHttp.open("post",management_ajax_php_path + url,true);
            xmlHttp.onreadystatechange=management_languageChanged;
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xmlHttp.send('code=' + code);
        }
    }
}

function refresh_languages()
{
    if (setup_ajax() != false)
    {
        var url = "../language/refresh_language.php";

        xmlHttp.open("post",management_ajax_php_path + url,true);
        xmlHttp.onreadystatechange=management_languageChanged;
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xmlHttp.send();
    }
}
// Function give a project
//
// remove a share, and check who did it

function change_owner(template_id){

	if(setup_ajax()!=false){

		var url="change_owner.php";

		xmlHttp.open("post",management_ajax_php_path + url,true);
		xmlHttp.onreadystatechange=change_owner_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		login = (document.getElementById(template_id + "_new_owner").value);

		xmlHttp.send('template_id=' + template_id + '&new_user=' + login);

	}

}

// Function give a project
//
// remove a share, and check who did it

function change_owner_stateChanged(){

	if (xmlHttp.readyState==4){

		if(xmlHttp.responseText!=""){

			alert(USER_CHANGED);
			users_list();

		}else{

			alert("ERROR " + xmlHttp.responseText);

		}
	}

}

function templates_get_details(user_id, template_id)
{
	var tag = user_id + "template" + template_id;
	var child_tag = tag + "_child";
	var button_tag = tag + "_btn";
	if(document.getElementById(child_tag).style.display=="block"){
		// details are displayed at the moment, hide
		document.getElementById(child_tag).style.display="none";
		document.getElementById(button_tag).innerHTML = MANAGEMENT_SHOW;
	}
	else
	{
		var url="get_user_template_details.php";
		//retrieve details and show
		$.ajax({
			method: 'GET',
			url: management_ajax_php_path + url,
			data: {
				'user_id': user_id,
				'template_id': template_id,
			}
		})
		.done(function (data) {
			$('#' + child_tag).html(data);
			document.getElementById(child_tag).style.display="block";
			document.getElementById(button_tag).innerHTML = MANAGEMENT_HIDE;
		});
	}
}

var active_section = null;

function templates_display(tag){

	var child_tag = tag + "_child";
    var button_tag = tag + "_btn";
	active_section = document.getElementById(tag).getAttribute("savevalue");

	if(document.getElementById(child_tag).style.display=="block"){

		document.getElementById(child_tag).style.display="none";
	    document.getElementById(button_tag).innerHTML = MANAGEMENT_SHOW;
	}else{

		document.getElementById(child_tag).style.display="block";
        document.getElementById(button_tag).innerHTML = MANAGEMENT_HIDE;

	}

}



function templates_delete_sub(id){
	if (confirm(REMOVE_SUB)) {
		if (setup_ajax() != false) {

			var url = "template_delete_sub.php";

			xmlHttp.open("post", management_ajax_php_path + url, true);
			xmlHttp.onreadystatechange = management_delete_sub_stateChanged;
			xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			xmlHttp.send('template_id=' + id);
		}
	}
}

function save_changes(){

	switch(function_to_use){

		case "templates":update_template();
		    break;
		case "users":user_template();
			break;
		case "site":update_site();
			break;
		case "playsecurity":update_play_security();
			  break;
		case "course": update_course();
			break;
		default: break;


	}

}

function list_templates_for_user(tag){

    var user = document.getElementById(tag).value;

    if(setup_ajax()!=false){

        var url="get_templates_for_user.php";

        xmlHttp.open("post","website_code/php/management/" + url,true);
        xmlHttp.onreadystatechange=list_templates_for_user_stateChanged;
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xmlHttp.send('user_id=' + user);

    }else{

        alert(USERTEMPLATES_FAIL_RETRIEVE);

    }

}

function list_templates_for_user_stateChanged(){

    if (xmlHttp.readyState==4){

        if(xmlHttp.responseText!=""){

            document.getElementById('usertemplatelist').innerHTML = xmlHttp.responseText;

        }else{

            alert("ERROR " + xmlHttp.responseText);

        }
    }

}

function search_user_templates(tag){

	var search = document.getElementById(tag).value;
	if(setup_ajax()!=false){

		var url="search_user_templates.php";

		xmlHttp.open("post","website_code/php/management/" + url,true);
		xmlHttp.onreadystatechange=search_user_templates_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xmlHttp.send('search=' + search);

	}else{

		alert(USERTEMPLATES_FAIL_RETRIEVE);

	}

}

function search_user_templates_stateChanged(){

	if (xmlHttp.readyState==4){

		if(xmlHttp.responseText!=""){

			document.getElementById('usertemplatelist').innerHTML = xmlHttp.responseText;

		}else{

			alert("ERROR " + xmlHttp.responseText);

		}
	}

}

function transfer_user_templates(tag){

	var user = $('#' + tag).val();
	if(setup_ajax()!=false){

		var url="transfer_user_templates.php";

		xmlHttp.open("post","website_code/php/management/" + url,true);
		xmlHttp.onreadystatechange=transfer_user_templates_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xmlHttp.send('user_id=' + user);

	}else{

		alert(USERTEMPLATES_FAIL_RETRIEVE);

	}

}

function transfer_user_templates_stateChanged(){

	if (xmlHttp.readyState==4){

		if(xmlHttp.responseText!=""){

			$('#transferownership').html(xmlHttp.responseText).show();

		}else{

			alert("ERROR " + xmlHttp.responseText);

		}
	}

}

function do_transfer_user_templates(user_id, tag_user_select, tag_transfer_private, tag_delete_user)
{
	var new_user = $('#' + tag_user_select).val();
	var transfer_private = $('#' + tag_transfer_private).prop('checked');
	var delete_user = $('#' + tag_delete_user).prop('checked');

	$("#transfer_result").show();

	if(setup_ajax()!=false){

		var url="do_transfer_user_templates.php";

		xmlHttp.open("post","website_code/php/management/" + url,true);
		xmlHttp.onreadystatechange=do_transfer_user_templates_stateChanged;
		xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xmlHttp.send('olduserid=' + user_id + "&newuserid=" + new_user + "&transfer_private=" + transfer_private + "&delete_user=" + delete_user);

	}else{

		alert(USERTEMPLATES_FAIL_RETRIEVE);

	}
}

function do_transfer_user_templates_stateChanged(){

	if (xmlHttp.readyState==4){

		if(xmlHttp.responseText!=""){

			$('#transferownership').html(xmlHttp.responseText).show();

		}else{

			alert("ERROR " + xmlHttp.responseText);
		}
	}
}

function transfer_user_templates_closepanel()
{
	$("#transferownership").html("");
	user_templates_list();
}

function sub_select_change_all(template_type_id)
{
	// Toggle all checkboxes based on template_type_id
	var checked = $("#sub_page_select_all_" + template_type_id).is(":checked");
	// Toggle all checkboxes with class sub_page_selection_model_<template_type_id>
	$(".sub_page_selection_model_" + template_type_id).prop("checked", checked);
}

