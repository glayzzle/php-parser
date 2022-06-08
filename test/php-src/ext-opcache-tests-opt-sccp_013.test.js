// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_013.phpt
  it("SCCP 013: Conditional Constant Propagation of non-escaping array elements on PHI", function () {
    expect(parser.parseCode("<?php\nfunction loadEntities($entity_information) {\n    $entity_types = [];\n    foreach ($entity_information as $info) {\n        $entity_types[$info] = 1;\n    }\n    var_dump((bool)($entity_types[$info]));\n}\nloadEntities(array(\"first\", \"second\"));\n?>")).toMatchSnapshot();
  });
});
