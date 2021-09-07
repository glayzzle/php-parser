const parser = require("../main");

describe("Parse Attributes", () => {
  it("can parse class attributes", () => {
    expect(
      parser.parseEval(`
    #[Deprecated]
    #[replace("use NewClass")]
    class DepClass {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse method attributes", () => {
    expect(
      parser.parseEval(`
    class Test {
      #[Pure]
      function m() {}
    }
    `)
    ).toMatchSnapshot();
  });
  it("can parse param attributes", () => {
    expect(
      parser.parseEval(`
    function f(
    #[Unsigned]
     int $n) {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse params with comments", () => {
    expect(
      parser.parseEval(
        `// Line 1
    #[ Pure ( ) /* Pure */ ]
    // Line 3
    #[
      // Try using b
      Deprecated
    ]
    function a(#[ Unsigned ] $a) {}
    `,
        {
          parser: {
            extractDoc: true,
          },
        }
      )
    ).toMatchSnapshot();
  });
  it("can parse parms with array values", () => {
    expect(
      parser.parseEval(`
    #[List(["a"=>1, 'b' => Test::class, 'c'=>[]])]
    function a() {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse params with end characters", () => {
    expect(
      parser.parseEval(`
    #[End(["])}>"])]
    class End {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse multi-line attributes", () => {
    expect(
      parser.parseEval(`
    #[
      One(),
      Two(),
      Three()
    ]
    #[Four]
    class Multi {}
    `)
    ).toMatchSnapshot();
  });
  it("can parse anonymous function attributes", () => {
    expect(
      parser.parseEval(`
    $a = #[Pure] fn() => true;
    $b = #[A] function() {};
    `)
    ).toMatchSnapshot();
  });
  it("can parse class property attributes", () => {
    expect(
      parser.parseEval(`
      class A {
        #[B]
        public B $b;
        #[C]
        private C $c;
        #[D]
        protected $d;
      }
      `)
    ).toMatchSnapshot();
  });
  it("can parse class const attributes", () => {
    expect(
      parser.parseEval(`
      class A {
        #[B]
        const B = 1;
      }
      `)
    ).toMatchSnapshot();
  });
  it("can parse anon-class attributes", () => {
    expect(parser.parseEval(`$a = new #[T] class {};`)).toMatchSnapshot();
  });
  it("can parse interface attributes", () => {
    expect(
      parser.parseEval(`
    #[A]
    interface b {
      #[C]
      const D = 0;
      #[E]
      public function f();
    }
    `)
    ).toMatchSnapshot();
  });
  it("can parse attributes in inner statements", () => {
    expect(
      parser.parseEval(`
    namespace A {
      function b() {
        return #[C] fn() => #[Pure] function() {};
      } 
    }`)
    ).toMatchSnapshot();
  });
  it("can parse attributes with namespace", () => {
    expect(
      parser.parseEval(`
      #[\\JetBrains\\PhpStorm\\Pure]
      function b() {} 
    `)
    ).toMatchSnapshot();
  });

  it("doesnt repeat attributes from previous function", () => {
    expect(
      parser.parseEval(`
      class a {
        #[Att1]
        function b(){}
        function c(){}
        function d(){}
        }
    `)
    ).toMatchSnapshot();
  });
});
