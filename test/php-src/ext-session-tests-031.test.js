// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/031.phpt
  it("setting hash_function to sha512 and hash_bits_per_character > 4 should not crash", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nsession_start();\nsession_regenerate_id(TRUE);\nprint \"I live\\n\";\n?>")).toMatchSnapshot();
  });
});
