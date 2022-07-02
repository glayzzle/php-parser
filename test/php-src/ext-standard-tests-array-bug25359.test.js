// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug25359.phpt
  it("Bug #25359 (array_multisort() does not work in a function if array is global or reference)", function () {
    expect(parser.parseCode("<?php\nfunction does_not_work()\n{\n    global $data; // Remove this line to make array_multisort() work\n    $data = array('first', 'fifth', 'second', 'forth', 'third');\n    $sort = array(1, 5, 2, 4, 3);\n    array_multisort($sort, $data);\n    var_dump($data);\n}\ndoes_not_work();\n?>")).toMatchSnapshot();
  });
});
