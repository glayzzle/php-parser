// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/conflict003.phpt
  it("Two methods resulting in a conflict, should be reported both.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait A {\n   public function smallTalk() {\n     echo 'a';\n   }\n   public function bigTalk() {\n     echo 'A';\n   }\n}\ntrait B {\n   public function smallTalk() {\n     echo 'b';\n   }\n   public function bigTalk() {\n     echo 'B';\n   }\n}\nclass Talker {\n   use A, B;\n}\n?>")).toMatchSnapshot();
  });
});
