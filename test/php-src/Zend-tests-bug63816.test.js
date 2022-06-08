// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63816.phpt
  it("Bug #63816: implementation child interface and after parent cause fatal error", function () {
    expect(parser.parseCode("<?php\ninterface RootInterface\n{\n    function foo();\n}\ninterface FirstChildInterface extends RootInterface\n{\n    function foo();\n}\ninterface SecondChildInterface extends RootInterface\n{\n    function foo();\n}\nclass A implements FirstChildInterface, SecondChildInterface\n{\n    function foo()\n    {\n    }\n}\nclass B implements RootInterface, FirstChildInterface\n{\n    function foo()\n    {\n    }\n}\nclass C implements FirstChildInterface, RootInterface\n{\n    function foo()\n    {\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
