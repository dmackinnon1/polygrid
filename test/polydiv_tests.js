console.log("running polynomial division tests");
/**
 * These are tests of the core division functionality.
 * Intended to catch  regressions - more are required :)
 * Load test.html to run these in QUnit.
 **/
var test1 = new Rational(new Poly([0,1]), new Poly([2])).simplify();
var test2 = new Rational(new Poly([1,0,1]), new Poly([1,1])).simplify();
var test3 = new Rational(new Poly([-1,-2.-3]), new Poly([2,1])).simplify();
var test4 = new Rational(new Poly([1,2,1]), new Poly([1,1])).simplify();
var test5 = new Rational(new Poly([1,-2,1]), new Poly([1,-1])).simplify();
var test6 = new Rational(new Poly([1,4,4]), new Poly([1,2])).simplify();
var test7 = new Rational(new Poly([-1,0,1,3]), new Poly([1,2,-1])).simplify();
var test8 = new Rational(new Poly([4,0,-1]), new Poly([2,-3])).simplify();
var test9 = new Rational(new Poly([0,1,0,1]), new Poly([1,2])).simplify();

var cases = [test1, test2, test3, test4, test5, test6, test7, test8, test9];

QUnit.test( "printing_test_1", function( assert ) { 
		var p = new Poly([0]);
		assert.ok(true, "poly: " + p.toString());
	});

QUnit.test( "printing_test_2", function( assert ) { 
		var p = new Poly([1]);
		assert.ok(true, "poly: " + p.toString());
	});
	
QUnit.test( "printing_test_3", function( assert ) { 
		var p = new Poly([-1]);
		assert.ok(true, "poly: " + p.toString());
	});
	
QUnit.test( "printing_test_4", function( assert ) { 
		var p = new Poly([0,1]);
		assert.ok(true, "poly: " + p.toString());
	});
	
QUnit.test( "printing_test_5", function( assert ) { 
		var p = new Poly([8,2]);
		assert.ok(true, "poly: " + p.toString());
	});

var cindex = 0; //a secondary index is required - the index i is not available on function execution.
for (var i = 0; i< cases.length; i++){
	QUnit.test( "test: " + cases[i].question.toString(), function( assert ) { 
		var validation = cases[cindex].validate();
		var solution = cases[cindex].solution.toString();
		cindex++;
		assert.ok(validation, solution + ", Passed! validation returned: " + validation );
	});
}
