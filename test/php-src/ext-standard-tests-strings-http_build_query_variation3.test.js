// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/http_build_query_variation3.phpt
  it("Test http_build_query() function: usage variations - testing four parameter added in PHP 5.4.0", function () {
    expect(parser.parseCode("<?php\n$oDimensional = array(\n  \"name\" => \"main page\",\n  \"sort\" => \"desc,admin\",\n  \"equation\" => \"10 + 10 - 5\"\n);\necho http_build_query($oDimensional, '', ini_get('arg_separator.output'), PHP_QUERY_RFC1738) . PHP_EOL;\necho http_build_query($oDimensional, '', ini_get('arg_separator.output'), PHP_QUERY_RFC3986);\n?>")).toMatchSnapshot();
  });
});
