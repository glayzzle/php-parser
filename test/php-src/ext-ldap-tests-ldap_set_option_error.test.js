// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ldap/tests/ldap_set_option_error.phpt
  it("ldap_set_option() - ldap_set_option() operation that should fail", function () {
    expect(parser.parseCode("<?php\nrequire \"connect.inc\";\n$link = ldap_connect($host, $port);\n$controls = array(\n    array(\n        array(\"xid\" => \"1.2.752.58.10.1\", \"iscritical\" => true),\n        array(\"xid\" => \"1.2.752.58.1.10\", \"value\" => \"magic\"),\n    ),\n    array(\n        array(\"oid\" => \"1.2.752.58.10.1\", \"iscritical\" => true),\n        array(\"oid\" => \"1.2.752.58.1.10\", \"value\" => \"magic\"),\n        \"weird\"\n    ),\n    \"notanarray\"\n);\nvar_dump(ldap_set_option($link, LDAP_OPT_PROTOCOL_VERSION, 10));\nforeach ($controls as $control) {\n    try {\n        var_dump(ldap_set_option($link, LDAP_OPT_SERVER_CONTROLS, $control));\n    } catch (Error $exception) {\n        echo get_class($exception) . \": \" . $exception->getMessage() . \"\\n\";\n    }\n}\nvar_dump(ldap_set_option($link, 999999, 999999));\n?>")).toMatchSnapshot();
  });
});
