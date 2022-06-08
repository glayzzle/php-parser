// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/coll_012.phpt
  it("collections and correct dates", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$ora_sql = \"DROP TYPE\n                        \".$type_name.\"\n           \";\n$statement = oci_parse($c,$ora_sql);\n@oci_execute($statement);\n$ora_sql = \"CREATE TYPE \".$type_name.\" AS TABLE OF DATE\";\n$statement = oci_parse($c,$ora_sql);\noci_execute($statement);\n$coll1 = oci_new_collection($c, $type_name);\n$coll2 = oci_new_collection($c, $type_name);\nvar_dump($coll1->append(\"28-JUL-05\"));\nvar_dump($coll2->assign($coll1));\nvar_dump($coll2->getElem(0));\necho \"Done\\n\";\nrequire __DIR__.\"/drop_type.inc\";\n?>")).toMatchSnapshot();
  });
});
