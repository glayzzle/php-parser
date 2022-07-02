// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/private_003.phpt
  it("ZE2 A private method cannot be called in a derived class", function () {
    expect(parser.parseCode("<?php\nini_set(\"error_reporting\",2039);\nclass pass {\n    private static function show() {\n        echo \"Call show()\\n\";\n    }\n    protected static function good() {\n        pass::show();\n    }\n}\nclass fail extends pass {\n    static function ok() {\n        pass::good();\n    }\n    static function not_ok() {\n        pass::show();\n    }\n}\nfail::ok();\nfail::not_ok(); // calling a private function\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
