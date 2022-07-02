// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/typed_property_refs.phpt
  it("unserialize with references to typed properties shall skip the references or fail", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public int $a;\n    public $b;\n}\nclass B {\n    public $a;\n    public int $b;\n}\nclass E {\n    public $a;\n    public int $b;\n}\nclass C {\n    public int $a;\n    public string $b;\n}\nclass D {\n    public int $a;\n    public float $b;\n}\nvar_dump(unserialize('O:1:\"A\":2:{s:1:\"a\";i:1;s:1:\"b\";R:2;}'));\nvar_dump(unserialize('O:1:\"B\":2:{s:1:\"a\";i:1;s:1:\"b\";R:2;}'));\nvar_dump(unserialize('O:1:\"E\":2:{s:1:\"a\";i:1;s:1:\"b\";R:2;}'));\ntry {\n    var_dump(unserialize('O:1:\"A\":2:{s:1:\"a\";N;s:1:\"b\";R:2;}'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(unserialize('O:1:\"B\":2:{s:1:\"a\";N;s:1:\"b\";R:2;}'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(unserialize('O:1:\"C\":2:{s:1:\"a\";i:1;s:1:\"b\";R:2;}'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(unserialize('O:1:\"C\":2:{s:1:\"b\";s:1:\"x\";s:1:\"a\";R:2;}'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(unserialize('O:1:\"D\":2:{s:1:\"a\";i:1;s:1:\"b\";R:2;}'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
