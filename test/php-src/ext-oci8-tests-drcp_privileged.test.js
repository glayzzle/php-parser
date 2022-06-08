// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/drcp_privileged.phpt
  it("DRCP: privileged connect", function () {
    expect(parser.parseCode("<?php\n// Connecting as SYSDBA or SYSOPER through DRCP will give ORA-1031\nrequire __DIR__.\"/details.inc\";\nvar_dump(oci_connect($user,$password,$dbase,false,OCI_SYSDBA));\nvar_dump(oci_connect($user,$password,$dbase,false,OCI_SYSOPER));\nvar_dump(oci_new_connect($user,$password,$dbase,false,OCI_SYSDBA));\nvar_dump(oci_new_connect($user,$password,$dbase,false,OCI_SYSOPER));\nvar_dump(oci_pconnect($user,$password,$dbase,false,OCI_SYSDBA));\nvar_dump(oci_pconnect($user,$password,$dbase,false,OCI_SYSOPER));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
