// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/coll_016_func.phpt
  it("collections and negative/too big element indexes", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$ora_sql = \"DROP TYPE\n                        \".$type_name.\"\n           \";\n$statement = oci_parse($c,$ora_sql);\n@oci_execute($statement);\n$ora_sql = \"CREATE TYPE \".$type_name.\" AS TABLE OF NUMBER\";\n$statement = oci_parse($c,$ora_sql);\noci_execute($statement);\n$coll1 = oci_new_collection($c, $type_name);\nvar_dump(oci_collection_append($coll1, 1));\nvar_dump(oci_collection_element_assign($coll1,-1,2345));\nvar_dump(oci_collection_element_assign($coll1,5000,2345));\nvar_dump(oci_collection_element_get($coll1, -1));\nvar_dump(oci_collection_element_get($coll1, -100));\nvar_dump(oci_collection_element_get($coll1, 500));\necho \"Done\\n\";\nrequire __DIR__.\"/drop_type.inc\";\n?>")).toMatchSnapshot();
  });
});
