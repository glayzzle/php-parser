// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/number_format_basic.phpt
  it("Test number_format() - basic function test number_format()", function () {
    expect(parser.parseCode("<?php\n$values = array(1234.5678,\n                -1234.5678,\n                1234.6578e4,\n                -1234.56789e4,\n                0x1234CDEF,\n                02777777777,\n                \"123456789\",\n                \"123.456789\",\n                \"12.3456789e1\",\n                true,\n                false);\necho \"\\n number_format tests.....default\\n\";\nfor ($i = 0; $i < count($values); $i++) {\n    $res = number_format($values[$i]);\n    var_dump($res);\n}\necho \"\\n number_format tests.....with two dp\\n\";\nfor ($i = 0; $i < count($values); $i++) {\n    $res = number_format($values[$i], 2);\n    var_dump($res);\n}\necho \"\\n number_format tests.....English format\\n\";\nfor ($i = 0; $i < count($values); $i++) {\n    $res = number_format($values[$i], 2, '.', ' ');\n    var_dump($res);\n}\necho \"\\n number_format tests.....French format\\n\";\nfor ($i = 0; $i < count($values); $i++) {\n    $res = number_format($values[$i], 2, ',' , ' ');\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
