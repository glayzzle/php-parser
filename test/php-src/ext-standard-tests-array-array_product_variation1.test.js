// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_product_variation1.phpt
  it("Test array_product() function : variation", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_product() : variation - using non numeric values ***\\n\";\nclass A {\n  static function help() { echo \"hello\\n\"; }\n}\n$fp = fopen(__FILE__, \"r\");\n$types = array(\"boolean (true)\" => true, \"boolean (false)\" => false,\n       \"string\" => \"hello\", \"numeric string\" =>  \"12\",\n       \"resource\" => $fp, \"object\" => new A(), \"null\" => null,\n       \"array\" => array(3,2));\nforeach ($types as $desc => $type) {\n  echo $desc . \"\\n\";\n  var_dump(array_product(array($type)));\n  echo \"\\n\";\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
