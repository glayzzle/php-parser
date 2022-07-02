// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/atan2_basic.phpt
  it("Test atan2() - basic function test of atan2()", function () {
    expect(parser.parseCode("<?php\n$valuesy = array(23,\n                -23,\n                2.345e1,\n                -2.345e1,\n                0x17,\n                027,\n                \"23\",\n                \"23.45\",\n                \"2.345e1\",\n                true,\n                false);\n$valuesx = array(23,\n                -23,\n                2.345e1,\n                -2.345e1,\n                0x17,\n                027,\n                \"23\",\n                \"23.45\",\n                \"2.345e1\",\n                true,\n                false);\nfor ($i = 0; $i < count($valuesy); $i++) {\n    for ($j = 0; $j < count($valuesx); $j++) {\n        $res = atan2($valuesy[$i], $valuesx[$j]);\n        echo \"Y:$valuesy[$i] X:$valuesx[$j] \";\n        var_dump($res);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
