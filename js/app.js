<!--
function UAL_YEAR_1_BLANK()
{
parent.sub_menu.location="UAL_YEAR_1_BLOGS.htm";
parent.main.location="blank.htm";
}
//-->

<!--
function BTEC_YEAR_2_BLANK()
{
parent.sub_menu.location="BTEC_YEAR_2_BLOGS.htm";
parent.main.location="blank.htm";
}
//-->

<!--
function UAL_STAFF()
{
parent.sub_menu.location="UAL_STAFF.htm";
parent.main.location="blank.htm";
}
//-->



<!--
function STAFF()
{
parent.sub_menu.location="staff.htm";
parent.main.location="blank.htm";
}
//-->

<!--
function YEAR_1_BLANK()
{
parent.sub_menu.location="YEAR_1_BLOGS.htm";
parent.main.location="blank.htm";
}
//-->

<!--
function YEAR_2_BLANK()
{
parent.sub_menu.location="YEAR_2_BLOGS.htm";
parent.main.location="blank.htm";
}
//-->

<!--
function Fda_STAFF()
{
parent.sub_menu.location="blank.htm";
parent.main.location="blank.htm";
}
//-->

<!--
function FDA_GAME_ART_BLANK()
{
parent.sub_menu.location="FDA_GAME_ART_BLOGS.htm";
parent.main.location="blank.htm";
}
//-->

<!--
function FDA_DIGITAL_DESIGN_BLANK()
{
parent.sub_menu.location="FDA_DIGITAL_DESIGN_BLOGS.htm";
parent.main.location="blank.htm";
}
//-->

<!--
function FDA_JOURNALISM_YEAR_1_BLANK()
{
parent.sub_menu.location="FDA_JOURNALISM_YEAR_1_BLOGS.htm";
parent.main.location="blank.htm";
}
//-->

<!--
function FDA_MULTIMEDIA_YEAR_2_BLANK()
{
parent.sub_menu.location="FDA_MULTIMEDIA_YEAR_2_BLOGS.htm";
parent.main.location="blank.htm";
}
//-->

$(document).ready(function() {
$('.popup').click(function(event) {
    window.open($(this).attr("href"), "popupWindow", "left=280, top=90, width=1280, height=768,scrollbars=yes");
    return false;
 });
});
