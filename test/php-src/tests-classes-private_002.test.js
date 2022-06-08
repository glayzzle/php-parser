// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_002.phpt
  it("ZE2 A private method cannot be called in another class", function () {
    expect(parser.parseCode("<?php\nclass pass {\n    private static function show() {\n        echo \"Call pass::show()\\n\";\n    }\n    public static function do_show() {\n        pass::show();\n    }\n}\npass::do_show();\nclass fail {\n    public static function show() {\n        echo \"Call fail::show()\\n\";\n        pass::show();\n    }\n}\nfail::show();\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
