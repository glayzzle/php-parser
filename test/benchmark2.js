const parser = require("./main");

const code = `
  <?php
  class foo extends bar {
    const A = 1, B = 2, C = 3;
    protected $foo = null;
    public function __construct($a, $b, $c, array $d = []) {
      echo $a . $b . $c . implode(";", $d);
    }
    static public function bar(): foo {
      return new self(1, 2, 3);
    }
  }
  `;

const reader = new parser();
reader.parseCode(code);
