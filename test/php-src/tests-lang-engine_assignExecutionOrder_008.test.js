// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/engine_assignExecutionOrder_008.phpt
  it("Ensure by value assignments leave temporaries on the stack, for all sorts of assignees.", function () {
    expect(parser.parseCode("<?php\nfunction f() { return 0; }\n$a[0][1] = 'good';\n$a[1][1] = 'bad';\necho \"\\n\" . '$i=f(): ';\necho $a[$i=f()][++$i];\nunset($i);\necho \"\\n\" . '$$x=f(): ';\n$x='i';\necho $a[$$x=f()][++$$x];\nunset($i, $x);\necho \"\\n\" . '${\\'i\\'}=f(): ';\necho $a[${'i'}=f()][++${'i'}];\nunset(${'i'});\necho \"\\n\" . '$i[0]=f(): ';\necho $a[$i[0]=f()][++$i[0]];\nunset($i);\necho \"\\n\" . '$i[0][0]=f(): ';\necho $a[$i[0][0]=f()][++$i[0][0]];\nunset($i);\necho \"\\n\" . '$i->p=f(): ';\n$i = new stdClass;\necho $a[$i->p=f()][++$i->p];\nunset($i);\necho \"\\n\" . '$i->p->q=f(): ';\n$i = new stdClass;\n$i->p = new stdClass;\necho $a[$i->p->q=f()][++$i->p->q];\nunset($i);\necho \"\\n\" . '$i->p[0]=f(): ';\n$i = new stdClass;\necho $a[$i->p[0]=f()][++$i->p[0]];\nunset($i);\necho \"\\n\" . '$i->p[0]->p=f(): ';\n$i = new stdClass;\n$i->p[0] = new stdClass;\necho $a[$i->p[0]->p=f()][++$i->p[0]->p];\nunset($i);\nClass C {\n    static $p;\n}\necho \"\\n\" . 'C::$p=f(): ';\necho $a[C::$p=f()][++C::$p];\necho \"\\n\" . 'C::$p[0]=f(): ';\nC::$p = array();\necho $a[C::$p[0]=f()][++C::$p[0]];\necho \"\\n\" . 'C::$p->q=f(): ';\nC::$p = new stdclass;\necho $a[C::$p->q=f()][++C::$p->q];\n?>")).toMatchSnapshot();
  });
});
