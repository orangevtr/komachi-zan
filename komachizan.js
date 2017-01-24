((values) => {
  var opes = ['+','-','*','/'];
  values.forEach((val,id) => {
      if (id > 0) {
          formulas = ((ar, v) => {
              var res = [];
              ar.forEach((e,i) => {
                  opes.forEach((ope,opei) => {
                      res.push(e + ope + v);
                  });
              });
              return res;
          })(formulas, val);
      } else {
          formulas = [val];
      }
  });

  formulas.filter((f) => {
      return eval(f) == 100;
  }).forEach((f,id) => {
      console.log("[" + id + "]: " + f);
  });
})(process.argv.slice(2));
