// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/coll_004.phpt
  it("oci_collection_assign()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nrequire __DIR__.\"/create_type.inc\";\n$coll1 = oci_new_collection($c, $type_name);\n$coll2 = oci_new_collection($c, $type_name);\nvar_dump($coll1->append(1));\nvar_dump($coll2->assign($coll1));\nvar_dump($coll2->getElem(0));\necho \"Done\\n\";\nrequire __DIR__.\"/drop_type.inc\";\n?>")).toMatchSnapshot();
  });
});
