// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/coll_002.phpt
  it("oci_new_collection() + free()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nrequire __DIR__.\"/create_type.inc\";\nvar_dump($coll1 = oci_new_collection($c, $type_name));\nvar_dump($coll1->free());\ntry {\n    var_dump($coll1->size());\n} catch (TypeError $error) {\n    var_dump($error->getMessage());\n}\nvar_dump(oci_new_collection($c, \"NONEXISTENT\"));\necho \"Done\\n\";\nrequire __DIR__.\"/drop_type.inc\";\n?>")).toMatchSnapshot();
  });
});
