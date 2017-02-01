# My version of the AngularJS [PhotoSwipe](http://photoswipe.com/) Directive

Installation
------------

You can choose your preferred method of installation:
* Through bower: `bower install ng-photoswipe --save`
* Through npm: `npm install ng-photoswipe --save`
* Download from github: [angular-photoswipe.min.js](https://github.com/m00s/angular-photoswipe/blob/master/angular-photoswipe.min.js)

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