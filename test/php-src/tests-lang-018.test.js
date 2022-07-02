// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/018.phpt
  it("eval() test", function () {
    expect(parser.parseCode("<?php\nerror_reporting(0);\n$message = \"echo \\\"hey\\n\\\";\";\nfor ($i=0; $i<10; $i++) {\n  eval($message);\n  echo $i.\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
