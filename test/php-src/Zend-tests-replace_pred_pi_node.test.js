// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/replace_pred_pi_node.phpt
  it("Handling of pi nodes when replacing a predecessor", function () {
    expect(parser.parseCode("<?php\nfunction test(bool $a, bool $b) {\n    $byte = '';\n    if ($a && $byte > 0 && $b) {}\n    unknown($byte);\n}\nfunction test2() {\n    foreach (0 as $v) {\n        $v ??= 0;\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
