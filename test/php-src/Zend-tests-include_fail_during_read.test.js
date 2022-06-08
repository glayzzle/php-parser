// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/include_fail_during_read.phpt
  it("Include fails during read", function () {
    expect(parser.parseCode("<?php\nclass SampleFilter extends php_user_filter { }\nstream_filter_register('sample.filter', SampleFilter::class);\ninclude 'php://filter/read=sample.filter/resource='. __FILE__;\n?>")).toMatchSnapshot();
  });
});
