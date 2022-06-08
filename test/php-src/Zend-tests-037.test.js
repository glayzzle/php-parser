// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/037.phpt
  it("Trying to access inexistent static property of Closure", function () {
    expect(parser.parseCode("<?php\nnamespace closure;\nclass closure { static $x = 1;}\n$x = __NAMESPACE__;\nvar_dump(closure::$x);\nvar_dump($x::$x);\n?>")).toMatchSnapshot();
  });
});
