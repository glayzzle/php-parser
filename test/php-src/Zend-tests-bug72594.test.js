// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72594.phpt
  it("Bug #72594 (Calling an earlier instance of an included anonymous class fatals)", function () {
    expect(parser.parseCode("<?php\nif (isset($runtime)) {\n    return new class {\n        public $bar;\n        public function bing($foo = null) {\n            if ($foo) $foo->bing();\n        }\n    };\n}\n$runtime = 1;\n$oldFoo = require(__FILE__);\n$newFoo = require(__FILE__);\nvar_dump(get_class_methods($oldFoo));\nvar_dump(get_object_vars($oldFoo));\n$newFoo->bing($oldFoo);\n?>")).toMatchSnapshot();
  });
});
