// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/036.phpt
  it("Trying to use lambda in array offset", function () {
    expect(parser.parseCode("<?php\ntry {\n    $test[function(){}] = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
