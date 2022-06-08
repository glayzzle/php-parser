// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/coll_003_func.phpt
  it("collection methods", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nrequire __DIR__.\"/create_type.inc\";\n$coll1 = oci_new_collection($c, $type_name);\nvar_dump(oci_collection_size($coll1));\nvar_dump(oci_collection_max($coll1));\nvar_dump(oci_collection_trim($coll1, 3));\nvar_dump(oci_collection_append($coll1, 1));\nvar_dump(oci_collection_element_get($coll1, 0));\nvar_dump(oci_collection_element_assign($coll1, 0, 2));\necho \"Done\\n\";\nrequire __DIR__.\"/drop_type.inc\";\n?>")).toMatchSnapshot();
  });
});
