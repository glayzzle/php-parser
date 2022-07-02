// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/003.phpt
  it("reusing anonymous classes", function () {
    expect(parser.parseCode("<?php\nwhile (@$i++<10) {\n    var_dump(new class($i) {\n        public function __construct($i) {\n            $this->i = $i;\n        }\n    });\n}\n?>")).toMatchSnapshot();
  });
});
