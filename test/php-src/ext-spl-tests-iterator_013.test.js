// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_013.phpt
  it("SPL: AppendIterator", function () {
    expect(parser.parseCode("<?php\necho \"===Empty===\\n\";\n$it = new AppendIterator;\nforeach($it as $key=>$val)\n{\n    echo \"$key=>$val\\n\";\n}\necho \"===Append===\\n\";\n$it->append(new ArrayIterator(array(0 => 'A', 1 => 'B')));\nforeach($it as $key=>$val)\n{\n    echo \"$key=>$val\\n\";\n}\necho \"===Rewind===\\n\";\nforeach($it as $key=>$val)\n{\n    echo \"$key=>$val\\n\";\n}\necho \"===Append===\\n\";\n$it->append(new ArrayIterator(array(2 => 'C', 3 => 'D')));\nforeach(new NoRewindIterator($it) as $key=>$val)\n{\n    echo \"$key=>$val\\n\";\n}\necho \"===Rewind===\\n\";\nforeach($it as $key=>$val)\n{\n    echo \"$key=>$val\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
