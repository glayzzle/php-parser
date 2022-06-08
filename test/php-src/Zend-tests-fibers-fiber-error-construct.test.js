// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/fiber-error-construct.phpt
  it("FiberError cannot be constructed in user code", function () {
    expect(parser.parseCode("<?php\ntry {\n    new FiberError;\n} catch (Error $exception) {\n    echo $exception->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
