// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/random/random_bytes.phpt
  it("Test normal operation of random_bytes()", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-\nvar_dump(strlen(bin2hex(random_bytes(16))));\nvar_dump(is_string(random_bytes(10)));\nvar_dump(is_string(random_bytes(257)));\n?>")).toMatchSnapshot();
  });
});
