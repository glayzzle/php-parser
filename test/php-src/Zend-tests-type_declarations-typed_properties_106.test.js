// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_106.phpt
  it("CONST/CV should not be freed on failed reference assignment", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public ?Type $prop;\n}\n$obj = new Test;\n$ref =& $obj->prop;\ntry {\n    $ref = [1];\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $ary = [1];\n    $ref = $ary;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($ref);\n?>")).toMatchSnapshot();
  });
});
