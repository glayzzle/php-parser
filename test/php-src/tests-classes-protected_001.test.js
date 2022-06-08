// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/protected_001.phpt
  it("ZE2 A protected method can only be called inside the class", function () {
    expect(parser.parseCode("<?php\nclass pass {\n    protected static function fail() {\n        echo \"Call fail()\\n\";\n    }\n    public static function good() {\n        pass::fail();\n    }\n}\npass::good();\npass::fail();// must fail because we are calling from outside of class pass\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
