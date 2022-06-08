// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/008.phpt
  it("define() tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(define(array(1,2,3,4,5), 1));\n} catch (TypeError $e) {\n    echo \"TypeError: \", $e->getMessage(), \"\\n\";\n}\nvar_dump(define(\"TRUE\", 1));\nvar_dump(define(\" \", 1));\nvar_dump(define(\"[[[\", 2));\nvar_dump(define(\"test const\", 3));\nvar_dump(define(\"test const\", 3));\nvar_dump(define(\"test\", array(1)));\nvar_dump(define(\"test1\", fopen(__FILE__, 'r')));\nvar_dump(define(\"test2\", new stdclass));\nvar_dump(constant(\" \"));\nvar_dump(constant(\"[[[\"));\nvar_dump(constant(\"test const\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
