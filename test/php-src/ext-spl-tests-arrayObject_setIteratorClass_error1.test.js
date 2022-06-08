// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject_setIteratorClass_error1.phpt
  it("SPL: ArrayObject with bad iterator class.", function () {
    expect(parser.parseCode("<?php\ntry {\n  $ao = new ArrayObject(array('a'=>1,'b'=>2,'c'=>3));\n  $ao->setIteratorClass(\"nonExistentClass\");\n  foreach($ao as $key=>$value) {\n    echo \"  $key=>$value\\n\";\n  }\n} catch (TypeError $e) {\n    var_dump($e->getMessage());\n}\ntry {\n  $ao = new ArrayObject(array('a'=>1,'b'=>2,'c'=>3));\n  $ao->setIteratorClass(\"stdClass\");\n  foreach($ao as $key=>$value) {\n    echo \"  $key=>$value\\n\";\n  }\n} catch (TypeError $e) {\n    var_dump($e->getMessage());\n}\ntry {\n  $ao = new ArrayObject(array('a'=>1,'b'=>2,'c'=>3), 0, \"nonExistentClass\");\n  foreach($ao as $key=>$value) {\n    echo \"  $key=>$value\\n\";\n  }\n} catch (TypeError $e) {\n    var_dump($e->getMessage());\n}\ntry {\n  $ao = new ArrayObject(array('a'=>1,'b'=>2,'c'=>3), 0, \"stdClass\");\n  foreach($ao as $key=>$value) {\n    echo \"  $key=>$value\\n\";\n  }\n} catch (TypeError $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
