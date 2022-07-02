// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_003.phpt
  it("Iterator exceptions in foreach by value", function () {
    expect(parser.parseCode("<?php\nclass IT implements Iterator {\n    private $n = 0;\n    private $count = 0;\n    private $trap = null;\n    function __construct($count, $trap = null) {\n        $this->count = $count;\n        $this->trap = $trap;\n    }\n    function trap($trap) {\n        if ($trap === $this->trap) {\n            throw new Exception($trap);\n        }\n    }\n    function rewind(): void  {$this->trap(__FUNCTION__); $this->n = 0;}\n    function valid(): bool   {$this->trap(__FUNCTION__); return $this->n < $this->count;}\n    function key(): mixed     {$this->trap(__FUNCTION__); return $this->n;}\n    function current(): mixed {$this->trap(__FUNCTION__); return $this->n;}\n    function next(): void    {$this->trap(__FUNCTION__); $this->n++;}\n}\nforeach(['rewind', 'valid', 'key', 'current', 'next'] as $trap) {\n    $obj = new IT(3, $trap);\n    try {\n        // IS_CV\n        foreach ($obj as $key => $val) echo \"$val\\n\";\n    } catch (Exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    unset($obj);\n    try {\n        // IS_VAR\n        foreach (new IT(3, $trap) as $key => $val) echo \"$val\\n\";\n    } catch (Exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        // IS_TMP_VAR\n        foreach ((object)new IT(2, $trap) as $key => $val) echo \"$val\\n\";\n    } catch (Exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
