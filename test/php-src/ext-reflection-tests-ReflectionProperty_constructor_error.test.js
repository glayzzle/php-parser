// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionProperty_constructor_error.phpt
  it("Test ReflectionProperty class constructor errors.", function () {
    expect(parser.parseCode("<?php\nclass TestClass {\n}\n$a = 5;\necho \"Non-existent class:\\n\";\ntry {\n    new ReflectionProperty(\"NonExistentClass\", \"prop\");\n} catch (ReflectionException $e) {\n    echo $e->getMessage();\n}\necho \"\\n\\nWrong property parameter type:\\n\";\ntry {\n    new ReflectionProperty($a, 'TestClass');\n}\ncatch(ReflectionException $e) {\n    echo $e->getMessage();\n}\necho \"\\n\\nNon-existent property:\\n\";\ntry {\n    new ReflectionProperty('TestClass', \"nonExistentProperty\");\n}\ncatch(ReflectionException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
