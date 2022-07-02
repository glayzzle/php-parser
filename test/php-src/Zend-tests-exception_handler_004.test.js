// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_handler_004.phpt
  it("exception handler tests - 4", function () {
    expect(parser.parseCode("<?php\ntry {\n    set_exception_handler(\"fo\");\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    set_exception_handler(array(\"\", \"\"));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
