// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_001.phpt
  it("comparing objects to other types", function () {
    expect(parser.parseCode("<?php\nclass Bar {\n}\n$b = new Bar;\nvar_dump($b == NULL);\nvar_dump($b != NULL);\nvar_dump($b == true);\nvar_dump($b != true);\nvar_dump($b == false);\nvar_dump($b != false);\nvar_dump($b == \"\");\nvar_dump($b != \"\");\nvar_dump($b == 0);\nvar_dump($b != 0);\nvar_dump($b == 1);\nvar_dump($b != 1);\nvar_dump($b == 1.0);\nvar_dump($b != 1.0);\nvar_dump($b == 1);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
