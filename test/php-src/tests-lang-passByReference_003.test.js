// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/passByReference_003.phpt
  it("Implicit initialisation when passing by reference", function () {
    expect(parser.parseCode("<?php\nfunction passbyVal($val) {\n    echo \"\\nInside passbyVal call:\\n\";\n    var_dump($val);\n}\nfunction passbyRef(&$ref) {\n    echo \"\\nInside passbyRef call:\\n\";\n    var_dump($ref);\n}\necho \"\\nPassing undefined by value\\n\";\npassbyVal($undef1[0]);\necho \"\\nAfter call\\n\";\nvar_dump($undef1);\necho \"\\nPassing undefined by reference\\n\";\npassbyRef($undef2[0]);\necho \"\\nAfter call\\n\";\nvar_dump($undef2)\n?>")).toMatchSnapshot();
  });
});
