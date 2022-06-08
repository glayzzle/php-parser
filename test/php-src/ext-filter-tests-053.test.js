// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/053.phpt
  it("filter_var() - using callback", function () {
    expect(parser.parseCode("<?php\nfunction filter_test($str) { return FALSE; }\nfilter_var('durty/boy', FILTER_CALLBACK, array(\n   'options'   => 'filter_test',\n));\nprint \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
