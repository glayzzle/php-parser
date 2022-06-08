// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_015.phpt
  it("SCCP 015: Conditional Constant Propagation of non-escaping object properties on PHI and Rewinding", function () {
    expect(parser.parseCode("<?php\nfunction loadEntities($entity_information) {\n    $entity_types = new StdClass();\n    $entity_types->b = 0;\n    foreach ($entity_information as $ex) {\n        var_dump((bool)$entity_types->b);\n        foreach ($entity_information as $info) {\n            $entity_types->b = 1;\n        }\n    }\n}\nloadEntities(array(\"first\", \"second\"));\n?>")).toMatchSnapshot();
  });
});
