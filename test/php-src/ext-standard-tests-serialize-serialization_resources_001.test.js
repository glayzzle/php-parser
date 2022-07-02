// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_resources_001.phpt
  it("Test serialize() & unserialize() functions: resources", function () {
    expect(parser.parseCode("<?php\necho \"\\n--- Testing Resource ---\\n\";\n$file_handle = fopen( __FILE__, \"r\" );\n$serialized_data = serialize( $file_handle );\nfclose($file_handle);\nvar_dump($serialized_data);\nvar_dump(unserialize($serialized_data));\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
