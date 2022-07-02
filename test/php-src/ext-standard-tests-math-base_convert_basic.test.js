// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/base_convert_basic.phpt
  it("Test base_convert() - basic function tests base_convert()", function () {
    expect(parser.parseCode("<?php\n$frombase = array(2,8,10,16,36);\n$tobase = array(2,8,10,16,36);\n$values = array(10,\n                27,\n                39,\n                03,\n                0x5F,\n                \"10\",\n                \"27\",\n                \"39\",\n                \"5F\",\n                \"3XYZ\"\n                );\nfor ($f= 0; $f < count($frombase); $f++) {\n    echo \"\\n...from base is \", $frombase[$f], \"\\n\";\n    for ($t= 0; $t < count($tobase); $t++) {\n        echo \"......to base is \", $tobase[$t], \"\\n\";\n        for ($i =0; $i < count($values); $i++){\n            $res = base_convert($values[$i],$frombase[$f],$tobase[$t]);\n            echo \".........value= \", $values[$i], \" res = \", $res, \"\\n\";\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
