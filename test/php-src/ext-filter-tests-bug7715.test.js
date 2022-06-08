// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug7715.phpt
  it("bug 7715, floats value with integer or incomplete input", function () {
    expect(parser.parseCode("<?php\n$data = array(\n    '.23',\n    '-42',\n    '+42',\n    '.4',\n    '-.4',\n    '1000000000000',\n    '-1000000000000',\n    '02.324'\n);\nforeach ($data as $val) {\n    $res = filter_var($val, FILTER_VALIDATE_FLOAT);\n    var_dump($res);\n}\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
