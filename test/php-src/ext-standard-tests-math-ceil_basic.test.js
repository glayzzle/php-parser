// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/ceil_basic.phpt
  it("Test ceil() - basic function test for ceil()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ceil() : basic functionality ***\\n\";\n$values = array(0,\n                -0,\n                0.5,\n                -0.5,\n                1,\n                -1,\n                1.5,\n                -1.5,\n                2.6,\n                -2.6,\n                037,\n                0x5F,\n                \"10.5\",\n                \"-10.5\",\n                \"3.95E3\",\n                \"-3.95E3\",\n                \"039\",\n                true,\n                false,\n                null,\n                );\nfor ($i = 0; $i < count($values); $i++) {\n    $res = ceil($values[$i]);\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
