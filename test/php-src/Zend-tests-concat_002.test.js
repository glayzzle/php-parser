// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/concat_002.phpt
  it("Stress test $x .= $x", function () {
    expect(parser.parseCode("<?php\n/*\n * Test case for a concat_function() change that broke a test outside of Zend\n *\n * @see https://github.com/php/php-src/commit/29397f8fd2b4bc8d95e18448ca2d27a62241a407\n**/\n$result = 'f';\nfor ($i = 0; $i < 25; ++$i) {\n    $result .= $result;\n}\nvar_dump(strlen($result));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
