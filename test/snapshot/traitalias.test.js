const parser = require("../main");

describe("traitalias", function() {
  it("as public with method", function() {
    expect(
      parser.parseEval(`
class MyClass2 {
    use HelloWorld { sayHello as public myPrivateHello; }
}
`)
    ).toMatchSnapshot();
  });

  it("as method", function() {
    expect(
      parser.parseEval(`
class MyClass2 {
    use HelloWorld { sayHello as myPrivateHello; }
}
`)
    ).toMatchSnapshot();
  });

  it("as public", function() {
    expect(
      parser.parseEval(`
class MyClass1 {
    use HelloWorld { sayHello as public; }
}
`)
    ).toMatchSnapshot();
  });

  it("as protected", function() {
    expect(
      parser.parseEval(`
class MyClass1 {
    use HelloWorld { sayHello as protected; }
}
`)
    ).toMatchSnapshot();
  });

  it("as private", function() {
    expect(
      parser.parseEval(`
class MyClass1 {
    use HelloWorld { sayHello as private; }
}
`)
    ).toMatchSnapshot();
  });

  // PHP Fatal error:  Cannot use 'static' as method modifier
  // but should be parsable, because allowed by grammar
  it("as static", function() {
    const astErr = parser.parseEval(
      `
class MyClass1 {
    use HelloWorld { sayHello as static; }
}
`,
      {
        parser: {
          suppressErrors: true
        }
      }
    );
    expect(astErr).toMatchSnapshot();
  });

  // PHP Fatal error:  Cannot use 'abstract' as method modifier
  // but should be parsable, because allowed by grammar
  it("as abstract", function() {
    const astErr = parser.parseEval(
      `
class MyClass1 {
    use HelloWorld { sayHello as abstract; }
}
`,
      {
        parser: {
          suppressErrors: true
        }
      }
    );
    expect(astErr).toMatchSnapshot();
  });

  // PHP Fatal error:  Cannot use 'final' as method modifier
  // but should be parsable, because allowed by grammar
  it("as final", function() {
    const astErr = parser.parseEval(
      `
class MyClass1 {
    use HelloWorld { sayHello as final; }
}
`,
      {
        parser: {
          suppressErrors: true
        }
      }
    );
    expect(astErr).toMatchSnapshot();
  });

  it("as protected protected", function() {
    const astErr = parser.parseEval(
      `
class MyClass1 {
    use HelloWorld { sayHello as protected protected; }
}
`,
      {
        parser: {
          suppressErrors: true
        }
      }
    );
    expect(astErr).toMatchSnapshot();
  });
});
