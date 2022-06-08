// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/passByReference_006.phpt
  it("Pass uninitialized objects and arrays by reference to test implicit initialisation.", function () {
    expect(parser.parseCode("<?php\nfunction refs(&$ref1, &$ref2) {\n  $ref1 = \"Ref1 changed\";\n  $ref2 = \"Ref2 changed\";\n}\nclass C {\n    function __construct(&$ref1, &$ref2) {\n      $ref1 = \"Ref1 changed\";\n      $ref2 = \"Ref2 changed\";\n    }\n    function refs(&$ref1, &$ref2) {\n      $ref1 = \"Ref1 changed\";\n      $ref2 = \"Ref2 changed\";\n    }\n    static function static_refs(&$ref1, &$ref2) {\n      $ref1 = \"Ref1 changed\";\n      $ref2 = \"Ref2 changed\";\n    }\n}\necho \"\\n ---- Pass uninitialized array & object by ref: function call ---\\n\";\nunset($u1, $u2);\nrefs($u1[0], $u2[0][1]);\nvar_dump($u1, $u2);\necho \"\\n ---- Pass uninitialized arrays & objects by ref: static method call ---\\n\";\nunset($u1, $u2);\nC::static_refs($u1[0], $u2[0][1]);\nvar_dump($u1, $u2);\necho \"\\n\\n---- Pass uninitialized arrays & objects by ref: constructor ---\\n\";\nunset($u1, $u2);\n$c = new C($u1[0], $u2[0][1]);\nvar_dump($u1, $u2);\necho \"\\n ---- Pass uninitialized arrays & objects by ref: instance method call ---\\n\";\nunset($u1, $u2);\n$c->refs($u1[0], $u2[0][1]);\nvar_dump($u1, $u2);\n?>")).toMatchSnapshot();
  });
});
