// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/str_or_obj_of_class_zpp.phpt
  it("Test Z_PARAM_OBJ_OF_CLASS_OR_STR() and Z_PARAM_OBJ_OF_CLASS_OR_STR_OR_NULL", function () {
    expect(parser.parseCode("<?php\nclass Foo {}\nclass ToString {\n    public function __toString() {\n        return \"ToString\";\n    }\n}\nvar_dump(zend_string_or_stdclass(\"string\"));\nvar_dump(zend_string_or_stdclass(1));\nvar_dump(zend_string_or_stdclass(null));\nvar_dump(zend_string_or_stdclass(new stdClass()));\nvar_dump(zend_string_or_stdclass(new ToString()));\ntry {\n    zend_string_or_stdclass([]);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    zend_string_or_stdclass(new Foo());\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(zend_string_or_stdclass_or_null(\"string\"));\nvar_dump(zend_string_or_stdclass_or_null(1));\nvar_dump(zend_string_or_stdclass_or_null(null));\nvar_dump(zend_string_or_stdclass_or_null(new stdClass()));\nvar_dump(zend_string_or_stdclass_or_null(new ToString()));\ntry {\n    zend_string_or_stdclass_or_null([]);\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    zend_string_or_stdclass_or_null(new Foo());\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
