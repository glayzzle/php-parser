// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_002.phpt
  it("Register Alloction 002: SEND_VAL_EX uses %r0 as a temporary register", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function process($call) {\n        $i = 0;\n        foreach (array(\"a\", \"b\", \"c\") as $attr) {\n            $call($i++, \"xxx\");\n        }\n    }\n}\n$a = new A();\n$a->process(function($i, $v) { var_dump($i); });\n?>")).toMatchSnapshot();
  });
});
