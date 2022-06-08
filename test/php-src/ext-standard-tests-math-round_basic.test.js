// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/round_basic.phpt
  it("Test round() - basic function test for round()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing round() : basic functionality ***\\n\";\n$values = array(123456789,\n                123.456789,\n                -4.5679123,\n                1.23E4,\n                -4.567E3,\n                0x234567,\n                067777777,\n                \"1.234567\",\n                \"2.3456789e8\");\n$precision = array(2,\n                8,\n                0x3,\n                04,\n                3.6,\n                \"2\",\n                \"04\",\n                \"3.6\",\n                \"2.1e1\",\n                true,\n                false);\nfor ($i = 0; $i < count($values); $i++) {\n    echo \"round: $values[$i]\\n\";\n    for ($j = 0; $j < count($precision); $j++) {\n        $res = round($values[$i], $precision[$j]);\n        echo \"...with precision $precision[$j]-> \";\n        var_dump($res);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
