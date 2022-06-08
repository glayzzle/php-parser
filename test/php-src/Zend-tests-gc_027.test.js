// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_027.phpt
  it("GC 027: GC and properties of internal classes", function () {
    expect(parser.parseCode("<?php\ntry {\n    throw new Exception();\n} catch (Exception $e) {\n    gc_collect_cycles();\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
