// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_015.phpt
  it("Closure 015: converting to string/unicode", function () {
    expect(parser.parseCode("<?php\n$x = function() { return 1; };\ntry {\n    print (string) $x;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    print $x;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
