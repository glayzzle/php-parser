// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_called_class_001.phpt
  it("Calling get_called_class() outside a class", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(get_called_class());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
