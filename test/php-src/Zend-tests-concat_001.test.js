// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/concat_001.phpt
  it("concat different types", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __toString() {\n        return \"this is test object\";\n    }\n}\n$a = array(1,2,3);\n$o = new test;\n$s = \"some string\";\n$i = 222;\n$d = 2323.444;\nvar_dump($a.$o);\nvar_dump($a.$s);\nvar_dump($a.$i);\nvar_dump($a.$d);\nvar_dump($a.$a);\nvar_dump($o.$a);\nvar_dump($o.$s);\nvar_dump($o.$i);\nvar_dump($o.$d);\nvar_dump($o.$o);\nvar_dump($s.$o);\nvar_dump($s.$a);\nvar_dump($s.$i);\nvar_dump($s.$d);\nvar_dump($s.$s);\nvar_dump($i.$a);\nvar_dump($i.$o);\nvar_dump($i.$s);\nvar_dump($i.$d);\nvar_dump($i.$i);\nvar_dump($d.$a);\nvar_dump($d.$o);\nvar_dump($d.$s);\nvar_dump($d.$i);\nvar_dump($d.$d);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
