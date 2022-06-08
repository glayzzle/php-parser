// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/this_assignment.phpt
  it("Test to catch early assignment of $this", function () {
    expect(parser.parseCode("<?php\nclass first {\n   function me() { echo \"first\"; }\n   function who() {\n     global $a,$b;\n     $this->me();\n     $a->me();\n     $b->me();\n     $b = new second();\n     $this->me();\n     $a->me();\n     $b->me();\n   }\n}\nclass second {\n   function who() {\n      global $a,$b;\n      $this->me();\n      $a->me();\n      $b->me();\n   }\n   function me() { echo \"second\"; }\n}\n$a = new first();\n$b = &$a;\n$a->who();\n$b->who();\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
