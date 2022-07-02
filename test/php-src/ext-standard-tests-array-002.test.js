// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/002.phpt
  it("Test arsort, asort, krsort, ksort, rsort, and sort", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__ . '/data.inc');\nfunction test_sort ($sort_function, $data) {\n    echo \"\\n -- Testing $sort_function() -- \\n\";\n    echo \"No second argument:\\n\";\n    $sort_function ($data);\n    var_dump ($data);\n    echo \"Using SORT_REGULAR:\\n\";\n    $sort_function ($data, SORT_REGULAR);\n    var_dump ($data);\n    echo \"Using SORT_NUMERIC:\\n\";\n    $sort_function ($data, SORT_NUMERIC);\n    var_dump ($data);\n    echo \"Using SORT_STRING\\n\";\n    $sort_function ($data, SORT_STRING);\n    var_dump ($data);\n}\necho \"Unsorted data:\\n\";\nvar_dump ($data);\nforeach (array ('arsort', 'asort', 'krsort', 'ksort', 'rsort', 'sort') as $test_function) {\n    test_sort ($test_function, $data);\n}\n?>")).toMatchSnapshot();
  });
});
