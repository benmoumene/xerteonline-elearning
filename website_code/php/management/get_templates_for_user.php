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
/**
 * Created by JetBrains PhpStorm.
 * User: tom
 * Date: 28-2-13
 * Time: 18:48
 * To change this template use File | Settings | File Templates.
 */

require_once("../../../config.php");

_load_language_file("/website_code/php/management/user_templates.inc");

require("../user_library.php");
require("../url_library.php");
require("management_library.php");

if(is_user_admin()){

    $database_id = database_connect("templates list connected","template list failed");

    // get the current login_id
    if (!isset($_REQUEST['user_id']))
    {
        exit;
    }
    $login_id = $_REQUEST['user_id'];

    // Get all users
    $query="SELECT * FROM " . $xerte_toolkits_site->database_table_prefix . "logindetails order by surname,firstname,username" ;

    $query_response = db_query($query);
    // Fetch users only once and put the results in a php array
    $logins = array();
    foreach($query_response as $login) {
        $logins[] = $login;
        if ($login['login_id'] == $login_id)
        {
            $row = $login; // record of current login
        }
    }

    $prefix = $xerte_toolkits_site->database_table_prefix;
    // Now query all templates in use and sort on username
    $query_templates="select td.*, tr.*, ld.*, od.login_id as owner_id, od.firstname "
            . "as owner_firstname, od.surname as owner_surname, "
            . "od.username as owner_username from {$prefix}templatedetails td,"
            . "{$prefix}templaterights tr," 
            . "{$prefix}logindetails ld," 
            . "{$prefix}logindetails od "
            . "where tr.user_id = ld.login_id and ld.login_id = ? "
            . "and od.login_id = td.creator_id and tr.template_id = td.template_id";
     $params = array($login_id);
            
    _debug("Query for templates of user " . $row['username'] . ": " . $query_templates);

    $query_templates_response = db_query($query_templates, $params);

    _debug("Query returned " . count($query_templates_response) . "records");

    echo "<div class=\"template\" id=\"" . $row['username'] . "\" savevalue=\"" . $row['login_id'] .  "\"><p>" . $row['firstname'] . " " . $row['surname'] . " (" . $row['username'] . ") </p><br /><br /></div><div class=\"template_details\" style=\"display:block;\" id=\"" . $row['username']  . "_child\">";

    if(count($query_templates_response) > 0){
        // This user has templates, loop over them
        _debug("User " . $row['username'] . " (" . $row['login_id'] . ") has templates");
        foreach($query_templates_response as $row_templates) {
            $debug_rec = print_r($row_templates, true);
            //_debug($debug_rec);

            echo "<div class=\"template\" id=\"" . $row['login_id'] . "template" . $row_templates['template_id'] . "\"><p>" . $row_templates['template_id'] . " - " . str_replace('_', ' ', $row_templates['template_name']) .  " <button type=\"button\" class=\"xerte_button\" id=\"" . $row['login_id'] . "template" . $row_templates['template_id'] . "_btn\" onclick=\"javascript:templates_get_details(" . $row['login_id'] . ", " . $row_templates['template_id'] . ")\">". USERS_MANAGEMENT_TEMPLATE_VIEW . "</button></p></div><div class=\"template_details\" id=\"" . $row['login_id'] . "template" . $row_templates['template_id']  . "_child\"></div>";
            /*
            echo "<table class=\"template_details_table\">";
            echo "<tr><td>" . USERS_MANAGEMENT_TEMPLATE_ID . "</td><td>" . $row_templates['template_id']  . "</td></tr>";
            echo "<tr><td>" . USERS_MANAGEMENT_TEMPLATE_OWNER . "</td><td>" . $row_templates['owner_firstname'] . " " . $row_templates['owner_surname'] . " (" . $row_templates['owner_username'] . ")</td></tr>";
            echo "<tr><td>" . USERS_MANAGEMENT_TEMPLATE_ROLE . "</td><td>" .  $row_templates['role'] . "</td></tr>";
            echo "<tr><td>" . USERS_MANAGEMENT_TEMPLATE_CREATED . "</td><td>" . $row_templates['date_created']  . "</td></tr>";
            echo "<tr><td>" . USERS_MANAGEMENT_TEMPLATE_MODIFIED . "</td><td>" . $row_templates['date_modified']  . "</td></tr>";
            echo "<tr><td>" . USERS_MANAGEMENT_TEMPLATE_ACCESSED . "</td><td>" . $row_templates['date_accessed']  . "</td></tr>";
            echo "<tr><td>" . USERS_MANAGEMENT_TEMPLATE_PLAYS . "</td><td>" . $row_templates['number_of_uses']  . "</td></tr>";
            echo "<tr><td>" . USERS_MANAGEMENT_TEMPLATE_ACCESS . "</td><td>" . $row_templates['access_to_whom']  . "</td></tr>";
            echo "</table>";
            echo "<p><button type=\"button\" class=\"xerte_button\" onclick=\"javascript:edit_window('" . $row_templates['template_id'] . "')\"><i class=\"fa fa-pencil-square-o\"></i> " . USERS_MANAGEMENT_TEMPLATE_EDIT . "</button>";
            echo " - <button type=\"button\" class=\"xerte_button\" onclick=\"javascript:preview_window('" . $row_templates['template_id'] . "')\"><i class=\"fa fa-play\"></i> " . USERS_MANAGEMENT_TEMPLATE_PREVIEW . "</button>";
            echo " - <button type=\"button\" class=\"xerte_button\" onclick=\"javascript:properties_window('" . $row_templates['template_id'] . "')\"><i class=\"fa fa-info-circle\"></i> " . USERS_MANAGEMENT_TEMPLATE_PROPERTIES . "</button></p>";

            echo "<p>" . USERS_MANAGEMENT_TEMPLATE_GIVE . "</p>";

            echo "<form name=\"" . $row['login_id'] . "_" . $row_templates['template_id'] . "\" action=\"javascript:change_owner('" . $row_templates['template_id'] . "')\"><select id=\"" . $row_templates['template_id'] . "_new_owner\">";

            foreach($logins as $row_users){

                if ($row['login_id'] != $row_users['login_id'])
                {
                    echo "<option value=\"" . $row_users['login_id'] . "\">" . $row_users['surname'] . ", " . $row_users['surname'] . " (" . $row_users['username'] . ")</option>";
                }

            }

            echo "</select>";

            //}

            echo "<input type=\"hidden\" value=\"" . $row['login_id'] . "_" . $row_templates['template_id'] . "\" name=\"template_id\" /><button type=\"submit\" class=\"xerte_button\"><i class=\"fa fa-share\"></i> " . USERS_MANAGEMENT_TEMPLATE_GIVE_BUTTON . "</button></form></div>";
            // Next record
            */
        }

    }else{
        _debug("User " . $row['username'] . " (" . $row['login_id'] . ") has NO templates");
        echo "<div class=\"template\" savevalue=\"" . $row['template_id'] .  "\"><p>" . USERS_MANAGEMENT_TEMPLATE_NONE . "</p></div>";

    }

    echo "</div>";

}else{

    management_fail();

}

