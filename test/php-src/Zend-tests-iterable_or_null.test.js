// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/iterable_or_null.phpt
  it("Test Z_PARAM_ITERABLE() and Z_PARAM_ITERABLE_OR_NULL", function () {
    expect(parser.parseCode("<?php\ntry {\n\t  var_dump(zend_iterable(\"string\"));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n\t  var_dump(zend_iterable(1));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n\t  var_dump(zend_iterable(null));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nzend_iterable([]);\nzend_iterable([], []);\n$iterator = new ArrayIterator([]);\nzend_iterable($iterator);\nzend_iterable($iterator, $iterator);\nzend_iterable($iterator, null);\ntry {\n\t  var_dump(zend_iterable([], \"string\"));\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
