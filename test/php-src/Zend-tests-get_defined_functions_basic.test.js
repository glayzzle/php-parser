// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_defined_functions_basic.phpt
  it("get_defined_functions() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing get_defined_functions() : basic functionality ***\\n\";\nfunction foo() {}\n// mixed case function\nfunction HelloWorld() {}\nClass C {\n    function f1() {}\n    static function f2() {}\n}\n$func = get_defined_functions();\nif (!is_array($func)) {\n    echo \"TEST FAILED: return type not an array\\n\";\n}\nif (!is_array($func[\"internal\"])) {\n    echo \"TEST FAILED: no element in result array with key 'internal'\\n\";\n}\n$internal = $func[\"internal\"];\n//check for a few core functions\nif (!in_array(\"cos\", $internal) || !in_array(\"strlen\", $internal)) {\n    echo \"TEST FAILED: missing elements from 'internal' array\\n\";\n    var_dump($internal);\n}\nif (!is_array($func[\"user\"])) {\n    echo \"TEST FAILED: no element in result array with key 'user'\\n\";\n}\n$user = $func[\"user\"];\nif (count($user) == 2 && in_array(\"foo\", $user) && in_array(\"helloworld\", $user)) {\n    echo \"TEST PASSED\\n\";\n} else {\n    echo \"TEST FAILED: missing elements from 'user' array\\n\";\n    var_dump($user);\n}\n?>")).toMatchSnapshot();
  });
});
