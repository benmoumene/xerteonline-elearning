<?php
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
require(dirname(__FILE__) . "/module_functions.php");

//Function show_template
//
// (pl)
// Set up the preview window for a xerte piece
require(dirname(__FILE__) .  '/../../website_code/php/xmlInspector.php');
function show_template($row_play){
    global $xerte_toolkits_site;

    $string_for_flash = $xerte_toolkits_site-> users_file_area_short . $row_play['template_id'] . "-" . $row_play['username'] . "-" . $row_play['template_name'] . "/";

    $xmlfile = $string_for_flash . "data.xml";

    $xmlFixer = new XerteXMLInspector();
    $xmlFixer->loadTemplateXML($xmlfile, true);

    if (strlen($xmlFixer->getName()) > 0)
    {
        $title = $xmlFixer->getName();
    }
    else
    {
        $title = SITE_PREVIEW_TITLE;
    }

    $string_for_flash_xml = $xmlfile . "?time=" . time();

	$template_path_string = "modules/site/parent_templates/" . $row_play['parent_template'] ."/";

    list($x, $y) = explode("~",get_template_screen_size($row_play['template_name'],$row_play['template_framework']));

    _load_language_file("/modules/site/preview.inc");

    $version = getVersion();
    $language_ISO639_1code = substr($xmlFixer->getLanguage(), 0, 2);
    // $engine is assumed to be javascript if flash is NOT set
    $page_content = file_get_contents($xerte_toolkits_site->basic_template_path . $row_play['template_framework'] . "/player_html5/rloObject.htm");
    $page_content = str_replace("%VERSION_PARAM%", "?version=" . $version , $page_content);
    $page_content = str_replace("%LANGUAGE%", $language_ISO639_1code, $page_content);
    $page_content = str_replace("%TITLE%", $title , $page_content);
    $page_content = str_replace("%TEMPLATEPATH%", $template_path_string, $page_content);
    $page_content = str_replace("%XMLPATH%", $string_for_flash, $page_content);
    $page_content = str_replace("%XMLFILE%", $string_for_flash_xml, $page_content);
	$page_content = str_replace("%THEMEPATH%", "themes/" . $row_play['parent_template'] . "/",$page_content);
    $page_content = str_replace("%LASTUPDATED%", $row_play['date_modified'], $page_content);

    echo $page_content;

}
