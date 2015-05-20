###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :blog do |blog|
  # blog.prefix = "blog"
  # blog.permalink = ":year/:month/:day/:title.html"
  # blog.sources = ":year-:month-:day-:title.html"
  # blog.taglink = "tags/:tag.html"
  blog.layout = "post"
  blog.summary_separator = /<!--\s?more\s?-->/
  blog.summary_length = BigDecimal::INFINITY
  # blog.summary_length = 250
  # blog.year_link = ":year.html"
  # blog.month_link = ":year/:month.html"
  # blog.day_link = ":year/:month/:day.html"
  blog.default_extension = ".md"
  blog.sources = "post/:year-:month-:day-:title.html"


  blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/:num"
end

activate :contentful do |f|
  f.space         = {SmartShift: 'px0dm4wqzul1'}
  f.access_token  = '1afcf1f81058681241fe393b110e204546e9817ba1a00bdc869bb9bf935d6ca1'
  f.cda_query     = { include: 1 }
  f.content_types = { Keep: '6k3plA0080AooWcqA202ME',
					  Clients: 'VHutoNmkeIAAGguGiccWK',
					  Landing: '4QkKtumA2ciCYy8kEOAYSc',
					  Social: '5g7DG5tFxKOU2OSo6UIcaU',
					  CallUs: '3hcGwEqN2UaoSSMM6eieUg',
					  CaseStudy:  '6dqcI5zijSIAGQ6oASuqm'}
end
