// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/017.phpt
  it("builtin functions tests", function () {
    expect(parser.parseCode("<?php\n$fp = fopen(__FILE__, \"r\");\nvar_dump(get_resource_type($fp));\nfclose($fp);\nvar_dump(get_resource_type($fp));\nvar_dump(gettype(get_loaded_extensions()));\nvar_dump(count(get_loaded_extensions()));\nvar_dump(gettype(get_loaded_extensions(true)));\nvar_dump(count(get_loaded_extensions(true)));\ndefine(\"USER_CONSTANT\", \"test\");\nvar_dump(gettype(get_defined_constants(true)));\nvar_dump(gettype(get_defined_constants()));\nvar_dump(count(get_defined_constants()));\nfunction test () {\n}\nvar_dump(gettype(get_defined_functions()));\nvar_dump(count(get_defined_functions()));\nvar_dump(gettype(get_declared_interfaces()));\nvar_dump(count(get_declared_interfaces()));\nvar_dump(get_extension_funcs(true));\nvar_dump(gettype(get_extension_funcs(\"standard\")));\nvar_dump(count(get_extension_funcs(\"standard\")));\nvar_dump(gettype(get_extension_funcs(\"zend\")));\nvar_dump(count(get_extension_funcs(\"zend\")));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
