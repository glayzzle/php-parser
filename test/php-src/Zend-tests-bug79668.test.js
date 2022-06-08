// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79668.phpt
  it("Bug #79668 (get_defined_functions(true) may miss functions)", function () {
    expect(parser.parseCode("<?php\n$df = get_defined_functions(true);\nforeach (['sha1', 'sha1_file', 'hash', 'password_hash'] as $funcname) {\n    var_dump(in_array($funcname, $df['internal'], true));\n}\n?>")).toMatchSnapshot();
  });
});
