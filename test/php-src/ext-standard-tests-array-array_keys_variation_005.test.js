// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_keys_variation_005.phpt
  it("Test array_keys() function (variation - 5)", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing array_keys() with resource type ***\\n\";\n$resource1 = fopen( __FILE__, \"r\");\n$resource2 = opendir( \".\" );\n/* creating an array with resource types as elements */\n$arr_resource = array($resource1, $resource2);\nvar_dump(array_keys($arr_resource, $resource1));  // loose type checking\nvar_dump(array_keys($arr_resource, $resource1, TRUE));  // strict type checking\nvar_dump(array_keys($arr_resource, $resource2));  // loose type checking\nvar_dump(array_keys($arr_resource, $resource2, TRUE));  // strict type checking\n/* Closing the resource handles */\nfclose( $resource1 );\nclosedir( $resource2 );\n?>")).toMatchSnapshot();
  });
});
