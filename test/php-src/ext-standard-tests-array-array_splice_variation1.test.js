// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_splice_variation1.phpt
  it("Test array_splice() function : usage variations - references", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/array.c\n*/\necho \"test behaviour when input array is in a reference set\\n\";\n$input_array=array (array(1,2));\n$input_array[]=&$input_array[0];\nvar_dump (array_splice ($input_array[0],1,1));\nvar_dump ($input_array);\necho \"Test behaviour of input arrays containing references \\n\";\n/*\n *  There are three regions to test:, before cut, the cut and after the cut.\n *  For reach we check a plain value, a reference value with integer key and a\n *  reference value with a string key.\n */\n$numbers=array(0,1,2,3,4,5,6,7,8,9,10,11,12);\n$input_array=array(0,1,&$numbers[2],\"three\"=>&$numbers[3],4,&$numbers[5],\"six\"=>&$numbers[6],7,&$numbers[8],\"nine\"=>&$numbers[9]);\nvar_dump (array_splice ($input_array,4,3));\nvar_dump ($input_array);\necho \"Test behaviour of replacement array containing references \\n\";\n$three=3;\n$four=4;\n$input_array=array (0,1,2);\n$b=array(&$three,\"fourkey\"=>&$four);\narray_splice ($input_array,-1,1,$b);\nvar_dump ($input_array);\necho \"Test behaviour of replacement which is part of reference set \\n\";\n$int=3;\n$input_array=array (1,2);\n$b=&$int;\narray_splice ($input_array,-1,1,$b);\nvar_dump ($input_array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
