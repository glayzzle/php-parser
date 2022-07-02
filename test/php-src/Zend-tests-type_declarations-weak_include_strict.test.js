// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/weak_include_strict.phpt
  it("strict_types=0 code including strict_types=1 code", function () {
    expect(parser.parseCode("<?php\n// implicitly weak code\n// file with strict_types=1\nrequire 'weak_include_strict_2.inc';\n// calls within that file should stay strict, despite being included by weak file\n?>")).toMatchSnapshot();
  });
});
