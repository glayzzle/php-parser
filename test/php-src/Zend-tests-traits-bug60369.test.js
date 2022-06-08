// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60369.phpt
  it("Bug #60369 (Crash with static property in trait)", function () {
    expect(parser.parseCode("<?php\ntrait PropertiesTrait {\n   static $same = true;\n}\nclass Properties {\n   use PropertiesTrait;\n   public $same = true;\n}\n?>")).toMatchSnapshot();
  });
});
