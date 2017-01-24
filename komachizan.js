find_komachi(process.argv.slice(2));

function find_komachi(values) {
  var opes = ['+','-','*','/'];
  function add_ope(ar,v) {
    var res = [];
    ar.forEach(function(e,i) {
      opes.forEach(function(ope,opei) {
	    res.push(e + ope + v);
	  });
    });
    return res;
  };
  
  values.forEach(function(val,id) {
	if (id > 0) {
      formulas = add_ope(formulas,val);
    } else {
      formulas = [val];
    }
  });
  formulas.filter(function(f) {return eval(f) == 100}).forEach(function(f,id) {
    console.log("[" + id + "]: " + f);
  });
}
