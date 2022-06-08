// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug67572.phpt
  it("Bug #67572 - SimpleXMLElement not parsing \\n correctly", function () {
    expect(parser.parseCode("<?php\n$foo = 'bar';\nprint \"regular string ... \";\nvar_dump(empty($foo));\n$xml = simplexml_load_string(\"<xml><something>somevalue</something></xml>\");\n$xml2 = simplexml_load_string(\"<xml>\\n<something>somevalue</something>\\n</xml>\");\nforeach($xml as $key => $value) {\n    print \"$key = $value ... \";\n    var_dump(empty($value));\n    var_dump($value == false);\n}\nforeach($xml2 as $key => $value) {\n    print \"$key = $value ... \";\n    var_dump(empty($value));\n    var_dump($value == false);\n}\n?>")).toMatchSnapshot();
  });
});
