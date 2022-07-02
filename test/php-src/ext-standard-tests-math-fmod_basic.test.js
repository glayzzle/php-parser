// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/fmod_basic.phpt
  it("Test fmod() - basic function test fmod()", function () {
    expect(parser.parseCode("<?php\n$values1 = array(234,\n                -234,\n                23.45e1,\n                -23.45e1,\n                0xEA,\n                0352,\n                \"234\",\n                \"234.5\",\n                \"23.45e1\",\n                true,\n                false);\n$values2 = array(2,\n                -2,\n                2.3e1,\n                -2.3e1,\n                0x2,\n                02,\n                \"2\",\n                \"2.3\",\n                \"2.3e1\",\n                true,\n                false);\nfor ($i = 0; $i < count($values1); $i++) {\n    echo \"\\niteration \", $i, \"\\n\";\n    for ($j = 0; $j < count($values2); $j++) {\n        $res = fmod($values1[$i], $values2[$j]);\n        var_dump($res);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
