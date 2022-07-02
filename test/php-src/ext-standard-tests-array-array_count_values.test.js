// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_count_values.phpt
  it("array_count_values()", function () {
    expect(parser.parseCode("<?php\n$arrays = array (\n    array (),\n    array (0),\n    array (1),\n    array (-1),\n    array (0, 0),\n    array (0, 1),\n    array (1, 1),\n    array (1, \"hello\", 1, \"world\", \"hello\"),\n    array (\"hello\", \"world\", \"hello\"),\n    array (\"\", \"world\", \"\", \"hello\", \"world\", \"hello\", \"hello\", \"world\", \"hello\"),\n    array (0, array (1, \"hello\", 1, \"world\", \"hello\")),\n    array (1, array (1, \"hello\", 1, \"world\", \"hello\"), array (1, \"hello\", 1, \"world\", \"hello\"), array (1, \"hello\", 1, \"world\", \"hello\")),\n);\nforeach ($arrays as $item) {\n    var_dump (@array_count_values ($item));\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
