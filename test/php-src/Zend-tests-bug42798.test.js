// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug42798.phpt
  it("Bug #42798 (_autoload() not triggered for classes used in method signature)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($className) {\n    print \"$className\\n\";\n    exit();\n});\nfunction foo($c = ok::constant) {\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
