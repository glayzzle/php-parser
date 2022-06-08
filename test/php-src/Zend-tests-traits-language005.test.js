// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language005.phpt
  it("Use instead to solve a conflict and as to access the method.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait A {\n   public function smallTalk() {\n     echo 'a';\n   }\n   public function bigTalk() {\n     echo 'A';\n   }\n}\ntrait B {\n   public function smallTalk() {\n     echo 'b';\n   }\n   public function bigTalk() {\n     echo 'B';\n   }\n}\nclass Talker {\n    use A, B {\n        B::smallTalk insteadof A;\n        A::bigTalk insteadof B;\n        B::bigTalk as talk;\n    }\n}\n$t = new Talker;\n$t->smallTalk();\n$t->bigTalk();\n$t->talk();\n?>")).toMatchSnapshot();
  });
});
