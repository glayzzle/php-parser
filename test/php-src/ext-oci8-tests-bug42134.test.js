// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug42134.phpt
  it("Bug #42134 (Collection error for invalid collection name)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/details.inc');\n// Test collection creation error for normal connection\nif (!empty($dbase)) {\n    $c = oci_connect($user,$password,$dbase);\n}\nelse {\n    $c = oci_connect($user,$password);\n}\n$collection = oci_new_collection($c, \"ABC\");\nif (!$collection) {\n    echo \"Normal connection: New Collection error\\n\";\n    $m = oci_error($c);\n    var_dump($m);\n}\n// Test collection creation error for new connection\nif (!empty($dbase)) {\n    $c = oci_new_connect($user,$password,$dbase);\n}\nelse {\n    $c = oci_new_connect($user,$password);\n}\n$collection = oci_new_collection($c, \"DEF\");\nif (!$collection) {\n    echo \"New connection: New Collection error\\n\";\n    $m = oci_error($c);\n    var_dump($m);\n}\n// Test collection creation error for persistent connection\nif (!empty($dbase)) {\n    $c = oci_pconnect($user,$password,$dbase);\n}\nelse {\n    $c = oci_pconnect($user,$password);\n}\n$collection = oci_new_collection($c, \"GHI\");\nif (!$collection) {\n    echo \"Persistent connection: New Collection error\\n\";\n    $m = oci_error($c);\n    var_dump($m);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
