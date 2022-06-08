// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/coll_003.phpt
  it("collection methods", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nrequire __DIR__.\"/create_type.inc\";\n$coll1 = oci_new_collection($c, $type_name);\nvar_dump($coll1->size());\nvar_dump($coll1->max());\nvar_dump($coll1->trim(3));\nvar_dump($coll1->append(1));\nvar_dump($coll1->getElem(0));\nvar_dump($coll1->assignElem(0,2));\necho \"Done\\n\";\nrequire __DIR__.\"/drop_type.inc\";\n?>")).toMatchSnapshot();
  });
});
