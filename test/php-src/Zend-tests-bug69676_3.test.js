// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69676_3.phpt
  it("Bug #69676: Resolution of self::FOO in class constants not correct (variation)", function () {
    expect(parser.parseCode("<?php\nclass P {\n    const N = 'P';\n}\nclass A extends P {\n    const selfN = self::N;\n    const parentN = parent::N;\n    const N = 'A';\n}\nclass B extends A {\n    const N = 'B';\n}\nvar_dump(B::selfN); // A\nvar_dump(B::parentN); // P\nclass A2 {\n    const selfN = self::N;\n    const N = 'A2';\n}\nclass B2 extends A2 {\n    const indSelfN = self::selfN;\n    const N = 'B2';\n}\nclass C2 extends B2 {\n    const N = 'C2';\n}\nvar_dump(C2::indSelfN); // A2\nclass A3 {\n    const selfN = self::N;\n    const N = 'A3';\n}\nclass B3 extends A3 {\n    const exprSelfN = \"expr\" . self::selfN;\n    const N = 'B3';\n}\nclass C3 extends B3 {\n    const N = 'C3';\n}\nvar_dump(C3::exprSelfN); // exprA3\nclass A4 {\n    const selfN = self::N;\n    const N = 'A4';\n}\nclass B4 extends A4 {\n    const N = 'B4';\n    public $prop = self::selfN;\n}\nclass C4 extends B4 {\n    const N = 'C4';\n}\nvar_dump((new C4)->prop); // A4\n?>")).toMatchSnapshot();
  });
});
