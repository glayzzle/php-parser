// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/global_to_string_exception.phpt
  it("To string conversion failure in global", function () {
    expect(parser.parseCode("<?php\ntry {\n    global ${new stdClass};\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
