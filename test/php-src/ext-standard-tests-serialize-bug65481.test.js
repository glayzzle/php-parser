// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug65481.phpt
  it("Bug #65481 (shutdown segfault due to serialize)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $e = array();\n}\nclass Token implements \\Serializable {\n    public function serialize()\n    {\n        $c = new A;\n        for ($i = 0; $i < 4; $i++)\n        {\n            $e = new A;\n            $c->e[] = $e;\n            $e->e = $c->e;\n        }\n        return serialize(array(serialize($c)));\n    }\n    public function unserialize($str)\n    {\n        $r = unserialize($str);\n        $r = unserialize($r[0]);\n    }\n}\n$token = new Token;\n$token = serialize($token);\n?>\nDone")).toMatchSnapshot();
  });
});
