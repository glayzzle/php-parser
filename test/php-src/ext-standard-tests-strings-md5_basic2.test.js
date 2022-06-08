// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/md5_basic2.phpt
  it("Test md5() function : basic functionality - with raw output", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing md5() : basic functionality - with raw output***\\n\";\n$str = \"Hello World\";\n$md5_raw = md5($str, true);\nvar_dump(bin2hex($md5_raw));\n$md5 = md5($str, false);\nif (strcmp(bin2hex($md5_raw), $md5) == 0 ) {\n    echo \"TEST PASSED\\n\";\n} else {\n    echo \"TEST FAILED\\n\";\n    var_dump($md5_raw, $md5);\n}\n?>")).toMatchSnapshot();
  });
});
