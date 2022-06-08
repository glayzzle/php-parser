// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/class_abstract.phpt
  it("ZE2 An abstract class cannot be instantiated", function () {
    expect(parser.parseCode("<?php\nabstract class base {\n    function show() {\n        echo \"base\\n\";\n    }\n}\nclass derived extends base {\n}\n$t = new derived();\n$t->show();\n$t = new base();\n$t->show();\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
