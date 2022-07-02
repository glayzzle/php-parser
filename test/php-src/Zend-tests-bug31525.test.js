// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug31525.phpt
  it("Bug #31525 (object reference being dropped. $this getting lost)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  function getThis() {\n    return $this;\n  }\n  function destroyThis() {\n    $baz =& $this->getThis();\n  }\n}\n$bar = new Foo();\n$bar->destroyThis();\nvar_dump($bar);\n?>")).toMatchSnapshot();
  });
});
