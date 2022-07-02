// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/hypot_basic.phpt
  it("Test hypot() - basic function test hypot()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hypot() : basic functionality ***\\n\";\n$valuesy = array(23,\n                -23,\n                2.345e1,\n                -2.345e1,\n                0x17,\n                027,\n                \"23\",\n                \"23.45\",\n                \"2.345e1\",\n                true,\n                false);\n$valuesx = array(33,\n                -33,\n                3.345e1,\n                -3.345e1,\n                0x27,\n                037,\n                \"33\",\n                \"43.45\",\n                \"1.345e1\",\n                true,\n                false);\nfor ($i = 0; $i < count($valuesy); $i++) {\n    for ($j = 0; $j < count($valuesx); $j++) {\n        echo \"\\nY:$valuesy[$i] X:$valuesx[$j] \";\n        $res = hypot($valuesy[$i], $valuesx[$j]);\n        var_dump($res);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
