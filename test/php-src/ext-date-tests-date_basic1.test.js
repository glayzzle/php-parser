// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_basic1.phpt
  it("Test date() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n//Set the default time zone\ndate_default_timezone_set(\"Europe/London\");\necho \"*** Testing date() : basic functionality ***\\n\";\n$timestamp = mktime(10, 44, 30, 2, 27, 2009);\nvar_dump( date(\"F j, Y, g:i a\", $timestamp) );\nvar_dump( date(\"m.d.y\", $timestamp) );\nvar_dump( date(\"j, n, Y\", $timestamp) );\nvar_dump( date(\"Ymd\", $timestamp) );\nvar_dump( date('h-i-s, j-m-y, it is w Day', $timestamp) );\nvar_dump( date('\\i\\t \\i\\s \\t\\h\\e jS \\d\\a\\y.', $timestamp) );\nvar_dump( date(\"D M j G:i:s T Y\", $timestamp) );\nvar_dump( date('H:m:s \\m \\i\\s\\ \\m\\o\\n\\t\\h', $timestamp) );\nvar_dump( date(\"H:i:s\", $timestamp) );\n?>")).toMatchSnapshot();
  });
});
