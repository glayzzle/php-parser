// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/instantiate_all_classes.phpt
  it("Try to instantiate all classes without arguments", function () {
    expect(parser.parseCode("<?php\nforeach (get_declared_classes() as $class) {\n    try {\n        new $class;\n    } catch (Throwable) {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
