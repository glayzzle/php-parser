// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_001.phpt
  it("ZE2 A private method can only be called inside the class", function () {
    expect(parser.parseCode("<?php\nclass pass {\n    private static function show() {\n        echo \"Call show()\\n\";\n    }\n    public static function do_show() {\n        pass::show();\n    }\n}\npass::do_show();\npass::show();\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
