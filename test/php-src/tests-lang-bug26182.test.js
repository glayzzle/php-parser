// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug26182.phpt
  it("Bug #26182 (Object properties created redundantly)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function NotAConstructor ()\n    {\n        if (isset($this->x)) {\n            //just for demo\n        }\n    }\n}\n$t = new A ();\nprint_r($t);\n?>")).toMatchSnapshot();
  });
});
