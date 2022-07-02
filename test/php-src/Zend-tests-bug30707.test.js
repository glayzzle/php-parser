// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30707.phpt
  it("Bug #30707 (Segmentation fault on exception in method)", function () {
    expect(parser.parseCode("<?php\nclass C {\n    function byePHP($plop) {\n        echo \"ok\\n\";\n    }\n    function plip() {\n        try {\n            $this->plap($this->plop());\n        }\tcatch(Exception $e) {\n        }\n    }\n    function plap($a) {\n    }\n    function plop() {\n        throw new Exception;\n    }\n}\n$x = new C;\n$x->byePHP($x->plip());\n?>")).toMatchSnapshot();
  });
});
