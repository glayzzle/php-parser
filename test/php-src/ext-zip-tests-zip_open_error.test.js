// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/zip_open_error.phpt
  it("zip_open() error conditions", function () {
    expect(parser.parseCode("<?php\necho \"Test case 1:\";\ntry {\n    $zip = zip_open(\"\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Test case 2:\\n\";\n$zip = zip_open(\"/non_exisitng_directory/test_procedural.zip\");\necho is_resource($zip) ? \"OK\" : \"Failure\";\n?>")).toMatchSnapshot();
  });
});
