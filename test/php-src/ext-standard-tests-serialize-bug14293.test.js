// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug14293.phpt
  it("Bug #14293 (serialize() and __sleep())", function () {
    expect(parser.parseCode("<?php\nclass t\n{\n    function __construct()\n    {\n        $this->a = 'hello';\n    }\n    function __sleep()\n    {\n        echo \"__sleep called\\n\";\n        return array('a','b');\n    }\n}\n$t = new t();\n$data = serialize($t);\necho \"$data\\n\";\n$t = unserialize($data);\nvar_dump($t);\n?>")).toMatchSnapshot();
  });
});
