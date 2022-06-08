// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/explode_bug.phpt
  it("Explode/memnstr bug", function () {
    expect(parser.parseCode("<?php\n$res = explode(str_repeat(\"A\",145999999),1);\nvar_dump($res);\n?>")).toMatchSnapshot();
  });
});
