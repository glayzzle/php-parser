// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/traversable_throwing_exception.phpt
  it("Traversables that throw exceptions are properly handled during argument unpack", function () {
    expect(parser.parseCode("<?php\nfunction test(...$args) {\n    var_dump($args);\n}\nclass Foo implements IteratorAggregate {\n    public function getIterator(): Traversable {\n        throw new Exception('getIterator');\n    }\n}\nfunction gen() {\n    yield 1;\n    yield 2;\n    throw new Exception('gen');\n}\ntry {\n    test(1, 2, ...new Foo, ...[3, 4]);\n} catch (Exception $e) { var_dump($e->getMessage()); }\ntry {\n    test(1, 2, ...gen(), ...[3, 4]);\n} catch (Exception $e) { var_dump($e->getMessage()); }\n?>")).toMatchSnapshot();
  });
});
