// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72496.phpt
  it("Bug #72496 (declare public method with signature incompatible with parent private method should not throw a warning)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    private function getFoo()\n    {\n        return 'Foo';\n    }\n    private function getBar()\n    {\n        return 'Bar';\n    }\n    private function getBaz()\n    {\n        return 'Baz';\n    }\n}\nclass Bar extends Foo\n{\n    public function getFoo($extraArgument)\n    {\n        return $extraArgument;\n    }\n    protected function getBar($extraArgument)\n    {\n        return $extraArgument;\n    }\n    private function getBaz($extraArgument)\n    {\n        return $extraArgument;\n    }\n}\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
