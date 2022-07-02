// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/php_user_filter_01.phpt
  it("class php_user_filter#1", function () {
    expect(parser.parseCode("<?php\nclass foo extends php_user_filter {\n    function filter($in, $out, &$consumed, $closing): int {}\n    function onCreate(): bool {}\n    function onClose(): void {}\n}\nclass bar extends php_user_filter {\n    function filter($in, $out, &$consumed): int {}\n    function onCreate(): bool {}\n    function onClose(): void {}\n}\n?>")).toMatchSnapshot();
  });
});
