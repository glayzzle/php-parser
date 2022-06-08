// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation16.phpt
  it("Test array_map() function : usage variations - failing built-in functions & language constructs", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing non-permmited built-in functions and language constructs i.e.\n *   echo(), array(), empty(), eval(), exit(), isset(), list(), print()\n */\necho \"*** Testing array_map() : non-permmited built-in functions ***\\n\";\n// array to be passed as arguments\n$arr1 = array(1, 2);\n// built-in functions & language constructs\n$callback_names = array(\n/*1*/  'echo',\n       'array',\n       'empty',\n/*4*/  'eval',\n       'exit',\n       'isset',\n       'list',\n/*8*/  'print'\n);\nfor($count = 0; $count < count($callback_names); $count++)\n{\n    echo \"-- Iteration \".($count + 1).\" --\\n\";\n    try {\n        var_dump( array_map($callback_names[$count], $arr1) );\n    } catch (TypeError $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
