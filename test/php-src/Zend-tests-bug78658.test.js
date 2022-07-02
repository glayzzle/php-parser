// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78658.phpt
  it("Bug #78658: Memory corruption using Closure::bindTo()", function () {
    expect(parser.parseCode("<?php\n$c = function(){};\n$scope = \"AAAA\";\n$scope = \"{$scope}BBBB\";\n$c->bindTo(new stdClass, $scope);\n?>")).toMatchSnapshot();
  });
});
