// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/parameters_001.phpt
  it("ReflectionParameter Check for parameter being optional", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function func($x, $y = NULL){\n    }\n}\n$f = new ReflectionMethod('Test', 'func');\nvar_dump($f->getNumberOfParameters());\nvar_dump($f->getNumberOfRequiredParameters());\n$p = new ReflectionParameter(array('Test', 'func'), 'x');\nvar_dump($p->isOptional());\n$p = new ReflectionParameter(array('Test', 'func'), 'y');\nvar_dump($p->isOptional());\ntry {\n    $p = new ReflectionParameter(array('Test', 'func'), 'z');\n    var_dump($p->isOptional());\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\ntry {\n    $p = new ReflectionParameter(array('Test', 'func'), -1);\n    var_dump($p->isOptional());\n} catch (\\ValueError $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
