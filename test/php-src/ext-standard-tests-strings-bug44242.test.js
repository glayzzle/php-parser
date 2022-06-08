// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug44242.phpt
  it("Bug #44242 (metaphone('CMXFXM') crashes PHP)", function () {
    expect(parser.parseCode("<?php\necho metaphone('CMXFXZ'), \"\\n\";\necho metaphone('CMXFXV'), \"\\n\";\necho metaphone('CMXFXZXZ'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
