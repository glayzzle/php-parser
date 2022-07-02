// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/009.phpt
  it("Test for buffering in core functions with implicit flush on", function () {
    expect(parser.parseCode("<?php\n$res = var_export(\"foo1\");\necho \"\\n\";\n$res = var_export(\"foo2\", TRUE);\necho \"\\n\";\necho $res.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
