// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/coll_018.phpt
  it("Collection trim tests", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nrequire __DIR__.\"/create_type.inc\";\n$coll1 = oci_new_collection($c, $type_name);\necho \"\\nTest 2.\\n\";\nvar_dump($coll1->trim(0));\necho \"\\nTest 3.\\n\";\nvar_dump($coll1->append(1));\nvar_dump($coll1->append(2));\nvar_dump($coll1->append(3));\nvar_dump($coll1->append(4));\nvar_dump($coll1->getElem(-1));  // check before the beginning\nvar_dump($coll1->getElem(0));\nvar_dump($coll1->getElem(1));\nvar_dump($coll1->getElem(2));\nvar_dump($coll1->getElem(3));\nvar_dump($coll1->getElem(4));  // check past the end\necho \"\\nTest 4.\\n\";\nvar_dump($coll1->trim(1));\nvar_dump($coll1->getElem(2));  // this should be the last element\nvar_dump($coll1->getElem(3));  // this element should have gone\necho \"\\nTest 5.\\n\";\nvar_dump($coll1->trim(2));\nvar_dump($coll1->getElem(0));  // this should be the last element\nvar_dump($coll1->getElem(1));  // this element should have gone\necho \"\\nTest 6.\\n\";\nvar_dump($coll1->trim(0));\nvar_dump($coll1->getElem(0));  // this should still be the last element\necho \"\\nTest 7.\\n\";\nvar_dump($coll1->trim(1));\nvar_dump($coll1->getElem(0));  // this should have gone\necho \"Done\\n\";\nrequire __DIR__.\"/drop_type.inc\";\n?>")).toMatchSnapshot();
  });
});
