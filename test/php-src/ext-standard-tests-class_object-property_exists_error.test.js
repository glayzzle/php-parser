// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/property_exists_error.phpt
  it("Test property_exists() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing property_exists() : error conditions ***\\n\";\necho \"\\n-- Testing property_exists() function with incorrect arguments --\\n\";\n$property_name = 'string_val';\ntry {\n    var_dump( property_exists(10, $property_name) );\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
