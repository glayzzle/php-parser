// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_mix_2.phpt
  it("ZE2 You cannot overload a non static method with a static method", function () {
    expect(parser.parseCode("<?php\nclass pass {\n    function show() {\n        echo \"Call to function pass::show()\\n\";\n    }\n}\nclass fail extends pass {\n    static function show() {\n        echo \"Call to function fail::show()\\n\";\n    }\n}\n$t = new pass();\n$t->show();\nfail::show();\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
