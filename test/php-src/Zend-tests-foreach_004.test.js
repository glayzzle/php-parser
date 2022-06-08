// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_004.phpt
  it("Iterator exceptions in foreach by reference", function () {
    expect(parser.parseCode("<?php\nclass IT extends ArrayIterator {\n    private $n = 0;\n    function __construct($trap = null) {\n        parent::__construct([0, 1]);\n        $this->trap = $trap;\n    }\n    function trap($trap) {\n        if ($trap === $this->trap) {\n            throw new Exception($trap);\n        }\n    }\n    function rewind(): void  {$this->trap(__FUNCTION__); parent::rewind();}\n    function valid(): bool   {$this->trap(__FUNCTION__); return parent::valid();}\n    function key(): string|int|null { $this->trap(__FUNCTION__); return parent::key(); }\n    function next(): void    {$this->trap(__FUNCTION__); parent::next();}\n}\nforeach(['rewind', 'valid', 'key', 'next'] as $trap) {\n    $obj = new IT($trap);\n    try {\n        // IS_CV\n        foreach ($obj as $key => &$val) echo \"$val\\n\";\n    } catch (Exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    unset($obj);\n    try {\n        // IS_VAR\n        foreach (new IT($trap) as $key => &$val) echo \"$val\\n\";\n    } catch (Exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        // IS_TMP_VAR\n        foreach ((object)new IT($trap) as $key => &$val) echo \"$val\\n\";\n    } catch (Exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
