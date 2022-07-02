// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_to_obj_002.phpt
  it("Assign to $this leaks when $this not defined", function () {
    expect(parser.parseCode("<?php\ntry {\n    $this->a = new stdClass;\n} catch (Error $e) { echo $e->getMessage(), \"\\n\"; }\n?>")).toMatchSnapshot();
  });
});
