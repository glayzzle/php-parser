// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/http_build_query_variation2.phpt
  it("Test http_build_query() function: usage variations - first arguments as multidimensional array and second argument present/not present", function () {
    expect(parser.parseCode("<?php\n$mDimensional = array(\n  20,\n  5 => 13,\n  \"9\" => array(\n    1 => \"val1\",\n    3 => \"val2\",\n    \"string\" => \"string\"\n  ),\n  \"name\" => \"homepage\",\n  \"page\" => 10,\n  \"sort\" => array(\n    \"desc\",\n    \"admin\" => array(\n      \"admin1\",\n      \"admin2\" => array(\n        \"who\" => \"admin2\",\n        2 => \"test\"\n      )\n    )\n  )\n);\necho http_build_query($mDimensional) . PHP_EOL;\necho http_build_query($mDimensional, 'prefix_');\n?>")).toMatchSnapshot();
  });
});
