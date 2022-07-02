// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/038.phpt
  it("Trying to use lambda as array key", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(array(function() { } => 1));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
