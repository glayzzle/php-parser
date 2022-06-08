// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/abstract_static.phpt
  it("ZE2 A static abstract methods", function () {
    expect(parser.parseCode("<?php\ninterface showable\n{\n    static function show();\n}\nclass pass implements showable\n{\n    static function show() {\n        echo \"Call to function show()\\n\";\n    }\n}\npass::show();\neval('\nclass fail\n{\n    abstract static function func();\n}\n');\nfail::show();\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
