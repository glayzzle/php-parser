<?php
echo "Hello x4 :\n";
include 'index.php';
include_once('index.php');
require_once 'index.php';
require 'index.php';
echo "\n\nWarning message :\n";
include 'not-found.php';
echo "\n\nSupress warning :\n";
@include 'not-found.php';
echo "\n\nRequire error :\n";
require 'not-found.php';
