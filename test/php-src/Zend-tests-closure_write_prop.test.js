// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_write_prop.phpt
  it("Cannot write to closure properties", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function getFn() {\n        return function() {\n        };\n    }\n}\n$a = new A;\ntry {\n    $c = $a->getFn()->b = new stdClass;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
