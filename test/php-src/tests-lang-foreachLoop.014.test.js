// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/foreachLoop.014.phpt
  it("Directly modifying a REFERENCED array when foreach'ing over it.", function () {
    expect(parser.parseCode("<?php\ndefine('MAX_LOOPS',5);\nfunction withRefValue($elements, $transform) {\n    echo \"\\n---( Array with $elements element(s): )---\\n\";\n    //Build array:\n    for ($i=0; $i<$elements; $i++) {\n        $a[] = \"v.$i\";\n    }\n    $counter=0;\n    $ref = &$a;\n    echo \"--> State of referenced array before loop:\\n\";\n    var_dump($a);\n    echo \"--> Do loop:\\n\";\n    foreach ($a as $k=>$v) {\n        echo \"     iteration $counter:  \\$k=$k; \\$v=$v\\n\";\n        eval($transform);\n        $counter++;\n        if ($counter>MAX_LOOPS) {\n            echo \"  ** Stuck in a loop! **\\n\";\n            break;\n        }\n    }\n    echo \"--> State of array after loop:\\n\";\n    var_dump($a);\n}\necho \"\\nPopping elements off end of a referenced array\";\n$transform = 'array_pop($a);';\nwithRefValue(1, $transform);\nwithRefValue(2, $transform);\nwithRefValue(3, $transform);\nwithRefValue(4, $transform);\necho \"\\n\\n\\nShift elements off start of a referenced array\";\n$transform = 'array_shift($a);';\nwithRefValue(1, $transform);\nwithRefValue(2, $transform);\nwithRefValue(3, $transform);\nwithRefValue(4, $transform);\necho \"\\n\\n\\nRemove current element of a referenced array\";\n$transform = 'unset($a[$k]);';\nwithRefValue(1, $transform);\nwithRefValue(2, $transform);\nwithRefValue(3, $transform);\nwithRefValue(4, $transform);\necho \"\\n\\n\\nAdding elements to the end of a referenced array\";\n$transform = 'array_push($a, \"new.$counter\");';\nwithRefValue(1, $transform);\nwithRefValue(2, $transform);\nwithRefValue(3, $transform);\nwithRefValue(4, $transform);\necho \"\\n\\n\\nAdding elements to the start of a referenced array\";\n$transform = 'array_unshift($a, \"new.$counter\");';\nwithRefValue(1, $transform);\nwithRefValue(2, $transform);\nwithRefValue(3, $transform);\nwithRefValue(4, $transform);\n?>")).toMatchSnapshot();
  });
});
