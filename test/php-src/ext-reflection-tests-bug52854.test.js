// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug52854.phpt
  it("Bug #52854: ReflectionClass::newInstanceArgs does not work for classes without constructors", function () {
    expect(parser.parseCode("<?php\nclass Test {\n}\n$c = new ReflectionClass('Test');\nvar_dump(new Test);\nvar_dump(new Test());\nvar_dump($c->newInstance());\nvar_dump($c->newInstanceArgs(array()));\ntry {\n    var_dump($c->newInstanceArgs(array(1)));\n} catch(ReflectionException $e) {\n    echo $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
