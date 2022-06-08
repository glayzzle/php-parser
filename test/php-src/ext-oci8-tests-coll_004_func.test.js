// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/coll_004_func.phpt
  it("oci_collection_assign()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nrequire __DIR__.\"/create_type.inc\";\n$coll1 = oci_new_collection($c, $type_name);\n$coll2 = oci_new_collection($c, $type_name);\nvar_dump(oci_collection_append($coll1, 1));\nvar_dump(oci_collection_assign($coll2, $coll1));\nvar_dump(oci_collection_element_get($coll2, 0));\necho \"Done\\n\";\nrequire __DIR__.\"/drop_type.inc\";\n?>")).toMatchSnapshot();
  });
});
