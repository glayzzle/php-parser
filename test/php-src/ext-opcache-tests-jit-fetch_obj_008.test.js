// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_obj_008.phpt
  it("JIT: FETCH_OBJ 008", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public string $prop = \"\";\n}\nclass B {\n    public function __toString() {\n        global $a;\n        $a->prop = \"A $e B\";\n        $a->prop->prop . $a->prop = \"C\";\n        return \"test\";\n    }\n}\n$a = new A;\n$a->prop = new B;\n?>\nDONE")).toMatchSnapshot();
  });
});
