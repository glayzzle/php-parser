// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/abstract.phpt
  it("ZE2 An abstract method may not be called", function () {
    expect(parser.parseCode("<?php\nabstract class fail {\n    abstract function show();\n}\nclass pass extends fail {\n    function show() {\n        echo \"Call to function show()\\n\";\n    }\n    function error() {\n        parent::show();\n    }\n}\n$t = new pass();\n$t->show();\n$t->error();\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
