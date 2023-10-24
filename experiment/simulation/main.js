
function totslabload1() {
  const DL1 = document.getElementById("DL1").value;
  const LL1 = document.getElementById("LL1").value;

  // Check if input1 is 4 and input2 is 1
  if (DL1 == 1 && LL1 == 1) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("Totalload1").innerHTML = "8.75 KN/m<sup>2</sup>";
      document.getElementById("Totalload2").innerHTML = "8.75 KN/m<sup>2</sup>";
      document.getElementById("wrong1a").style.visibility="hidden";
    }, 800);
    setTimeout(function() {
      document.getElementById("text1").style.visibility="visible";
      document.getElementById("text2").style.visibility="visible";
      document.getElementById("text3").style.visibility="visible";
      document.getElementById("text4").style.visibility="visible";

      document.getElementById("Area1").style.visibility="visible";
      document.getElementById("TL1").style.visibility="visible";
      document.getElementById("button2").style.visibility="visible";
    

    }, 1200);
    
    document.getElementById("Totalload1").style.display = "block"; 

    document.getElementById("text1").style.display = "block"; 
    document.getElementById("text2").style.display = "block"; 
    document.getElementById("text3").style.display = "block"; 
    document.getElementById("text4").style.display = "block"; 
    document.getElementById("Area1").style.display = "block"; 
    document.getElementById("TL1").style.display = "block"; 
    document.getElementById("button2").style.display = "block"; 
    

    }

    if (DL1 == "" && LL1 == "") { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong1a").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong1a").style.display = "block";

  } else {
    // Display an error message
    setTimeout(function() {
   document.getElementById("wrong1a").innerHTML = "Wrong Input. DL = (25 x thiskness of slab) = 3.75KN/m<sup>2</sup> & LL = 4 KN/m<sup>2</sup>";
  }, 1000);
   document.getElementById("wrong1a").style.display = "block";
  }
  }


//////////////////////////////////////////////////Fixed End Moment for span BA////////////////////////////////////////////////////

function tottrapload1() {
  const Area1 = document.getElementById("Area1").value;
  const TL1 = document.getElementById("TL1").value;

  // Check if input1 is 4 and input2 is 1
  if (Area1 == 1 && TL1 == 1) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("outputtrapload").innerHTML = "45.93 KN";
      document.getElementById("wrong1b").style.visibility="hidden";
    }, 800);
    setTimeout(function() {
      document.getElementById("text5").style.visibility="visible";
      document.getElementById("text6").style.visibility="visible";
      document.getElementById("text7").style.visibility="visible";
      document.getElementById("inputtrapload").style.visibility="visible";
      document.getElementById("button3").style.visibility="visible";
    

    }, 1200);
    
    document.getElementById("outputtrapload").style.display = "block"; 
    document.getElementById("inputtrapload").style.display = "block"; 

    document.getElementById("text5").style.display = "block"; 
    document.getElementById("text6").style.display = "block"; 
    document.getElementById("text7").style.display = "block"; 
    document.getElementById("text8").style.display = "block"; 
    document.getElementById("button3").style.display = "block"; 
    

    }

    if (Area1 == "" && TL1 == "") { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong1b").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong1b").style.display = "block";

  } else {
    // Display an error message
    setTimeout(function() {
   document.getElementById("wrong1b").innerHTML = "Wrong Input.Area of trapezoid (APQB) = 5.25m<sup>2</sup> & load per unit area = 8.75KN/m<sup>2</sup>";
  }, 1000);
   document.getElementById("wrong1b").style.display = "block";
  }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////Fixed End Moment for span BA////////////////////////////////////////////////////

function trapimposedload1() {
  const inputtrapload = document.getElementById("inputtrapload").value;

  // Check if input1 is 4 and input2 is 1
  if (inputtrapload == 1 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("output-superimposed1a").innerHTML = "9.81 KN/m";
      document.getElementById("wrong1c").style.visibility="hidden";
    }, 800);
    setTimeout(function() {
      document.getElementById("text8").style.visibility="visible";
      document.getElementById("output-superimposed1b").innerHTML ="9.81 KN/m";
    

    }, 1200);
    
    document.getElementById("output-superimposed1a").style.display = "block"; 

    document.getElementById("text8").style.display = "block"; 
    document.getElementById("output-superimposed1b").style.display = "block"; 
    document.getElementById("wrong1c").style.display = "block"; 


    }

    if (inputtrapload == "" ) { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong1c").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong1c").style.display = "block";

  } else {
    // Display an error message
    setTimeout(function() {
   document.getElementById("wrong1c").innerHTML = "Wrong Input. Total load of trapezoidal section = 45.93 KN";
  }, 1000);
   document.getElementById("wrong1c").style.display = "block";
  }
  }
///////////////////////////////////////////PAGE 1 COMPLETE///////////////////////////////////////////////////////


//////////////////////////////////////////////////Fixed End Moment for span BA////////////////////////////////////////////////////

function tottriload2() {
  const Area2 = document.getElementById("Area2").value;
  const TL2 = document.getElementById("TL2").value;

  // Check if input1 is 4 and input2 is 1
  if (Area2 == 1 && TL2 == 1) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("outputtriload").innerHTML = "19.68 KN";
      document.getElementById("wrong2b").style.visibility="hidden";
    }, 800);
    setTimeout(function() {
      document.getElementById("text13").style.visibility="visible";
      document.getElementById("text14").style.visibility="visible";
      document.getElementById("text15").style.visibility="visible";
      document.getElementById("inputtriload").style.visibility="visible";
      document.getElementById("button6").style.visibility="visible";
    

    }, 1200);
    
    document.getElementById("outputtriload").style.display = "block"; 
    document.getElementById("inputtriload").style.display = "block"; 

    document.getElementById("text13").style.display = "block"; 
    document.getElementById("text14").style.display = "block"; 
    document.getElementById("text15").style.display = "block"; 
    document.getElementById("button6").style.display = "block"; 
    document.getElementById("wrong2b").style.display = "block"; 


    }

    if (Area2 == "" && TL2 == "") { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong2b").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong2b").style.display = "block";

  } else {
    // Display an error message
    setTimeout(function() {
   document.getElementById("wrong2b").innerHTML = "Wrong Input. Area of triangular slab (APD) = 2.25m<sup>2</sup> & load per unit area = 8.75KN/m<sup>2</sup>";
  }, 1000);
   document.getElementById("wrong2b").style.display = "block";
  }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////Fixed End Moment for span BA////////////////////////////////////////////////////

function triimposedload2() {
  const inputtriload = document.getElementById("inputtriload").value;

  // Check if input1 is 4 and input2 is 1
  if (inputtriload == 1 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("output-superimposed2a").innerHTML = "6.56 KN/m";
      document.getElementById("wrong2c").style.visibility="hidden";
    }, 800);
    setTimeout(function() {
      document.getElementById("text16").style.visibility="visible";
      document.getElementById("output-superimposed2b").innerHTML ="6.56 KN/m";
    

    }, 1200);
    
    document.getElementById("output-superimposed2a").style.display = "block"; 

    document.getElementById("text16").style.display = "block"; 
    document.getElementById("output-superimposed2b").style.display = "block"; 
    document.getElementById("wrong2c").style.display = "block"; 


    }

    if (inputtriload == "" ) { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong2c").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong2c").style.display = "block";

  } else {
    // Display an error message
    setTimeout(function() {
   document.getElementById("wrong2c").innerHTML = "Wrong Input. Total load of triangle section = 45.93 KN";
  }, 1000);
   document.getElementById("wrong2c").style.display = "block";
  }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////PAGE 2 COMPLETE////////////////////////////////////////////////////

function beamselfwt1() {
  const longerbeamlength1 = document.getElementById("longerbeamlength1").value;
  const longerbeamwidth1 = document.getElementById("longerbeamwidth1").value;
  const longerbeamdepth1 = document.getElementById("longerbeamdepth1").value;


  // Check if input1 is 4 and input2 is 1
  if (longerbeamlength1 == 1 && longerbeamwidth1 == 1 && longerbeamdepth1 == 1) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("longerbeam1selfwt").innerHTML = "11.25 KN";
      document.getElementById("wrong3a").style.visibility="hidden";
    }, 800);
    setTimeout(function() {
      document.getElementById("longerbeam2selfwt").innerHTML ="11.25 KN";
      document.getElementById("text17").style.visibility="visible";
      document.getElementById("text18").style.visibility="visible";
      document.getElementById("text19").style.visibility="visible";
      document.getElementById("text19b").style.visibility="visible";
      document.getElementById("shorterbeam1length").style.visibility="visible";
      document.getElementById("shorterbeam1width").style.visibility="visible";
      document.getElementById("shorterbeam1depth").style.visibility="visible";
      document.getElementById("button8").style.visibility="visible";


    }, 1200);
    
    document.getElementById("longerbeam1selfwt").style.display = "block"; 

    document.getElementById("wrong3a").style.display = "block"; 
    document.getElementById("longerbeam2selfwt").style.display = "block"; 

    document.getElementById("text17").style.display = "block"; 
    document.getElementById("text18").style.display = "block"; 
    document.getElementById("text19").style.display = "block"; 
    document.getElementById("text19").style.display = "block"; 
    document.getElementById("text19b").style.display = "block"; 

    document.getElementById("shorterbeam1length").style.display = "block"; 
    document.getElementById("shorterbeam1width").style.display = "block"; 
    document.getElementById("button8").style.display = "block"; 


    }

    if (longerbeamlength1 == "" && longerbeamwidth1 == "" && longerbeamdepth1 == "") { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong3a").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong3a").style.display = "block";

  } else {
    // Display an error message
    setTimeout(function() {
   document.getElementById("wrong3a").innerHTML = "Wrong Input. l<sub>Y</sub>  = 5m, width = 0.3m & depth = 0.3m";
  }, 1000);
   document.getElementById("wrong3a").style.display = "block";
  }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
function beamselfwt2() {
  const shorterbeam1length = document.getElementById("shorterbeam1length").value;
  const shorterbeam1width = document.getElementById("shorterbeam1width").value;
  const shorterbeam1depth = document.getElementById("shorterbeam1depth").value;


  // Check if input1 is 4 and input2 is 1
  if (shorterbeam1length == 1 && shorterbeam1width == 1 && shorterbeam1depth == 1) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("shorterbeam1selfwt").innerHTML = "6.75 KN";
      document.getElementById("wrong3b").style.visibility="hidden";
    }, 800);
    setTimeout(function() {
      document.getElementById("shorterbeam2selfwt").innerHTML ="2";
      document.getElementById("text20").style.visibility="visible";
      document.getElementById("text21").style.visibility="visible";
      document.getElementById("text22").style.visibility="visible";
      document.getElementById("text23").style.visibility="visible";
      document.getElementById("text24").style.visibility="visible";



    }, 1200);
    
    document.getElementById("shorterbeam1selfwt").style.display = "block"; 
    document.getElementById("wrong3b").style.display = "block"; 
    document.getElementById("shorterbeam2selfwt").style.display = "block"; 
    document.getElementById("text20").style.display = "block"; 
    document.getElementById("text21").style.display = "block"; 
    document.getElementById("text22").style.display = "block"; 
    document.getElementById("text23").style.display = "block"; 
    document.getElementById("text24").style.display = "block"; 


    }

    if (shorterbeam1length == "" && shorterbeam1width == "" && shorterbeam1depth == "") { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong3b").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong3b").style.display = "block";

  } else {
    // Display an error message
    setTimeout(function() {
   document.getElementById("wrong3b").innerHTML = "Wrong Input. l<sub>X</sub>  = 3m, width = 0.3m & depth = 0.3m";
  }, 1000);
   document.getElementById("wrong3b").style.display = "block";
  }
  }
///////////////////////////////////////PAGE 3 Complete///////////////////////////////////////////////////////////
///////////////

function Ah() {
  const frame = document.getElementById("frame").value;
  const zonefactor = document.getElementById("zonefactor").value;
  const importancefactor = document.getElementById("importancefactor").value;
  const responcefactor = document.getElementById("responcefactor").value;
  const SAGvalue = document.getElementById("SAGvalue").value;


  // Check if input1 is 4 and input2 is 1
  if (frame == 1 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("horiAcclertnCoeff").innerHTML = (((zonefactor)/100)/2) * (((importancefactor) / (responcefactor)) * ((SAGvalue))) ;
      document.getElementById("wrong4a").style.visibility="hidden";
      document.getElementById("text26").style.visibility="visible";
      document.getElementById("text25").style.visibility="visible";
      document.getElementById("text27").style.visibility="visible";
      document.getElementById("finalloadW").style.visibility="visible";
      document.getElementById("horiacclerationcoeff").style.visibility="visible";
      document.getElementById("button9").style.visibility="visible";

    }, 800);

    document.getElementById("horiAcclertnCoeff").style.display = "block"; 
    document.getElementById("wrong4a").style.display = "block"; 
    document.getElementById("text26").style.display = "block"; 
    document.getElementById("text25").style.display = "block"; 
    document.getElementById("text27").style.display = "block"; 
    document.getElementById("finalloadW").style.display = "block"; 
    document.getElementById("horiacclerationcoeff").style.display = "block"; 
    document.getElementById("button9").style.display = "block"; 

   

    }

    if (frame == "" ) { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong4a").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong4a").style.display = "block";

  } 
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
function calcbaseshear() {
  const finalloadW = document.getElementById("finalloadW").value;
  const horiacclerationcoeff = document.getElementById("horiacclerationcoeff").value;


  // Check if input1 is 4 and input2 is 1
  if (finalloadW == 6 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
      document.getElementById("baseshear").innerHTML = (parseFloat(finalloadW)) * (parseFloat(horiacclerationcoeff));
      document.getElementById("wrong4b").style.visibility="hidden";
    }, 800);

    setTimeout(function() {
      document.getElementById("stand_img1").style.visibility="visible";

    }, 1000);
    setTimeout(function() {
      document.getElementById("stand_img2").style.visibility="visible";

    }, 1300);

    document.getElementById("baseshear").style.display = "block"; 
    document.getElementById("stand_img1").style.display = "block"; 
    document.getElementById("stand_img2").style.display = "block"; 

    }

    if (finalloadW == "" ) { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong4b").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong4b").style.display = "block";

  } else {
    // Display an error message
    setTimeout(function() {
   document.getElementById("wrong4b").innerHTML = "Wrong Input. W<sub>T</sub>= 95.48 KN";
  }, 1000);
   document.getElementById("wrong4b").style.display = "block";
  }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////

function restart()
{
    location.reload();
}
//////////////////////navnext start here////////////////////////////////////

function navNext0()
{
document.getElementById("canvas0").style.visibility="hidden";
document.getElementById('s1_1').style.visibility="visible";
document.getElementById("canvas1").style.visibility="visible";

}

function navNext1()
{
document.getElementById("canvas1").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="visible";
document.getElementById("text1").style.visibility="hidden";
document.getElementById("text2").style.visibility="hidden";
document.getElementById("text3").style.visibility="hidden";
document.getElementById("text4").style.visibility="hidden";
document.getElementById("text5").style.visibility="hidden";
document.getElementById("text6").style.visibility="hidden";
document.getElementById("text7").style.visibility="hidden";
document.getElementById("text8").style.visibility="hidden";

document.getElementById("Area1").style.visibility="hidden";
document.getElementById("TL1").style.visibility="hidden";
document.getElementById("inputtrapload").style.visibility="hidden";
document.getElementById("button3").style.visibility="hidden";
document.getElementById("button2").style.visibility="hidden";
document.getElementById("wrong1a").style.visibility="hidden";
document.getElementById("wrong1b").style.visibility="hidden";
document.getElementById("wrong1c").style.visibility="hidden";




}

function navNext1a()
{
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="visible";
document.getElementById("text13").style.visibility="hidden";
document.getElementById("text14").style.visibility="hidden";
document.getElementById("text15").style.visibility="hidden";
document.getElementById("text16").style.visibility="hidden";

document.getElementById("inputtriload").style.visibility="hidden";
document.getElementById("button6").style.visibility="hidden";
document.getElementById("wrong2b").style.visibility="hidden";
document.getElementById("wrong2c").style.visibility="hidden";

}

function navNext1b()
{
  
document.getElementById("canvas1b").style.visibility="hidden";
document.getElementById("canvas1c").style.visibility="visible";
document.getElementById("text17").style.visibility="hidden";
document.getElementById("text18").style.visibility="hidden";
document.getElementById("text19").style.visibility="hidden";
document.getElementById("text19b").style.visibility="hidden";

document.getElementById("text20").style.visibility="hidden";
document.getElementById("text21").style.visibility="hidden";
document.getElementById("text22").style.visibility="hidden";
document.getElementById("text23").style.visibility="hidden";
document.getElementById("text24").style.visibility="hidden";
document.getElementById("button8").style.visibility="hidden";

document.getElementById("shorterbeam1length").style.visibility="hidden";
document.getElementById("shorterbeam1width").style.visibility="hidden";
document.getElementById("shorterbeam1depth").style.visibility="hidden";
document.getElementById("wrong3a").style.visibility="hidden";
document.getElementById("wrong3b").style.visibility="hidden";



}

function navNext1c()
{
document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="visible";
document.getElementById("text25").style.visibility="hidden";
document.getElementById("text26").style.visibility="hidden";
document.getElementById("text27").style.visibility="hidden";
document.getElementById("finalloadW").style.visibility="hidden";
document.getElementById("horiacclerationcoeff").style.visibility="hidden";
document.getElementById("button9").style.visibility="hidden";
document.getElementById("stand_img1").style.visibility="hidden";
document.getElementById("stand_img2").style.visibility="hidden";

document.getElementById("wrong4a").style.visibility="hidden";


}


function navNext1d()
{
document.getElementById("canvas1d").style.visibility="hidden";

document.getElementById("canvas1e").style.visibility="visible";


}

function navNext1e()
{
document.getElementById("canvas1e").style.visibility="hidden";

document.getElementById("canvas1f").style.visibility="visible";

}

function navNext1f()
{
document.getElementById("canvas1f").style.visibility="hidden";

document.getElementById("canvas1g").style.visibility="visible";

}

function navNext1g()
{
document.getElementById("canvas1g").style.visibility="hidden";

document.getElementById("canvas1h").style.visibility="visible";

}

function navNext1h()
{
document.getElementById("canvas1h").style.visibility="hidden";

document.getElementById("canvas1i").style.visibility="visible";
}
function navNext1i()
{
document.getElementById("canvas1i").style.visibility="hidden";

document.getElementById("canvas1j").style.visibility="visible";

}

setTimeout(function()
{
	
submit()

},1500);



function navNext2()
{
document.getElementById("canvas2").style.visibility="hidden";

document.getElementById("canvas3").style.visibility="visible";

  setTimeout(function()

{$("#note2").delay(400).slideDown("slow");
document.getElementById("re_arw").style.visibility="visible";
document.getElementById("restart").style.visibility="visible";
},2000);
}

// function restart()
// {

// 	 location.reload();
// }


function add_stand()
{

document.getElementById('arw1').style.visibility="hidden";
document.getElementById('add_stand').style.visibility="hidden";
document.getElementById('stand_canvas1').style.visibility="visible";
document.getElementById('stand_canvas1').style.animation="stand 2s forwards";

  setTimeout(function()

	{
document.getElementById('s1_1').style.visibility="hidden";
document.getElementById('s1_2').style.visibility="visible";
document.getElementById('arw2').style.visibility="visible";
document.getElementById('add_aluminium_bar').style.visibility="visible";

	},2000);

}

function start_analysis()
{
document.getElementById('start_analysis'). style.visibility="hidden";}
document.getElementById('start_Analysis1').style.visibility="hidden";
function add_aluminium_bar()
{
document.getElementById('arw2').style.visibility="hidden";
document.getElementById('add_aluminium_bar').style.visibility="hidden";
document.getElementById('aluminium_canvas1').style.visibility="visible";
document.getElementById('aluminium_canvas1').style.animation="aluminium_canvas1 1s forwards";
document.getElementById('start_Analysis1').style.visibility="hidden";
  setTimeout(function()

	{
document.getElementById('s1_2').style.visibility="hidden";
document.getElementById('s1_3').style.visibility="visible";
document.getElementById('arw3').style.visibility="visible";
document.getElementById('add_cellotap').style.visibility="visible";
document.getElementById('start_Analysis1').style.visibility="hidden";


	},1000);

}

function add_cellotap()
{
document.getElementById('arw3').style.visibility="hidden";
document.getElementById('add_cellotap').style.visibility="hidden";
document.getElementById('cellotap_canvas1').style.visibility="visible";
document.getElementById('cellotap_canvas1').style.animation="cellotap_canvas1 1s forwards";
document.getElementById('start_Analysis1').style.visibility="visible";
  setTimeout(function()

	{

document.getElementById('arw5').style.visibility="hidden";
document.getElementById('s1_3').style.visibility="hidden";
document.getElementById('s1_4').style.visibility="visible";
document.getElementById('start_Analysis1').style.visibility="visible";
},1000);
}
function start_Analysis()
{
  document.getElementById('arw5').style.visibility="hidden";
  document.getElementById('start_Analysis').style.visibility="hidden"; 
  

}

function submit11()
{
document.getElementById('trans_tap_canvas1').style.visibility="hidden";
document.getElementById('ar1_canvas1').style.visibility="hidden";
document.getElementById('cellotap_canvas1').style.animation="cellotap_stick1_canvas1 0.5s forwards";

setTimeout(function()
{
document.getElementById('div_tap').style.visibility="visible";
document.getElementById('cellotap_canvas1').style.visibility="hidden";
document.getElementById('cellotap1_canvas1').style.visibility="visible";
document.getElementById('cellotap1_canvas1').style.animation="cellotap_stick2_canvas1 1s forwards";
document.getElementById('div_tap').style.animation="div_tap 1s forwards";
setTimeout(function()
{

document.getElementById('trans_cutter_canvas1').style.visibility="visible";
document.getElementById('ar2_canvas1').style.visibility="visible";
document.getElementById('s1_4').style.visibility="hidden";
document.getElementById('s1_5').style.visibility="visible";

},1000);
},1000);
}

function trans_cutter()
{
document.getElementById('ar2_canvas1').style.visibility="hidden";
document.getElementById('trans_cutter_canvas1').style.visibility="hidden";
document.getElementById('paper_cutter_canvas1').style.visibility="hidden";
document.getElementById('paper_cutter_hand').style.visibility="visible";
document.getElementById('paper_cutter_hand').style.animation="paper_cutter_hand 2s forwards";
document.getElementById('div_tap').style.animation="div_tap_back 2.3s forwards";
setTimeout(function()
{
document.getElementById('cellotap1_canvas1').style.visibility="hidden";
document.getElementById('cellotap2_canvas1').style.visibility="visible";
document.getElementById('paper_cutter_hand').style.animation="paper_cutter_hand1 1s forwards";
setTimeout(function()
{
document.getElementById('paper_cutter_hand').style.visibility="hidden";
document.getElementById('paper_cutter2_canvas1').style.visibility="visible";
document.getElementById('trans_tap_back').style.visibility="visible";
document.getElementById('ar3_canvas1').style.visibility="visible";
document.getElementById('s1_5').style.visibility="hidden";
document.getElementById('s1_6').style.visibility="visible";

},1000);
},2000);
}

function trans_tap_back()

{
document.getElementById('ar3_canvas1').style.visibility="hidden";
document.getElementById('trans_tap_back').style.visibility="hidden";
document.getElementById('cellotap2_canvas1').style.animation="cellotap_stick3_canvas1 1s forwards";
setTimeout(function()
{
document.getElementById('arw4').style.visibility="visible";
document.getElementById('add_pzt').style.visibility="visible";

document.getElementById('s1_6').style.visibility="hidden";
document.getElementById('s1_7').style.visibility="visible";
},1000);
}


function add_pzt()
{
document.getElementById('arw4').style.visibility="hidden";
document.getElementById('add_pzt').style.visibility="hidden";
document.getElementById('pzt1_canvas1').style.visibility="visible";
document.getElementById('pzt1_canvas1').style.animation="pzt1_canvas1 1.5s forwards";
setTimeout(function()
{
document.getElementById('arw6').style.visibility="visible";
document.getElementById('add_bond').style.visibility="visible";	
document.getElementById('s1_7').style.visibility="hidden";
document.getElementById('s1_8').style.visibility="visible";
},1500);
}


function add_bond()
{
document.getElementById('arw6').style.visibility="hidden";
document.getElementById('add_bond').style.visibility="hidden";	
document.getElementById('bond').style.visibility="visible";	
document.getElementById('bond').style.animation="bond_add 1s forwards";
document.getElementById('brushfill').style.visibility="visible";	
document.getElementById('brushfill').style.animation="brushfill_add 1s forwards";
setTimeout(function()
{
document.getElementById('trans_brush').style.visibility="visible";
document.getElementById('ar4_canvas1').style.visibility="visible";
document.getElementById('s1_8').style.visibility="hidden";
document.getElementById('s1_9').style.visibility="visible";
},1000);
}

function trans_brush()
{
document.getElementById('trans_brush').style.visibility="hidden";
document.getElementById('ar4_canvas1').style.visibility="hidden";
document.getElementById('brushfill').style.visibility="hidden";
document.getElementById('brushfill_hand').style.visibility="visible";

document.getElementById('brushfill_hand').style.animation="brushfill_animate 1s forwards";

setTimeout(function()
{
document.getElementById('brushfill_hand').style.animation="brushfill_animate1 1s forwards";
document.getElementById('greaseeffect').style.visibility="visible";	
document.getElementById('greaseeffect').style.animation="greese_effect 1s forwards";
setTimeout(function()
{
document.getElementById('brushfill_hand').style.animation="brushfill_animate2 1s forwards";
setTimeout(function()
{
	document.getElementById('brushfill_hand').style.visibility="hidden";
	document.getElementById('brushfill_vis').style.visibility="visible";
	document.getElementById('trans_pzt1_canvas1').style.visibility="visible";
	document.getElementById('ar5_canvas1').style.visibility="visible";
	document.getElementById('s1_9').style.visibility="hidden";
    document.getElementById('s1_10').style.visibility="visible";
},1000);
},1000);

},1000);

}

function trans_pzt1()
{   document.getElementById('ar5_canvas1').style.visibility="hidden";
	document.getElementById('trans_pzt1_canvas1').style.visibility="hidden";
	document.getElementById('pzt1_canvas1').style.animation="top_pzt1_canvas1 1s forwards";

setTimeout(function()
{
document.getElementById('arrow1').style.visibility="hidden";
document.getElementById('nextButton1').style.visibility="hidden";
document.getElementById('s1_10').style.visibility="hidden";
document.getElementById('s1_11').style.visibility="hidden";

},1000);
}
// $("#smoke1").fadeOut(1000);
// $("#smoke2").fadeIn(1000);
////////////////canvas1a
function add_rod()

{
document.getElementById('arw1_canvas1a').style.visibility="hidden";
document.getElementById('add_rod').style.visibility="hidden";
document.getElementById('rod_wire').style.visibility="visible";
document.getElementById('soldrod').style.visibility="visible";
document.getElementById('soldstand').style.visibility="visible";
document.getElementById('rod_wire').style.animation="rod_wire_add 1s forwards";
document.getElementById('soldrod').style.animation="soldrod_add 1s forwards";
document.getElementById('soldstand').style.animation="soldstand_add 1s forwards";

setTimeout(function()
{

document.getElementById('arw2_canvas1a').style.visibility="visible";
document.getElementById('add_wire').style.visibility="visible";
document.getElementById('s2_1').style.visibility="hidden";
document.getElementById('s2_2').style.visibility="visible";
},1000);
}	

function add_wire()
{

document.getElementById('arw2_canvas1a').style.visibility="hidden";
document.getElementById('add_wire').style.visibility="hidden";
document.getElementById('wire1').style.visibility="visible";
document.getElementById('wire1').style.animation="wire1 2s forwards";
document.getElementById('hand_left').style.visibility="visible";
document.getElementById('hand_left').style.animation="hand_left 2s forwards";
document.getElementById('wire2').style.visibility="visible";
document.getElementById('wire2').style.animation="wire2 2s forwards";
document.getElementById('hand_right').style.visibility="visible";
document.getElementById('hand_right').style.animation="hand_right 2s forwards";

setTimeout(function()
{
document.getElementById('trans_wire1').style.visibility="visible";
document.getElementById('ar1_canvas1a').style.visibility="visible";
document.getElementById('s2_2').style.visibility="hidden";
document.getElementById('s2_3').style.visibility="visible";
document.getElementById('hand_right').style.visibility="hidden";
document.getElementById('hand_left').style.visibility="hidden";
},2000);
}

function trans_wire1()
{
document.getElementById('trans_wire1').style.visibility="hidden";
document.getElementById('ar1_canvas1a').style.visibility="hidden";
document.getElementById('wire1').style.animation="wire1_attach 1s forwards";	
document.getElementById('hand_left1').style.visibility="visible";
document.getElementById('hand_left1').style.animation="hand_left_attach 1s forwards";

setTimeout(function()
{
document.getElementById('hand_left1').style.visibility="hidden";
document.getElementById('trans_wire2').style.visibility="visible";
document.getElementById('ar2_canvas1a').style.visibility="visible";
document.getElementById('s2_3').style.visibility="hidden";
document.getElementById('s2_4').style.visibility="visible";
},1000);
}

function trans_wire2()

{
document.getElementById('trans_wire2').style.visibility="hidden";
document.getElementById('ar2_canvas1a').style.visibility="hidden";
document.getElementById('wire2').style.animation="wire2_attach 1s forwards";
document.getElementById('hand_right1').style.visibility="visible";	
document.getElementById('hand_right1').style.animation="hand_right1_attach 1s forwards";

setTimeout(function()
{
document.getElementById('hand_right1').style.visibility="hidden";
document.getElementById('trans_wire1_click').style.visibility="visible";
document.getElementById('ar3_canvas1a').style.visibility="visible";
document.getElementById('s2_4').style.visibility="hidden";
document.getElementById('s2_5').style.visibility="visible";
},1000);
}

function trans_wire1_click()
{
document.getElementById('trans_wire1_click').style.visibility="hidden";
document.getElementById('ar3_canvas1a').style.visibility="hidden";
document.getElementById('zoom1').style.visibility="visible";
document.getElementById('trans_soldrod').style.visibility="visible";
document.getElementById('ar4_canvas1a').style.visibility="visible";
document.getElementById('s2_5').style.visibility="hidden";
document.getElementById('s2_6').style.visibility="visible";
}

function trans_soldrod()
{
document.getElementById('trans_soldrod').style.visibility="hidden";
document.getElementById('ar4_canvas1a').style.visibility="hidden";
document.getElementById('rod_wire').style.visibility="hidden";
document.getElementById('soldrod').style.visibility="hidden";
document.getElementById('handrod_wire').style.visibility="visible";
document.getElementById('handrod_wire').style.visibility="visible";
document.getElementById('handrod_wire').style.animation="handrod_wire1_zoom1 2s forwards";
document.getElementById('silverhand').style.visibility="visible";
document.getElementById('silverhand').style.animation="silverhand_wire1_zoom1 2.2s forwards";
setTimeout(function()
{
// $("#smoke1").fadeOut(1000);
$("#smoke1").fadeIn(1000);
},1200);
setTimeout(function()
{
document.getElementById('soldering_image1').style.visibility="visible";
$("#smoke1").fadeOut(1000);

setTimeout(function()
{
$("#smoke2").fadeIn(1000);
},1000);

document.getElementById('handrod_wire').style.animation="handrod_wire2_zoom1 2s forwards";
document.getElementById('silverhand').style.animation="silverhand_wire2_zoom1 2s forwards";

setTimeout(function()
{
document.getElementById('soldering_image2').style.visibility="visible";
document.getElementById('handrod_wire').style.animation="handrod_wire2_back 2s forwards";
document.getElementById('silverhand').style.animation="silverhand_wire2_back 2s forwards";
$("#smoke2").fadeOut(1000);
setTimeout(function()
{
document.getElementById('handrod_wire').style.visibility="hidden";
document.getElementById('silverhand').style.visibility="hidden";
document.getElementById('rod_wire').style.visibility="visible";	
document.getElementById('soldrod').style.visibility="visible";	
document.getElementById('zoom1').style.visibility="hidden";
document.getElementById('soldering_image1').style.visibility="hidden";
document.getElementById('soldering_image2').style.visibility="hidden";
document.getElementById('soldering_image3').style.visibility="visible";
document.getElementById('soldering_image4').style.visibility="visible";

document.getElementById('s2_6').style.visibility="hidden";
document.getElementById('s2_7').style.visibility="visible";

document.getElementById('arrow1a').style.visibility="visible";
document.getElementById('nextButton1a').style.visibility="visible";
},2000);
},3500);
},4000);
}

//////////////////calculate button///////
function addscale2()
{
    document.getElementById("addscalebtn2").style.visibility="hidden";
    // document.getElementById("scale2").style.visibility="visible";
    // document.getElementById("scale2").style.animation="scale_move1 1.5s forwards";
    document.getElementById("arrowbeam4").style.visibility="hidden";

    setTimeout(function()
            {
                // document.getElementById("bscale2").style.visibility="visible";
                document.getElementById("b_value2").style.visibility="visible"; 
            },1000);
    // setTimeout(function()
    //         {
                // document.getElementById("bscale2").style.visibility="hidden";
                // document.getElementById("scale2").style.animation="scale_move2 1.5s forwards"; 
                document.getElementById("scale2").src="images/scale2.png";

                setTimeout(function()
                    {
                        document.getElementById("cal3").style.visibility="visible";
                        document.getElementById("cal4").style.visibility="visible";
                        // document.getElementById("cscale2").style.visibility="visible"; 
                    },2000);
            // },3000);
    setTimeout(function()
            {
                document.getElementById("arrowcan5").style.visibility="visible";
                document.getElementById("nextButtoncan5").style.visibility="visible";
                document.getElementById("step5a").style.visibility="hidden";
                document.getElementById("step5b").style.visibility="visible";
                // document.getElementById("arrowbeam1").style.visibility="visible";
            },3000);
}

//////////////////calculate button///////






//////////////////canvas1b

function add_pzt2()
{
document.getElementById('arw1_canvas1b').style.visibility="hidden";
document.getElementById('add_pzt2').style.visibility="hidden";
document.getElementById('pzt2_canvas1b').style.visibility="visible";
document.getElementById('pzt2_canvas1b').style.animation="pzt2_canvas1 1.5s forwards";
setTimeout(function()
{
document.getElementById('trans_brush1').style.visibility="visible";
document.getElementById('ar1_canvas1b').style.visibility="visible";
document.getElementById('s3_1').style.visibility="hidden";
document.getElementById('s3_2').style.visibility="visible";

},1500);
}


function trans_brush1()
{
document.getElementById('trans_brush1').style.visibility="hidden";
document.getElementById('ar1_canvas1b').style.visibility="hidden";
document.getElementById('brushfill_canvas1b').style.visibility="hidden";
document.getElementById('brushfill_hand_canvas1b').style.visibility="visible";

document.getElementById('brushfill_hand_canvas1b').style.animation="brushfill_animate_canvas1b 1s forwards";

setTimeout(function()
{
document.getElementById('brushfill_hand_canvas1b').style.animation="brushfill_animate1_canvas1b 1s forwards";
document.getElementById('greaseeffect_canvas1b').style.visibility="visible";	
document.getElementById('greaseeffect_canvas1b').style.animation="greese_effect_canvas1b 1s forwards";
setTimeout(function()
{
document.getElementById('brushfill_hand_canvas1b').style.animation="brushfill_animate2_canvas1b 1s forwards";
setTimeout(function()
{
	document.getElementById('brushfill_hand_canvas1b').style.visibility="hidden";
	document.getElementById('brushfill_vis_canvas1b').style.visibility="visible";
	document.getElementById('trans_pzt2_canvas1b').style.visibility="visible";
	document.getElementById('ar2_canvas1b').style.visibility="visible";
	document.getElementById('s3_2').style.visibility="hidden";
	document.getElementById('s3_3').style.visibility="visible";
},1000);
},1000);

},1000);
}

function trans_pzt2()
{
	document.getElementById('trans_pzt2_canvas1b').style.visibility="hidden";
	document.getElementById('ar2_canvas1b').style.visibility="hidden";
	document.getElementById('pzt2_canvas1b').style.animation="bottom_pzt2_canvas1b 1s forwards";

setTimeout(function()
{
document.getElementById('arw2_canvas1b').style.visibility="visible";
document.getElementById('add_wire_canvas1b').style.visibility="visible";
document.getElementById('s3_3').style.visibility="hidden";
document.getElementById('s3_4').style.visibility="visible";

},1000);
}


function add_wire_canvas1b()
{

document.getElementById('arw2_canvas1b').style.visibility="hidden";
document.getElementById('add_wire_canvas1b').style.visibility="hidden";
document.getElementById('wire1_canvas1b').style.visibility="visible";
document.getElementById('wire1_canvas1b').style.animation="wire1 2s forwards";
document.getElementById('hand_left_canvas1b').style.visibility="visible";
document.getElementById('hand_left_canvas1b').style.animation="hand_left_canvas1b 2s forwards";
document.getElementById('wire2_canvas1b').style.visibility="visible";
document.getElementById('wire2_canvas1b').style.animation="wire2_canvas1b 2s forwards";
document.getElementById('hand_right_canvas1b').style.visibility="visible";
document.getElementById('hand_right_canvas1b').style.animation="hand_right_canvas1b 2s forwards";

setTimeout(function()
{
document.getElementById('trans_wire1_canvas1b').style.visibility="visible";
document.getElementById('ar3_canvas1b').style.visibility="visible";
document.getElementById('s3_4').style.visibility="hidden";
document.getElementById('s3_5').style.visibility="visible";
document.getElementById('hand_right_canvas1b').style.visibility="hidden";
document.getElementById('hand_left_canvas1b').style.visibility="hidden";
},2000);
}

function trans_wire1_canvas1b()
{
document.getElementById('trans_wire1_canvas1b').style.visibility="hidden";
document.getElementById('ar3_canvas1b').style.visibility="hidden";
document.getElementById('wire1_canvas1b').style.animation="wire1_attach_canvas1b 1s forwards";	
document.getElementById('hand_left1_canvas1b').style.visibility="visible";
document.getElementById('hand_left1_canvas1b').style.animation="hand_left_attach_canvas1b 1s forwards";
setTimeout(function()
{
document.getElementById('hand_left1_canvas1b').style.visibility="hidden";
document.getElementById('trans_wire2_canvas1b').style.visibility="visible";
document.getElementById('ar4_canvas1b').style.visibility="visible";
document.getElementById('s3_5').style.visibility="hidden";
document.getElementById('s3_6').style.visibility="visible";
},1000);
}

function trans_wire2_canvas1b()

{
document.getElementById('trans_wire2_canvas1b').style.visibility="hidden";
document.getElementById('ar4_canvas1b').style.visibility="hidden";
document.getElementById('wire2_canvas1b').style.animation="wire2_attach_canvas1b 1s forwards";
document.getElementById('hand_right1_canvas1b').style.visibility="visible";	
document.getElementById('hand_right1_canvas1b').style.animation="hand_right1_attach_canvas1b 1s forwards";

setTimeout(function()
{
document.getElementById('hand_right1_canvas1b').style.visibility="hidden";
document.getElementById('trans_wire1_click_canvas1b').style.visibility="visible";
document.getElementById('ar5_canvas1b').style.visibility="visible";

document.getElementById('s3_6').style.visibility="hidden";
document.getElementById('s3_7').style.visibility="visible";
},1000);
}

function trans_wire1_click_canvas1b()
{
document.getElementById('trans_wire1_click_canvas1b').style.visibility="hidden";
document.getElementById('ar5_canvas1b').style.visibility="hidden";
document.getElementById('zoom1_canvas1b').style.visibility="visible";
document.getElementById('trans_soldrod_canvas1b').style.visibility="visible";
document.getElementById('ar6_canvas1b').style.visibility="visible";
document.getElementById('s3_7').style.visibility="hidden";
document.getElementById('s3_8').style.visibility="visible";
}


function trans_soldrod_canvas1b()
{
document.getElementById('trans_soldrod_canvas1b').style.visibility="hidden";
document.getElementById('ar6_canvas1b').style.visibility="hidden";
document.getElementById('rod_wire_canvas1b').style.visibility="hidden";
document.getElementById('soldrod_canvas1b').style.visibility="hidden";
document.getElementById('handrod_wire_canvas1b').style.visibility="visible";
document.getElementById('handrod_wire_canvas1b').style.animation="handrod_wire1_zoom1_canvas1b 2s forwards";
document.getElementById('silverhand_canvas1b').style.visibility="visible";
document.getElementById('silverhand_canvas1b').style.animation="silverhand_wire1_zoom1_canvas1b 2.2s forwards";
setTimeout(function()
{
// $("#smoke1").fadeOut(1000);
$("#smoke3").fadeIn(1000);
},1200);
setTimeout(function()
{
document.getElementById('soldering_image1_canvas1b').style.visibility="visible";
$("#smoke3").fadeOut(1000);
document.getElementById('handrod_wire_canvas1b').style.animation="handrod_wire2_zoom1_canvas1b 2s forwards";
document.getElementById('silverhand_canvas1b').style.animation="silverhand_wire2_zoom1_canvas1b 2s forwards";
setTimeout(function()
{
$("#smoke4").fadeIn(1000);
},1200);

setTimeout(function()
{
	$("#smoke4").fadeOut(1000);
document.getElementById('soldering_image2_canvas1b').style.visibility="visible";
document.getElementById('handrod_wire_canvas1b').style.animation="handrod_wire2_back_canvas1b 2s forwards";
document.getElementById('silverhand_canvas1b').style.animation="silverhand_wire2_back_canvas1b 2s forwards";
setTimeout(function()
{
document.getElementById('handrod_wire_canvas1b').style.visibility="hidden";
document.getElementById('silverhand_canvas1b').style.visibility="hidden";
document.getElementById('rod_wire_canvas1b').style.visibility="visible";	
document.getElementById('soldrod_canvas1b').style.visibility="visible";	
document.getElementById('zoom1_canvas1b').style.visibility="hidden";
document.getElementById('soldering_image1_canvas1b').style.visibility="hidden";
document.getElementById('soldering_image2_canvas1b').style.visibility="hidden";
document.getElementById('soldering_image3_canvas1b').style.visibility="visible";
document.getElementById('soldering_image4_canvas1b').style.visibility="visible";
document.getElementById('s3_8').style.visibility="hidden";
document.getElementById('s3_9').style.visibility="visible";
document.getElementById('arrow1b').style.visibility="visible";
document.getElementById('nextButton1b').style.visibility="visible";
},2000);
},3500);
},4000);
}


function add_lcr()
{
document.getElementById('arw1_canvas1c').style.visibility="hidden";
document.getElementById('add_lcr').style.visibility="hidden";
document.getElementById('lcr_canvas1c').style.visibility="visible";
document.getElementById('lcr_canvas1c').style.animation="lcr 2s forwards";

document.getElementById('off_screen').style.visibility="visible";
document.getElementById('off_screen').style.animation="off_screen 2s forwards";

document.getElementById('black_wire_lcr1').style.visibility="visible";
document.getElementById('black_wire_lcr1').style.animation="black_wire_lcr1 2s forwards";

document.getElementById('blackclipclose1').style.visibility="visible";
document.getElementById('blackclipclose1').style.animation="blackclipclose1 2s forwards";

document.getElementById('blackclipclose2').style.visibility="visible";
document.getElementById('blackclipclose2').style.animation="blackclipclose2 2s forwards";



// document.getElementById('blackclipclose3').style.visibility="visible";
// document.getElementById('blackclipclose3').style.animation="blackclipclose3 2s forwards";

// document.getElementById('blackclipclose4').style.visibility="visible";
// document.getElementById('blackclipclose4').style.animation="blackclipclose4 2s forwards";

setTimeout(function()
{
// document.getElementById('trans_fullimage').style.visibility="visible";
// document.getElementById('ar1_canvas1c').style.visibility="visible";
document.getElementById('s4_2').style.visibility="hidden";
document.getElementById('s4_3').style.visibility="visible";
document.getElementById('black_color1').style.visibility="visible";
document.getElementById('black_color2').style.visibility="visible";
document.getElementById('trans_pin1').style.visibility="visible";	
document.getElementById('ar2_canvas1c').style.visibility="visible";
},2000);
}

function full_image()
{
document.getElementById('trans_fullimage').style.visibility="hidden";
document.getElementById('ar1_canvas1c').style.visibility="hidden";
document.getElementById('full_image').style.animation="full_image 2s forwards";
document.getElementById('hand').style.animation="hand 2s forwards";
setTimeout(function()
{
document.getElementById('handfinger_left').style.visibility="visible";
document.getElementById('handfinger_left').style.animation="handfinger_left 3s forwards";

setTimeout(function()
{
document.getElementById('handfinger_left').style.visibility="hidden";
document.getElementById('hand').style.visibility="hidden";

// 
// document.getElementById('black_color3').style.visibility="visible";
// document.getElementById('black_color4').style.visibility="visible";



document.getElementById('s4_1').style.visibility="hidden";
document.getElementById('s4_2').style.visibility="visible";
document.getElementById('arw1_canvas1c').style.visibility="visible";	
document.getElementById('add_lcr').style.visibility="visible";
},3000);
},2000);
}
function pin1()
{
document.getElementById('trans_pin1').style.visibility="hidden";
document.getElementById('ar2_canvas1c').style.visibility="hidden";
document.getElementById('blackclipclose1').style.animation="blackclipclose1_move 2s forwards";
document.getElementById('black_color1').style.animation="black_color1 2s forwards";	

setTimeout(function()
{
document.getElementById('blackclipclose1').style.visibility="hidden";
document.getElementById('blackclipopen1').style.visibility="visible";	

document.getElementById('blackclipopen1').style.animation="blackclipopen1_move 1s forwards";
document.getElementById('black_color1').style.animation="black_color1_again 1s forwards";	

setTimeout(function()
{
document.getElementById('blackclipopen1').style.visibility="hidden";
document.getElementById('blackclipclose11').style.visibility="visible";	
document.getElementById('trans_pin2').style.visibility="visible";
document.getElementById('ar3_canvas1c').style.visibility="visible";	

},1000);
},2000);
}

function pin2()
{
document.getElementById('trans_pin2').style.visibility="hidden";
document.getElementById('ar3_canvas1c').style.visibility="hidden";
document.getElementById('blackclipclose2').style.animation="blackclipclose2_move 2s forwards";
document.getElementById('black_color2').style.animation="black_color2 2s forwards";	

setTimeout(function()
{
document.getElementById('blackclipclose2').style.visibility="hidden";
document.getElementById('blackclipopen2').style.visibility="visible";	

document.getElementById('blackclipopen2').style.animation="blackclipopen2_move 1s forwards";	
setTimeout(function()
{
document.getElementById('blackclipopen2').style.visibility="hidden";
document.getElementById('blackclipclose21').style.visibility="visible";	
// document.getElementById('trans_pin3').style.visibility="visible";
// document.getElementById('ar4_canvas1c').style.visibility="visible";

document.getElementById('s4_3').style.visibility="hidden";
document.getElementById('s4_4').style.visibility="visible";

document.getElementById('trans_lcron').style.visibility="visible";
document.getElementById('ar6_canvas1c').style.visibility="visible";	

},1000);
},2000);
}


function pin3()
{
document.getElementById('trans_pin3').style.visibility="hidden";
document.getElementById('ar4_canvas1c').style.visibility="hidden";
document.getElementById('blackclipclose3').style.animation="blackclipclose3_move 2s forwards";
document.getElementById('black_color3').style.animation="black_color3 2s forwards";	

setTimeout(function()
{
document.getElementById('blackclipclose3').style.visibility="hidden";
document.getElementById('blackclipopen3').style.visibility="visible";	

document.getElementById('blackclipopen3').style.animation="blackclipopen3_move 1s forwards";	
setTimeout(function()
{
document.getElementById('blackclipopen3').style.visibility="hidden";
document.getElementById('blackclipclose31').style.visibility="visible";	
document.getElementById('trans_pin4').style.visibility="visible";
document.getElementById('ar5_canvas1c').style.visibility="visible";	
	
},1000);
},2000);
}

function pin4()
{
document.getElementById('trans_pin4').style.visibility="hidden";
document.getElementById('ar5_canvas1c').style.visibility="hidden";
document.getElementById('blackclipclose4').style.animation="blackclipclose4_move 2s forwards";
document.getElementById('black_color4').style.animation="black_color4 2s forwards";	

setTimeout(function()
{
document.getElementById('blackclipclose4').style.visibility="hidden";
document.getElementById('blackclipopen4').style.visibility="visible";	

document.getElementById('blackclipopen4').style.animation="blackclipopen4_move 1s forwards";	
setTimeout(function()
{
document.getElementById('blackclipopen4').style.visibility="hidden";
document.getElementById('blackclipclose41').style.visibility="visible";	

document.getElementById('s4_3').style.visibility="hidden";
document.getElementById('s4_4').style.visibility="visible";
	
},1000);
},2000);
}


function lcr_on()
{
document.getElementById('trans_lcron').style.visibility="hidden";
document.getElementById('off_screen').style.visibility="hidden";
document.getElementById('ar6_canvas1c').style.visibility="hidden";


document.getElementById('arrow1c').style.visibility="visible";
document.getElementById('nextButton1c').style.visibility="visible";		

document.getElementById('s4_4').style.visibility="hidden";
document.getElementById('s4_5').style.visibility="visible";

}



function submit()
{

var from= document.getElementById('val1').value;
var to= document.getElementById('val2').value;
var interval= document.getElementById('val3').value;
// console.log(from);
// console.log(to);
// console.log(interval);

if(from == "frm1" && to == "frm2" && interval == "frm3")
{

// document.getElementById('submit').style.visibility="hidden";
document.getElementById("select_abc").innerHTML="";
document.getElementById('transwhite').style.visibility="visible";
document.getElementById('graph1').style.visibility="visible";
document.getElementById('graph2').style.visibility="visible";
	

document.getElementById("graph_up1").style.animation="graph_up1 12s forwards";
document.getElementById("graph_up2").style.animation="graph_up1 15s forwards";


$("#note1").delay(400).slideDown("slow");
 setTimeout(function()
{
  document.getElementById("n_a_1").style.visibility="visible";
  document.getElementById('ok').style.visibility="visible";
  
  document.getElementById('s5_1').style.visibility="hidden";
  document.getElementById('s5_2').style.visibility="visible";

},500);

}

else
{
 document.getElementById("select_abc").style.visibility="visible";

}




}

function ok()
{
document.getElementById('ok').style.visibility="hidden";
document.getElementById('ok_dwld').style.visibility="visible";
// document.getElementById('n_freq').style.visibility="visible";
  document.getElementById('s5_2').style.visibility="hidden";
  document.getElementById('s5_3').style.visibility="visible";
document.getElementById('arrow2').style.visibility="visible";
document.getElementById('nextButton2').style.visibility="hidden";

}






function notepad4()
{
document.getElementById('arw2').style.visibility="hidden";
document.getElementById('add_notepad4').style.visibility="hidden";
document.getElementById('notepad4').style.visibility="visible";
document.getElementById('notepad4').style.animation="aluminium_canvas1 1s forwards";}