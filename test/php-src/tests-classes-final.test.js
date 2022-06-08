// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/final.phpt
  it("ZE2 A method may be redeclared final", function () {
    expect(parser.parseCode("<?php\nclass first {\n    function show() {\n        echo \"Call to function first::show()\\n\";\n    }\n}\n$t = new first();\n$t->show();\nclass second extends first {\n    final function show() {\n        echo \"Call to function second::show()\\n\";\n    }\n}\n$t2 = new second();\n$t2->show();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
