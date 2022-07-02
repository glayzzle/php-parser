// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_005.phpt
  it("ZE2 A private method cannot be called in a derived class", function () {
    expect(parser.parseCode("<?php\nclass pass {\n    private static function show() {\n        echo \"Call show()\\n\";\n    }\n    public static function do_show() {\n        pass::show();\n    }\n}\nclass fail extends pass {\n    static function do_show() {\n        pass::show();\n    }\n}\npass::do_show();\nfail::do_show();\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
