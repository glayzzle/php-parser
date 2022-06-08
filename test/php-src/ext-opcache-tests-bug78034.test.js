// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78034.phpt
  it("Bug #78034: \"pecl\" tool fails with abort assertion in zend_ssa.c", function () {
    expect(parser.parseCode("<?php\nfunction &ref() {}\nclass Test {\n    function method($bool) {\n        if (!$bool) {\n            $this->foo = &ref();\n        }\n        $this->foo = &ref();\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
