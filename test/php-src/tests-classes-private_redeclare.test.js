// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_redeclare.phpt
  it("ZE2 A derived class does not know anything about inherited private methods", function () {
    expect(parser.parseCode("<?php\nclass base {\n    private function show() {\n        echo \"base\\n\";\n    }\n    function test() {\n        $this->show();\n    }\n}\n$t = new base();\n$t->test();\nclass derived extends base {\n    function show() {\n        echo \"derived\\n\";\n    }\n    function test() {\n        echo \"test\\n\";\n        $this->show();\n        parent::test();\n        parent::show();\n    }\n}\n$t = new derived();\n$t->test();\n?>")).toMatchSnapshot();
  });
});
