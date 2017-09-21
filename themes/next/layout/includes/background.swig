<script>
var vegasConfig = {{ JSON.stringify(theme.vegasConfig) }};
var unsplashConfig = {{ JSON.stringify(theme.unsplashConfig) }};
// is show background images
var turnoffBackgroundImage = false;
{% if is_home() && (theme.turnoffBackgroundImage.index) %}
  turnoffBackgroundImage = true;
{% endif %}
{% if (is_archive() || is_year() || is_month() || is_category() || is_tag()) && (theme.turnoffBackgroundImage.post_list) %}
  turnoffBackgroundImage = false;
{% endif %}
{% if is_post() && (theme.turnoffBackgroundImage.post) %}
  turnoffBackgroundImage = true;
{% endif %}
var backgroundColor = {{ JSON.stringify(config.backgroundColor || theme.backgroundColor )}};


if(!turnoffBackgroundImage){
  playBackground(10);
}
else {
  playBackground(1);
}


</script>
