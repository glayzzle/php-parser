// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/abstract_redeclare.phpt
  it("ZE2 A method cannot be redeclared abstract", function () {
    expect(parser.parseCode("<?php\nclass pass {\n    function show() {\n        echo \"Call to function show()\\n\";\n    }\n}\nclass fail extends pass {\n    abstract function show();\n}\necho \"Done\\n\"; // Shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
