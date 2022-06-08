// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug80111.phpt
  it("Bug #80111: PHP SplDoublyLinkedList::offsetUnset UAF Sandbox Escape", function () {
    expect(parser.parseCode("<?php\nfunction i2s(&$s, $p, $i, $x=8)\n{\n    for($j=0;$j<$x;$j++)\n    {\n        $s[$p+$j] = chr($i & 0xff);\n        $i >>= 8;\n    }\n}\nclass Trigger\n{\n    function __destruct()\n    {\n        global $s, $b;\n        # Add a reference afterwards\n        //$v = new SplDoublyLinkedList();\n        //$v->setIteratorMode(SplDoublyLinkedList::IT_MODE_DELETE);\n        # Remove element #2 from the list: this has no effect on \n        # intern->traverse_pointer, since it is removed from the list already\n        # The element, along with the zval, is freed\n        unset($s[0]);\n        \n        $a = str_shuffle(str_repeat('A', 40-24-1));\n        # Build a fake zval (long, value: 12345678)\n        i2s($a, 0x00, 12345678); # ptr\n        i2s($a, 0x08, 4, 7); # type: long\n        \n        var_dump($s->current());\n        $s->next();\n        # The value is our fake zval\n        var_dump($s->current());\n        print_r('DONE'.\"\\n\");\n    }\n}\n# Create a 3-item dllist\n$s = new SplDoublyLinkedList();\n# This is the UAF trigger\n$s->push(new Trigger());\n#$b = &$a;\n$s->push(3);\n# Points intern->traverse_pointer to our object element\n$s->rewind();\n#$s->next();\n# calls SplDoublyLinkedList::offsetUnset, which will remove the element from the\n# dllist, and then destruct the object, before clearing traverse_pointer\nunset($s[0]);\n?>")).toMatchSnapshot();
  });
});
