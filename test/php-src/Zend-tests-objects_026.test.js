// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_026.phpt
  it("Using $this when out of context", function () {
    expect(parser.parseCode("<?php\ntry {\n    $this->a = 1;\n} catch (Exception $e) {\n}\n?>")).toMatchSnapshot();
  });
});
