// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/declare_007.phpt
  it("Testing declare statement with ticks with callback arguments", function () {
    expect(parser.parseCode("<?php\nregister_tick_function(function (stdClass $object, array $array) {\n    echo \"tick: \", get_class($object), \" \", count($array), \"\\n\";\n}, new \\stdClass(), [1, 2, 3]);\nfunction foo() { }\ndeclare(ticks=1) {\n$statement;\nfoo();\n}\n?>")).toMatchSnapshot();
  });
});
