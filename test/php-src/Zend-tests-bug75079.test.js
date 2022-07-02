// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug75079.phpt
  it("Bug #75079: self keyword leads to incorrectly generated TypeError when in closure in trait", function () {
    expect(parser.parseCode("<?php\ntrait Foo\n{\n    public function selfDo(self ...$Selfs)\n    {\n        array_map(\n            function (self $Self) : self\n            {\n                return $Self;\n            },\n            $Selfs\n        );\n    }\n}\nclass Bar\n{\n    use Foo;\n}\nclass Baz\n{\n    use Foo;\n}\n$Bar = new Bar;\n$Baz = new Baz;\n$Bar->selfDo($Bar, $Bar);\n$Baz->selfDo($Baz, $Baz);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
