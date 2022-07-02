// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_040.phpt
  it("040: Constant declaration and usage in namespace", function () {
    expect(parser.parseCode("<?php\nnamespace X;\nuse X as Y;\nconst A = \"ok\\n\";\nconst B = A;\nfunction f1($x=A) {\n    echo $x;\n}\nfunction f2($x=\\X\\A) {\n    echo $x;\n}\nfunction f3($x=Y\\A) {\n    echo $x;\n}\nfunction f4($x=\\X\\A) {\n    echo $x;\n}\nfunction f5($x=B) {\n    echo $x;\n}\nfunction f6($x=array(A)) {\n    echo $x[0];\n}\nfunction f7($x=array(\"aaa\"=>A)) {\n    echo $x[\"aaa\"];\n}\nfunction f8($x=array(A=>\"aaa\\n\")) {\n    echo $x[\"ok\\n\"];\n}\necho A;\necho \\X\\A;\necho Y\\A;\necho \\X\\A;\nf1();\nf2();\nf3();\nf4();\necho B;\nf5();\nf6();\nf7();\nf8();\n?>")).toMatchSnapshot();
  });
});
