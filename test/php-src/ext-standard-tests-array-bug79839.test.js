// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug79839.phpt
  it("Bug #79839: array_walk() does not respect property types", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $prop = 42;\n}\n$test = new Test;\ntry {\n    array_walk($test, function(&$ref) {\n        $ref = []; // Should throw\n    });\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test);\n?>")).toMatchSnapshot();
  });
});
