// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug79115.phpt
  it("Bug #79115: ReflectionClass::isCloneable call reflected class __destruct", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __construct() { echo __FUNCTION__ . \"\\n\"; }\n    function __destruct() { echo __FUNCTION__ . \"\\n\"; }\n}\n$c = new ReflectionClass('A');\nvar_dump($c->isCloneable());\n?>")).toMatchSnapshot();
  });
});
