// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_key_exists_variation3.phpt
  it("Test array_key_exists() function : usage variations - floats and casting to ints", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass floats as $key argument, then cast float values\n * to integers and pass as $key argument\n */\necho \"*** Testing array_key_exists() : usage variations ***\\n\";\n$keys = array(1.2345678900E-10, 1.00000000000001, 1.99999999999999);\n$search = array ('zero', 'one', 'two');\n$iterator = 1;\nforeach($keys as $key) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    echo \"Pass float as \\$key:\\n\";\n    try {\n        var_dump(array_key_exists($key, $search));\n    } catch (TypeError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n    echo \"Cast float to int:\\n\";\n    var_dump(array_key_exists((int)$key, $search));\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
