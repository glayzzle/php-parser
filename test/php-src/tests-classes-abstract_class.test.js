// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/abstract_class.phpt
  it("ZE2 An abstract class cannot be instantiated", function () {
    expect(parser.parseCode("<?php\nabstract class fail {\n    abstract function show();\n}\nclass pass extends fail {\n    function show() {\n        echo \"Call to function show()\\n\";\n    }\n}\n$t2 = new pass();\n$t2->show();\n$t = new fail();\n$t->show();\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
