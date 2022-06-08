// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug74431.phpt
  it("Bug #74431 - foreach infinite loop", function () {
    expect(parser.parseCode("<?php\nfunction test(){\n    $arr = [1,2];\n    $j = 0;\n    $cond = true;\n    foreach ($arr as $i => $v){\n        while(1){\n            if($cond){\n                break;\n            }\n        }\n        $j++;\n        echo $j.\"\\n\";\n        if ($j>10) break;\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
