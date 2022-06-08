// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/this_in_isset.phpt
  it("$this in isset", function () {
    expect(parser.parseCode("<?php\nvar_dump(isset($this));\ntry {\n    var_dump(isset($this->foo));\n} catch (Throwable $e) {\n    echo \"exception\\n\";\n}\ntry {\n    var_dump(isset($this->foo->bar));\n} catch (Throwable $e) {\n    echo \"exception\\n\";\n}\ntry {\n    var_dump(isset($this[0]));\n} catch (Throwable $e) {\n    echo \"exception\\n\";\n}\nclass A extends ArrayObject {\n    public $foo = 5;\n    function foo() {\n        $this[0] = 5;\n        var_dump(isset($this));\n        var_dump(isset($this->foo));\n        var_dump(isset($this[0]));\n    }\n}\n$a = new A();\n$a->foo();\n?>")).toMatchSnapshot();
  });
});
