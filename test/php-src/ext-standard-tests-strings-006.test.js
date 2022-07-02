// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/006.phpt
  it("highlight_file() and output buffer", function () {
    expect(parser.parseCode("<?php\n$file = str_repeat(\"A\", 1024);\nvar_dump(highlight_file($file, true));\nvar_dump(ob_get_contents());\n?>")).toMatchSnapshot();
  });
});
