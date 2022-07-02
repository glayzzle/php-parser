// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/include_variation3.phpt
  it("Including a file in the current script directory from eval'd code", function () {
    expect(parser.parseCode("<?php\nrequire_once 'include_files/eval.inc';\n?>")).toMatchSnapshot();
  });
});
