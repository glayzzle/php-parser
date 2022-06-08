// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69732.phpt
  it("Bug #69732 (can induce segmentation fault with basic php code)", function () {
    expect(parser.parseCode("<?php\nclass wpq {\n    private $unreferenced;\n    public function __get($name) {\n        return $this->$name . \"XXX\";\n    }\n}\nfunction ret_assoc() {\n    $x = \"XXX\";\n    return array('foo' => 'bar', $x);\n}\n$wpq = new wpq;\n$wpq->interesting =& ret_assoc();\n$x = $wpq->interesting;\nprintf(\"%s\\n\", $x);\n?>")).toMatchSnapshot();
  });
});
