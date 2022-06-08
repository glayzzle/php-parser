// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug68128-USE_KEY.phpt
  it("Bug #68128 - RecursiveRegexIterator raises \"Array to string conversion\" notice", function () {
    expect(parser.parseCode("<?php\n$arrayIterator = new ArrayIterator(array('key 1' => 'value 1', 'key 2' => ['value 2']));\n$regexIterator = new RegexIterator($arrayIterator, '/^key/', RegexIterator::MATCH, RegexIterator::USE_KEY);\nforeach ($regexIterator as $key => $value) {\n    var_dump($key, $value);\n}\n?>")).toMatchSnapshot();
  });
});
