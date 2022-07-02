// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug50174.phpt
  it("Bug #50174 (Incorrectly matched docComment)", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    /** const comment */\n    const C = 0;\n    function x() {}\n}\n$rm = new ReflectionMethod('TestClass', 'x');\nvar_dump($rm->getDocComment());\nclass TestClass2\n{\n    /** const comment */\n    const C = 0;\n    public $x;\n}\n$rp = new ReflectionProperty('TestClass2', 'x');\nvar_dump($rp->getDocComment());\n?>")).toMatchSnapshot();
  });
});
