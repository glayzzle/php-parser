// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43703.phpt
  it("Bug #43703 (Signature compatibility check broken)", function () {
    expect(parser.parseCode("<?php\nclass JoinPoint\n{\n}\nabstract class Pointcut\n{\n    abstract public function evaluate(JoinPoint $joinPoint);\n}\nclass Read extends Pointcut\n{\n    public function evaluate(Joinpoint $joinPoint)\n    {\n    }\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
