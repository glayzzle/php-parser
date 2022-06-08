// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_getClass_self_parent_closure.phpt
  it("Using invalid self/parent types in closure", function () {
    expect(parser.parseCode("<?php\n$fn1 = function(self $x) {};\ntry {\n    (new ReflectionFunction($fn1))->getParameters()[0]->getClass();\n} catch (ReflectionException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$fn2 = function(parent $x) {};\ntry {\n    (new ReflectionFunction($fn2))->getParameters()[0]->getClass();\n} catch (ReflectionException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nclass Test {}\n$fn3 = (function(parent $x) {})->bindTo(new Test, Test::class);\ntry {\n    (new ReflectionFunction($fn3))->getParameters()[0]->getClass();\n} catch (ReflectionException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
