// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/final_redeclare.phpt
  it("ZE2 A final method may not be overwritten", function () {
    expect(parser.parseCode("<?php\nclass pass {\n    final function show() {\n        echo \"Call to function pass::show()\\n\";\n    }\n}\n$t = new pass();\nclass fail extends pass {\n    function show() {\n        echo \"Call to function fail::show()\\n\";\n    }\n}\necho \"Done\\n\"; // Shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
