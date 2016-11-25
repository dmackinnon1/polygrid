
//$.getScript('polydiv.js', function() {} put tests in here if test.html does not include the dependency

console.log("begin polynomial tests");
console.log("=======================");

var p = new Poly([1,2,3]);
console.log("polynomial size: " + p.rawSize());
console.log("polynomial degree: " + p.degree());
console.log("coefficient for degree 3: " + p.coefficient(3));
console.log("coefficient for degree 0: " + p.coefficient(0));
console.log("polynomial: " + p);
var p2 = new Poly([0,-1,2,-3,0,0]);
console.log("polynomial2: " + p2);
console.log("trimming p2, should not affect it: " + p2.trim());
var p3 = new Poly([0,-1,2,-3,0,5]);
console.log("polynomial3: " + p3);
console.log("multiply by 2: " + p3.scalarProd(2));
console.log("multiply by -1: " + p3.scalarProd(-1));
console.log("difference of p2 and p1: " + p2.sub(p));
console.log("difference of p2 and p2: " + p2.sub(p2));
console.log("simple tests");
var simple = new Poly([0,1]);
console.log("simple polnomial: " + simple);
console.log("product: " + simple.prod(simple))
var sum1 = new Poly([1,1]);
var diff1 = new Poly([1,-1]);
console.log("(1+x)^2: " + sum1.prod(sum1));
console.log("(1-x)^2: " + diff1.prod(diff1));
console.log("(1+x)(1-x): " + sum1.prod(diff1));
console.log(" reversed: " + sum1.prod(diff1).revShow())

console.log("=======================");
console.log("begin test internal methods");
console.log("=======================");
p = new Poly([1]);
console.log("adding 1 to 1: " + p.addToTerm(0,1));
console.log("adding x to 2: " + p.addToTerm(1,1));
console.log("adding x to 2 + x: " + p.addToTerm(1,1));

console.log("=======================");
console.log("begin rational and mixed tests");
console.log("=======================");

var rat1 = new Rational(p2, sum1);
console.log(" Rational: " + rat1 );
var mixed1 = new Mixed(diff1, rat1);
console.log(" Mixed: " + mixed1 );

console.log("=======================");
console.log("begin division tests");
console.log("=======================");
p = new Poly([1,2,3,2]);
p2 = new Poly([0,1]);
console.log("division test 1: " + new Rational(p,p2) + " = " + p.divide(p2));

console.log("division test: 1/2 " + (1 / 2) );
console.log("div test: " + new Rational(new Poly([1,2,1]), new Poly([1,1])).simplify());
console.log("div test: " + new Rational(new Poly([1,-2,1]), new Poly([-1,1])).simplify());
console.log("div test: " + new Rational(new Poly([1,0,-1]), new Poly([1,1])).simplify());
console.log("div test: " + new Rational(new Poly([-2,5,5,1]), new Poly([2,1])).simplify());
console.log("div test: " + new Rational(new Poly([-2,5,5,1]), new Poly([-1,3,1])).simplify());
console.log("div test: " + new Rational(new Poly([3,-1,0,9]), new Poly([-2,3])).simplify());

