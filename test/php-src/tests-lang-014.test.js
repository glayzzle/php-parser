// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/014.phpt
  it("Testing eval function inside user-defined function", function () {
    expect(parser.parseCode("<?php\nfunction F ($a) {\n    eval($a);\n}\nerror_reporting(0);\nF(\"echo \\\"Hello\\\";\");\n?>")).toMatchSnapshot();
  });
});
