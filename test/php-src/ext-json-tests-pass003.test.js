// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/pass003.phpt
  it("JSON (http://www.crockford.com/JSON/JSON_checker/test/pass3.json)", function () {
    expect(parser.parseCode("<?php\n$test = '\n{\n    \"JSON Test Pattern pass3\": {\n        \"The outermost value\": \"must be an object or array.\",\n        \"In this test\": \"It is an object.\"\n    }\n}\n';\necho 'Testing:' . $test . \"\\n\";\necho \"DECODE: AS OBJECT\\n\";\n$obj = json_decode($test);\nvar_dump($obj);\necho \"DECODE: AS ARRAY\\n\";\n$arr = json_decode($test, true);\nvar_dump($arr);\necho \"ENCODE: FROM OBJECT\\n\";\n$obj_enc = json_encode($obj);\necho $obj_enc . \"\\n\";\necho \"ENCODE: FROM ARRAY\\n\";\n$arr_enc = json_encode($arr);\necho $arr_enc . \"\\n\";\necho \"DECODE AGAIN: AS OBJECT\\n\";\n$obj = json_decode($obj_enc);\nvar_dump($obj);\necho \"DECODE AGAIN: AS ARRAY\\n\";\n$arr = json_decode($arr_enc, true);\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
