# Armorhead

## Basic setup
1. Import the routes for your new theme, find a file named routes.yaml in the theme folder and upload this file from within your Ghost admin panel under Settings » Labs.
2. Import a basic setup to review the theme features, find a file named basic.json in the theme folder and upload this file from within your Ghost admin panel under Settings » Labs.

## Home page
The following tags can be used to display the posts on the home page:

`#top-left` (2 posts)  
`#top-center` + featured (1 post)  
`#top-right` (4 posts)  
`#top-middle` (4 posts)  
`#top-bottom-left` (2 posts)  
`#top-bottom-right` (1 post) (there must be at least one post in top-bottom-left section)  
`#more` (5 posts)  

`#home-newsletter` makes display a newsletter form widget in the home view  
`#home-widget` makes page display in home optional widget area  

styles tags for #home-widgets

`#no-title` removes widget title  
`#image-center` center and limit size of widget

## Posts
You can use custom styles for images alignment with the following html code:

#### Left Aligned
```html
<div class="left-aligned">
    <img src="http://localhost/example.jpg">
</div>
```
#### Right Aligned
```html
<div class="right-aligned">
    <img src="http://localhost/example.jpg">
</div>
```

and custom styles for quotes alignment with the following html code:

#### Left Aligned
```html
<blockquote class="left-aligned">
  “The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”
  <cite>― Mark Caine</cite>
</blockquote>
```

#### Right Aligned
```html
<blockquote class="right-aligned">
  “It is our choices, that show what we truly are, far more than our abilities.”
  <cite>― J. K Rowling</cite>
</blockquote>
```

## Sidebar
Sidebar contains the main menu along some optional widgets.

`#sidebar-newsletter` activate newsletter form on the sidebar  
`#sidebar-channel` makes channel display as an item on the sidebar menu for channels
`#sidebar-widget` makes page display as a widget on the sidebar

## Header
You can add any page to the header main menu with the following tag:

`#main-menu` displays any page as a menu item in the header menu

## Footer
There is a social menu that can be set up from the secondary menu of Ghost and a section for any other page and his own tags. You can use this section to display your channels and their tags.

#### Social menu
From within your Ghost admin panel under Settings » Design set up your social menu with the following names.

* facebook
* twitter
* instagram
* mastodon
* linkedin
* youtube
* pinterest
* github
* reddit
* skype
* telegram

#### Footer sections
`#display-footer` add this tag to one page to show the footer sections, the last section of the footer will use the title and content of this page.
`#footer-channel` any page with this tag will be shown in the footer along with the tags attached to that page.

## Tags Page
Displays tags assigned to that page as featured tags.

Name: page title  
Content: page description

## Authors Page
Displays authors assigned to that page as featured authors.

Name: page title  
Content: page description

## Channels Page
Displays a list of featured channels.

Name: page name and sidebar widget name  
Content: page description
#### Optional tags:
`#display-sidebar-channels` activate sidebar widget for channels

## Channel
Channels can group multiple tags for a better organization.

`#featured-channel` display channel on channels page
`#footer-channel` displays channel page along with tags of that page as menu items
`#sidebar-channel` displays channel as a menu item on sidebar channel menu

#### Set up a new channel
Create a channel to unify a group of tags.

1. Set up your channel in the routes.yaml file, download this file from within your Ghost admin panel under `Settings » Labs`
```yaml
routes:
  /travel/:
    data: page.travel
    controller: channel
    template: channel
    filter: tag:[cities,food,places,gear]
```
2. You must define the tags related to your new channel in the filter section of your new channel definition.
3. Upload the routes.yaml file from within your Ghost admin panel under `Settings » Labs`
4. Create a page with the same page url of your channel, in this example "travel"

You can find some examples of channels in the routes.example.yaml file inside the theme folder.

## Membership
Setup your membership page content from this pages:
* Membership Free Page: content free
* Membership Monthly Page: content monthly
* Membership Yearly Page: content yearly

Use the following html code to set up your membership tables custom content:
```html
<li class="membership-plan-feature">Full access to all private posts</li>
<li class="membership-plan-feature">Weekly email newsletter</li>
<li class="membership-plan-feature">Support independent publishing</li>
<li class="membership-plan-feature">Simple, secure card payment</li>
<li class="membership-plan-feature">One easy payment instead of 12!</li>
```

Setup bottom mail contact in `Meta data -> Meta description`

## Newsletter
Name: page title  
Content: page content

## Sign In
Name: page title  
Content: page content

## Sign Up
Name: page title  
Content: page content

## Contact Page
Name: page title  
Content: page content  
Meta description: contact email

## Disqus
1. Go to Code injection.
2. Add this to Blog Header:

```javascript
<script>var disqus = 'YOUR_DISQUS_SHORTNAME';</script>
```

## Search

1. Go to Integrations.
2. Choose Add custom integration, name it Search and choose Create.
3. Copy the generated Content API Key and the API URL.
3. Go to Code injection.
4. Add this to Blog Header:

```javascript
<script>
  var searchKey = 'PASTE_THE_GENERATED_KEY_HERE';
  var searchUrl = 'PASTE_THE_GENERATED_URL_HERE';
</script>
```

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
yarn zip
```

# PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- Variables - Simple pure CSS variables
- [Color Function](https://github.com/postcss/postcss-color-function)


# Copyright & License

Copyright (c) 2013-2020 Ghost Foundation - Released under the [MIT license](LICENSE).
