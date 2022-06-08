// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug35973.phpt
  it("Bug #35973 (Error ORA-24806 occurs when trying to fetch a NCLOB field)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$s1 = oci_parse($c, \"drop table test_nclob\");\n@oci_execute($s1);\n$s2 = oci_parse($c, \"create table test_nclob (nc NCLOB)\");\noci_execute($s2);\n$s3 = oci_parse($c, \"insert into test_nclob (nc) values ('12345data')\");\noci_execute($s3);\n$s3 = oci_parse($c, \"select * from test_nclob\");\noci_execute($s3);\nvar_dump($data = oci_fetch_assoc($s3));\n$d = $data['NC'];\nvar_dump($d->read(5));\nvar_dump($d->read(4));\n$s1 = oci_parse($c, \"drop table test_nclob\");\n@oci_execute($s1);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
