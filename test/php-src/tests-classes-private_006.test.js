// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_006.phpt
  it("ZE2 A private method can be overwritten in a second derived class", function () {
    expect(parser.parseCode("<?php\nclass first {\n    private static function show() {\n        echo \"Call show()\\n\";\n    }\n    public static function do_show() {\n        first::show();\n    }\n}\nfirst::do_show();\nclass second extends first {\n}\nsecond::do_show();\nclass third extends second {\n}\nthird::do_show();\nclass fail extends third {\n    static function show() {  // cannot be redeclared\n        echo \"Call show()\\n\";\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
