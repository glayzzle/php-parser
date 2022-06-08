// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/log_basic.phpt
  it("Test log() - basic function test log()", function () {
    expect(parser.parseCode("<?php\n$values = array(23,\n                -23,\n                2.345e1,\n                -2.345e1,\n                0x17,\n                027,\n                \"23\",\n                \"23.45\",\n                \"2.345e1\",\n                true,\n                false);\necho \"\\n LOG tests...no base\\n\";\nfor ($i = 0; $i < count($values); $i++) {\n    $res = log($values[$i]);\n    var_dump($res);\n}\necho \"\\n LOG tests...base\\n\";\nfor ($i = 0; $i < count($values); $i++) {\n    $res = log($values[$i], 4);\n    var_dump($res);\n}\n?>")).toMatchSnapshot();
  });
});
