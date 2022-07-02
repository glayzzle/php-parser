// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/strict_include_weak.phpt
  it("strict_types=1 code including strict_types=0 code", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\n// file that's implicitly weak\nrequire 'strict_include_weak_2.inc';\n// calls within that file should stay weak, despite being included by strict file\n?>")).toMatchSnapshot();
  });
});
