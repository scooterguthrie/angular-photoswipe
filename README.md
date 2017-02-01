# My version of the AngularJS [PhotoSwipe](http://photoswipe.com/) Directive

Usage
------
Inject `ngPhotoswipe` module in your application with:

``` js
angular.module('myApp', ['ngPhotoswipe'])
```

and use the directive as below:

``` html
<div ng-photoswipe
     slides="slides"
     slide-selector=".ps-thumbs > li > img"
     open="isOpen"
     on-close="onGalleryClose()"
     template="'ui/templates/ng-photoswipe.html'"
     options="opts"></div>
```