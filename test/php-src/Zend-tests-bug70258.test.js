// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70258.phpt
  it("Bug #70258 (Segfault if do_resize fails to allocated memory)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $arr;\n    public function core() {\n        $this->arr[\"no_pack\"] = 1;\n        while (1) {\n            $this->arr[] = 1;\n        }\n    }\n}\n$a = new A;\n$a->core();\n?>")).toMatchSnapshot();
  });
});
