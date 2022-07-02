// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/number_format_multichar.phpt
  it("Test number_format() - multiple character separator support", function () {
    expect(parser.parseCode("<?php\n$values = array(1234.5678,\n                -1234.5678,\n                1234.6578e4,\n                -1234.56789e4,\n                0x1234CDEF,\n                02777777777,\n                \"123456789\",\n                \"123.456789\",\n                \"12.3456789e1\",\n                true,\n                false);\necho \" number_format tests.....multiple character decimal point\\n\";\nfor ($i = 0; $i < count($values); $i++) {\n    $res = number_format($values[$i], 2, '&#183;', ' ');\n    var_dump($res);\n}\necho \"\\n number_format tests.....multiple character thousand separator\\n\";\nfor ($i = 0; $i < count($values); $i++) {\n    $res = number_format($values[$i], 2, '.' , '&thinsp;');\n    var_dump($res);\n}\necho \"\\n number_format tests.....multiple character decimal and thousep\\n\";\nfor ($i = 0; $i < count($values); $i++) {\n    $res = number_format($values[$i], 2, '&#183;' , '&thinsp;');\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
