// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/strings/offsets_chaining_1.phpt
  it("testing the behavior of string offset chaining", function () {
    expect(parser.parseCode("<?php\n$string = \"foobar\";\nvar_dump($string[0][0][0][0]);\n?>")).toMatchSnapshot();
  });
});
