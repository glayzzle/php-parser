// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug36268.phpt
  it("Bug #36268 (Object destructors called even after fatal errors)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __destruct() {\n        echo \"Ha!\\n\";\n    }\n}\n$x = new Foo();\nbar();\n?>")).toMatchSnapshot();
  });
});
