// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/coll_014.phpt
  it("collections and strings (2)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$ora_sql = \"DROP TYPE\n                        \".$type_name.\"\n           \";\n$statement = oci_parse($c,$ora_sql);\n@oci_execute($statement);\n$ora_sql = \"CREATE TYPE \".$type_name.\" AS TABLE OF VARCHAR(10)\";\n$statement = oci_parse($c,$ora_sql);\noci_execute($statement);\n$coll1 = oci_new_collection($c, $type_name);\nvar_dump($coll1->append(\"striing\"));\nvar_dump($coll1->assignElem(0,\"blah\"));\nvar_dump($coll1->getElem(0));\necho \"Done\\n\";\nrequire __DIR__.\"/drop_type.inc\";\n?>")).toMatchSnapshot();
  });
});
