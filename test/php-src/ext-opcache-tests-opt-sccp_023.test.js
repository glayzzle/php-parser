// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_023.phpt
  it("SCCP 023: ADD_ARRAY_ELEMENT with partial array", function () {
    expect(parser.parseCode("<?php\nfunction a ($field_type, $allowed_values) {\n    $settings = [\n        'list_string' => [\n            'allowed_values' => $allowed_values,\n        ],\n    ];\n    return $settings[$field_type];\n}\nvar_dump(a(\"list_string\", [\"xxx\"]));\n?>")).toMatchSnapshot();
  });
});
