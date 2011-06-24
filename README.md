# Jaguarundi

## Description

Jaguarundi is an Ant build script to optimize Javascript and CSS resources in your project.

## Introduction

The goal of this small project is to simplify and improve the way static resources are optimized before being deployed to the webserver for public access.

## What does it do?

* Reduce the number of http requests: by concatenating both Javascript and CSS files
* Reduce the number of kilobytes: by minifying both Javascript and CSS files (using Yahoo Compressor and/or Google Compiler)
* Version the resulting files: when a Javascript or CSS file is changed, the resulting filename is also updated (to allow for caching, but still always get the latest version)
* Replace the references to the original Javascript and CSS files and replace with references to the resulting optimized files.

## Requirements

* Ant
* Ant-Contrib (ant-contrib-1.0b3.jar included)
* Google Compiler (compiler-20110615.jar of included)
* YUI Compressor (yuicompressor-2.4.6.jar included)

## Example

First of all, it is probably the most clear to simply clone this project, and run `ant` from the build folder. Looking at the result should gave a good impression. The code is also documented. Having that said... In an HTML file (index.html in this example) one might have the following:

	<!--##OPTIMIZE_CSS##-->
	<link rel="stylesheet" href="css/normalize.css" type="text/css"/>
	<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
	<link rel="stylesheet" href="css/typography.css" type="text/css"/>
	<!--##OPTIMIZE_CSS##-->

When the build script has run, this will be replaced by:

	<link rel="stylesheet" href="http://static.example.org/css/stylesheet-468fb262.css" type="text/css"/>
	
And the actual file being referenced here (`stylesheet-468fb262.css`) is created, obviously. For Javascript it works identical, but with `<script>` elements. It is all easily configurable, e.g. you can set:

* the url to the resulting file (here: `http://static.example.org/css/`)
* the filename of the resulting optimized file (here: `stylesheet.css` - the build script added `-468fb262`)
* the length of the checksum in the filename (here: `8`, max: `32`)
* the files to be concatenated and optimized (e.g. in development there is an extra debug.css that should not be included)
* the order of the files to be concatenated

By the way, all source files are first copied to a distribution folder before being processed.
