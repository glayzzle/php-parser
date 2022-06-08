// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_temp1.phpt
  it("closing temporary lobs", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$blob = oci_new_descriptor($c,OCI_D_LOB);\nvar_dump($blob->writeTemporary(\"test\"));\nvar_dump($blob->load());\nvar_dump($blob->close());\n$c = oci_pconnect($user, $password, $dbase);\n$blob = oci_new_descriptor($c,OCI_D_LOB);\nvar_dump($blob->writeTemporary(\"test\"));\nvar_dump($blob->load());\nvar_dump($blob->close());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
