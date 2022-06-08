// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/coll_002_func.phpt
  it("oci_new_collection() + free()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nrequire __DIR__.\"/create_type.inc\";\nvar_dump($coll1 = oci_new_collection($c, $type_name));\nvar_dump(oci_free_collection($coll1));\ntry {\n    var_dump(oci_collection_size($coll1));\n} catch(\\TypeError $exception) {\n    var_dump($exception->getMessage());\n}\necho \"Done\\n\";\nrequire __DIR__.\"/drop_type.inc\";\n?>")).toMatchSnapshot();
  });
});
