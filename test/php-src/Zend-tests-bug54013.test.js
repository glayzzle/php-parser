// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54013.phpt
  it("Bug #54013 (ReflectionParam for duplicate parameter contains garbage) (PHP7)", function () {
    expect(parser.parseCode("<?php\nclass a\n{\n        function b($aaaaaaaa, $aaaaaaaa)\n        {\n                $params = func_get_args();\n        }\n}\n$c = new a;\n$c->b('waa?', 'meukee!');\n$reflectionClass = new ReflectionClass($c);\n$params = $reflectionClass->getMethod('b')->getParameters();\nvar_dump($params[0], $params[1]);\n?>")).toMatchSnapshot();
  });
});
