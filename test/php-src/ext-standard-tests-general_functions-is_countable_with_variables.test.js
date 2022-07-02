// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_countable_with_variables.phpt
  it("Test is_countable() function", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_countable([1, 2, 3]));\nvar_dump(is_countable((array) 1));\nvar_dump(is_countable((object) ['foo', 'bar', 'baz']));\n$foo = ['', []];\nif (is_countable($foo)) {\n    var_dump(count($foo));\n}\n$bar = null;\nif (!is_countable($bar)) {\n    try {\n        count($bar);\n    } catch (\\TypeError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
