// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/parse_str_basic4.phpt
  it("Test parse_str() function : test with badly formed strings", function () {
    expect(parser.parseCode("<?php\necho \"\\nTest string with badly formed strings\\n\";\n$str = \"arr[1=sid&arr[4][2=fred\";\nvar_dump(parse_str($str, $res));\nvar_dump($res);\n$str = \"arr1]=sid&arr[4]2]=fred\";\nvar_dump(parse_str($str, $res));\nvar_dump($res);\n$str = \"arr[one=sid&arr[4][two=fred\";\nvar_dump(parse_str($str, $res));\nvar_dump($res);\necho \"\\nTest string with badly formed % numbers\\n\";\n$str = \"first=%41&second=%a&third=%b\";\nvar_dump(parse_str($str, $res));\nvar_dump($res);\necho \"\\nTest string with non-binary safe name\\n\";\n$str = \"arr.test[1]=sid&arr test[4][two]=fred\";\nvar_dump(parse_str($str, $res));\nvar_dump($res);\n?>")).toMatchSnapshot();
  });
});
