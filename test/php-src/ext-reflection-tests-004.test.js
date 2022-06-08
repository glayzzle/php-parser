// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/004.phpt
  it("ReflectionMethod::invoke() with non object or null value", function () {
    expect(parser.parseCode("<?php\nclass a {\n    function __construct(){\n    }\n}\nclass b {\n}\n$b = new b();\n$a=new ReflectionClass(\"a\");\n$m=$a->getMethod(\"__construct\");\ntry {\n        $m->invoke(null);\n} catch (ReflectionException $E) {\n        echo $E->getMessage().\"\\n\";\n}\ntry {\n        $m->invoke($b);\n} catch (ReflectionException $E) {\n        echo $E->getMessage().\"\\n\";\n}\n$b = new a();\ntry {\n        $m->invoke($b);\n} catch (ReflectionException $E) {\n        echo $E->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
