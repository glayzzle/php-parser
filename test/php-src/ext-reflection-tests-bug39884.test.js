// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug39884.phpt
  it("Bug #39884 (ReflectionParameter::getClass() throws exception for type hint self)", function () {
    expect(parser.parseCode("<?php\nclass stubParamTest\n{\n    function paramTest(self $param)\n    {\n        // nothing to do\n    }\n}\n$test1 = new stubParamTest();\n$test2 = new stubParamTest();\n$test1->paramTest($test2);\n$refParam = new ReflectionParameter(array('stubParamTest', 'paramTest'), 'param');\nvar_dump($refParam->getClass());\n?>")).toMatchSnapshot();
  });
});
