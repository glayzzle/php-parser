// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_015.phpt
  it("Exceptions on improper access to string", function () {
    expect(parser.parseCode("<?php\n$s = \"ABC\";\ntry {\n    $s[] = \"D\";\n} catch (Error $e) {\n    echo \"\\nException: \" . $e->getMessage() . \" in \" , $e->getFile() . \" on line \" . $e->getLine() . \"\\n\";\n}\n$s[] = \"D\";\n?>")).toMatchSnapshot();
  });
});
