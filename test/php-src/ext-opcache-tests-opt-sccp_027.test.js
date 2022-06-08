// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_027.phpt
  it("SCCP 027: Support for ASSIGN_OBJ_REF", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    protected $arr;\n    public function init($a) {\n        $this->arr =& $a;\n        if (isset($a[0])) {\n            return 1;\n        } else {\n            return 2;\n        }\n    }\n}\n$x = new Foo();\nvar_dump($x->init([1]));\n?>")).toMatchSnapshot();
  });
});
