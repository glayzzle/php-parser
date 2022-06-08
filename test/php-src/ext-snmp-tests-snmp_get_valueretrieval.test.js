// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/snmp/tests/snmp_get_valueretrieval.phpt
  it("Function snmp_get_valueretrieval / snmp_set_valueretrieval", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/snmp_include.inc');\necho \"Checking error handling\\n\";\ntry {\n    var_dump(snmp_set_valueretrieval(67));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho \"Checking working\\n\";\nvar_dump(snmp_get_valueretrieval());\nsnmp_set_valueretrieval(SNMP_VALUE_LIBRARY);\nvar_dump(snmp_get_valueretrieval() === SNMP_VALUE_LIBRARY);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN);\nvar_dump(snmp_get_valueretrieval() === SNMP_VALUE_PLAIN);\nsnmp_set_valueretrieval(SNMP_VALUE_OBJECT);\nvar_dump(snmp_get_valueretrieval() === SNMP_VALUE_OBJECT);\nsnmp_set_valueretrieval(SNMP_VALUE_PLAIN|SNMP_VALUE_OBJECT);\nvar_dump(snmp_get_valueretrieval() === (SNMP_VALUE_PLAIN|SNMP_VALUE_OBJECT));\nsnmp_set_valueretrieval(SNMP_VALUE_LIBRARY|SNMP_VALUE_OBJECT);\nvar_dump(snmp_get_valueretrieval() === (SNMP_VALUE_LIBRARY|SNMP_VALUE_OBJECT));\n?>")).toMatchSnapshot();
  });
});
