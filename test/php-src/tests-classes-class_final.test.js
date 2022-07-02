// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/class_final.phpt
  it("ZE2 A final class cannot be inherited", function () {
    expect(parser.parseCode("<?php\nfinal class base {\n    function show() {\n        echo \"base\\n\";\n    }\n}\n$t = new base();\nclass derived extends base {\n}\necho \"Done\\n\"; // shouldn't be displayed\n?>")).toMatchSnapshot();
  });
});
