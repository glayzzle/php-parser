// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40509.phpt
  it("Bug #40509 (key() function changed behaviour if global array is used within function)", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    global $arr;\n    $c = $arr[\"v\"];\n    foreach ($c as $v) {}\n}\n$arr[\"v\"] = array(\"a\");\nvar_dump(key($arr[\"v\"]));\nfoo();\nvar_dump(key($arr[\"v\"]));\nforeach ($arr[\"v\"] as $k => $v) {\n    var_dump($k);\n}\nvar_dump(key($arr[\"v\"]));\n?>")).toMatchSnapshot();
  });
});
