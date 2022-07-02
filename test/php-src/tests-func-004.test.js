// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/func/004.phpt
  it("General function test", function () {
    expect(parser.parseCode("<?php\necho \"Before function declaration...\\n\";\nfunction print_something_multiple_times($something,$times)\n{\n  echo \"----\\nIn function, printing the string \\\"$something\\\" $times times\\n\";\n  for ($i=0; $i<$times; $i++) {\n    echo \"$i) $something\\n\";\n  }\n  echo \"Done with function...\\n-----\\n\";\n}\nfunction some_other_function()\n{\n  echo \"This is some other function, to ensure more than just one function works fine...\\n\";\n}\necho \"After function declaration...\\n\";\necho \"Calling function for the first time...\\n\";\nprint_something_multiple_times(\"This works!\",10);\necho \"Returned from function call...\\n\";\necho \"Calling the function for the second time...\\n\";\nprint_something_multiple_times(\"This like, really works and stuff...\",3);\necho \"Returned from function call...\\n\";\nsome_other_function();\n?>")).toMatchSnapshot();
  });
});
