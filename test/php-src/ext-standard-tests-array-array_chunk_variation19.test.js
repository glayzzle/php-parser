// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_chunk_variation19.phpt
  it("array_chunk() - variation 19", function () {
    expect(parser.parseCode("<?php\n$array = array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\nvar_dump ($array);\nfor ($i = 1; $i < (sizeof($array) + 1); $i++) {\n    echo \"[$i]\\n\";\n    var_dump (array_chunk ($array, $i));\n    var_dump (array_chunk ($array, $i, TRUE));\n    var_dump (array_chunk ($array, $i, FALSE));\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
