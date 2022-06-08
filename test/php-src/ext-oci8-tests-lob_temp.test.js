// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_temp.phpt
  it("temporary lobs", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$blob = oci_new_descriptor($c,OCI_D_LOB);\nvar_dump($blob->writeTemporary(\"test\"));\nvar_dump($blob->load());\nvar_dump($blob->seek(0, SEEK_SET));\nvar_dump($blob->read(2));\n$c = oci_pconnect($user, $password, $dbase);\n$blob = oci_new_descriptor($c,OCI_D_LOB);\nvar_dump($blob->writeTemporary(\"test\"));\nvar_dump($blob->load());\nvar_dump($blob->seek(0, SEEK_SET));\nvar_dump($blob->read(2));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
