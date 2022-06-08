// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/readline/tests/readline_completion_function_001.phpt
  it("readline_completion_function(): Basic test", function () {
    expect(parser.parseCode("<?php\nfunction foo() { }\n$data = array(\n    'foo',\n    'strtolower',\n    1,\n    1.1231\n);\nforeach ($data as $callback) {\n    try {\n        var_dump(readline_completion_function($callback));\n    } catch (\\TypeError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
