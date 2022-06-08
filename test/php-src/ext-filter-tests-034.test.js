// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/034.phpt
  it("Logical filter: boolean", function () {
    expect(parser.parseCode("<?php\n$booleans = array(\n'1' => true,\n'On' => true,\n'Off' => true,\n'True' => true,\n'TrUe' => true,\n'oN' => true,\n'0' => false,\n'Off' => false,\n'False' => false,\n'faLsE' => false,\n'oFf' => false,\n'' => false\n);\nforeach($booleans as $val=>$exp) {\n    $res =filter_var($val, FILTER_VALIDATE_BOOLEAN);\n        if ($res !== $exp) {\n        echo \"$val failed,'$exp' expect, '$res' received.\\n\";\n    }\n}\necho \"Ok.\";\n?>")).toMatchSnapshot();
  });
});
