// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/snmp_set_oid_output_format.phpt
  it("Function snmp_set_oid_output_format", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\necho \"Checking error handling\\n\";\ntry {\n    var_dump(snmp_set_oid_output_format(123));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Checking working\\n\";\nvar_dump(snmp_set_oid_output_format(SNMP_OID_OUTPUT_FULL));\nvar_dump(snmp_set_oid_output_format(SNMP_OID_OUTPUT_NUMERIC));\n?>")).toMatchSnapshot();
  });
});
