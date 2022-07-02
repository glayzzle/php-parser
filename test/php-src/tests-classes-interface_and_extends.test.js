// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interface_and_extends.phpt
  it("ZE2 a class cannot extend an interface", function () {
    expect(parser.parseCode("<?php\ninterface Test\n{\n    function show();\n}\nclass Tester extends Test\n{\n    function show() {\n        echo __METHOD__ . \"\\n\";\n    }\n}\n$o = new Tester;\n$o->show();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
