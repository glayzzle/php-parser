// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_014.phpt
  it("SCCP 014: Conditional Constant Propagation of non-escaping object properties on PHI", function () {
    expect(parser.parseCode("<?php\nfunction loadEntities($entity_information) {\n    $entity_types = new StdClass();\n    $entity_types->a = 1;\n    foreach ($entity_information as $info) {\n        $entity_types->a = 0;\n    }\n    var_dump((bool)($entity_types->a));\n}\nloadEntities(array(\"first\", \"second\"));\n?>")).toMatchSnapshot();
  });
});
