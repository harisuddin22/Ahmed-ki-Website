function makePizza() {
    loadDough(function (dough) {
      loadChicken(dough, function (doughChicken) {
      });
    });
  }
  
  function loadDough(cb) {
    console.log("loading dough....");
  
    setTimeout(function () {
      const newItem = "Dough";
      console.log("Dough load");
      console.log("load items:", newItem);
      cb(newItem);
    }, 3000);
  }

  function loadChicken(cb) {
    console.log("loading chicken.....");
  
    setTimeout(function () {
      const newItem = "chicken";
      console.log("chicken load");
      console.log("load items:", newItem);
    //   cb(newItem);
    }, 3000);
  }
  

  
  makePizza();
  