// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_closure_01.phpt
  it("Observer: Basic observability of closures", function () {
    expect(parser.parseCode("<?php\n$bar = function() {\n    var_dump(array_sum([40,2]));\n};\n$foo = function($bar) {\n    echo 'Answer' . PHP_EOL;\n    $bar();\n};\n$foo($bar);\n$foo($bar);\n$foo($bar);\necho 'DONE' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
