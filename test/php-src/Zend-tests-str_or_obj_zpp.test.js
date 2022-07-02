// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/str_or_obj_zpp.phpt
  it("Test Z_PARAM_OBJ_OR_STR() and Z_PARAM_OBJ_OR_STR_OR_NULL", function () {
    expect(parser.parseCode("<?php\nclass Foo {}\nvar_dump(zend_string_or_object(\"string\"));\nvar_dump(zend_string_or_object(1));\nvar_dump(zend_string_or_object(null));\nvar_dump(zend_string_or_object(new stdClass()));\nvar_dump(zend_string_or_object(new Foo()));\ntry {\n    zend_string_or_object([]);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(zend_string_or_object_or_null(\"string\"));\nvar_dump(zend_string_or_object_or_null(1));\nvar_dump(zend_string_or_object_or_null(null));\nvar_dump(zend_string_or_object_or_null(new stdClass()));\nvar_dump(zend_string_or_object_or_null(new Foo()));\ntry {\n    zend_string_or_object_or_null([]);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
