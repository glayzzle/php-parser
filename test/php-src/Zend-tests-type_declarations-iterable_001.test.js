// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/iterable_001.phpt
  it("iterable type#001", function () {
    expect(parser.parseCode("<?php\nfunction test(iterable $iterable) {\n    var_dump($iterable);\n}\nfunction gen() {\n    yield 1;\n    yield 2;\n    yield 3;\n};\ntest([1, 2, 3]);\ntest(gen());\ntest(new ArrayIterator([1, 2, 3]));\ntry {\n    test(1);\n} catch (Throwable $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
