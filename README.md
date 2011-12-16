# Jaguarundi

## Description

Jaguarundi is an Ant build script to optimize Javascript and CSS resources in your project.

## Introduction

The goal of this small project is to simplify and improve the way static resources are optimized before being deployed to the webserver for public access.

## What does it do?

* Reduce the number of http requests: by concatenating both Javascript and CSS files
* Reduce the number of kilobytes: by minifying both Javascript and CSS files (using Yahoo Compressor and/or Google Compiler)
* Version the resulting files: by adding a checksum of the resulting file to the filename (this is better than e.g. a new version for each deployment, since those files might not have been changed).
* Replace the references to the original Javascript and CSS files and replace with references to the resulting optimized files.

By the way, all source files are first copied to a distribution folder before being processed (so it doesn't touch your source files).

## Requirements

* Ant
* Ant-Contrib (included)
* Google Compiler (included)
* YUI Compressor (included)

## Example

First of all, it is probably best to clone this project, and run `ant` from the build folder. Looking at the result should give a good impression. The build script is also documented. Having that said... An HTML file (index.html in this example) might contain the following:

	<!--##OPTIMIZE_CSS##-->
	<link rel="stylesheet" href="css/normalize.css" type="text/css"/>
	<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
	<link rel="stylesheet" href="css/typography.css" type="text/css"/>
	<!--##OPTIMIZE_CSS##-->

When the build script has run, this will be replaced by:

	<link rel="stylesheet" href="http://static.example.org/css/stylesheet-468fb262.css" type="text/css"/>

And the actual file being referenced here (`stylesheet-468fb262.css`) is created, containing the minified source of the original files. For Javascript this works identical (using `<script>` elements), yet here we can also simply use strings (for use in script loaders). Please refer to /src/index.html for an example.

## Configuration

It is all easily configurable, e.g. you can set:

* the files to be concatenated and optimized (e.g. in development there might be debug.css that should not be included)
* the order of the files to be concatenated
* optional: the filename of the resulting optimized file (default: `stylesheet.css`/`script.js`)
* optional: the checksum of the optimized file replaces `#` characters in the filename (e.g. `script.########.min.js` becomes `script.db981dae.min.js`)
* optional: the tags surrounding the `<link>` or `<script>` elements (default: `<!--##OPTIMIZE_CSS##-->`)
* optional: the url to the resulting file (here: `http://static.example.org/css/`)

The `build.xml` and `build.properties` file are the files you should modify. The `optimize.xml` file containing `<macrodef>`s (to be used as Ant tasks) is meant to be included in existing build scripts. Of course, you can also use the provided files as a starting point and work from there.

## Ideas for improvement

* Ant task to optimize images (using e.g. PNGOUT).
* Ant task to minify HTML.
* Provide the option to automatically resolve an ordered fileset within the wrapping tags (no need to provide a `<filelist>`).
* Provide option to choose the minifyer lib for Javascript and CSS (separately).

Have more or better ideas? Tell me about it! I'm happy to try and implement yours or even better, accept your pull requests.

## Contact details

[Lars Kappert](mailto:lars@webpro.nl), [WebPro](http://webpro.nl). You can also follow me on Twitter: [@webprolific](http://twitter.com/webprolific).

## Jaguawhat?

The name of this project is arbitrarily taken from a wild cat species. It is a flexible animal; an agile climber and a good swimmer.

## License

Copyright (c) 2011 Lars Kappert, WebPro. This software is licensed under the MIT License.
