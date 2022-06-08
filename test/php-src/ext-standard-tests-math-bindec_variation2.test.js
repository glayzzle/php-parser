// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bindec_variation2.phpt
  it("Test bindec() function : strange literals", function () {
    expect(parser.parseCode("<?php\nvar_dump(bindec('0b'));\nvar_dump(bindec('0B'));\nvar_dump(bindec(''));\n?>")).toMatchSnapshot();
  });
});
