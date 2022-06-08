// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug64239.phpt
  it("Bug #64239 (ReflectionClass::getMethods() changed behavior)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    use T2 { t2method as Bmethod; }\n}\ntrait T2 {\n    public function t2method() {\n    }\n}\nclass B extends A{\n}\n$obj = new ReflectionClass(\"B\");\nprint_r($obj->getMethods());\nprint_r(($method = $obj->getMethod(\"Bmethod\")));\nvar_dump($method->getName());\nvar_dump($method->getShortName());\n?>")).toMatchSnapshot();
  });
});
