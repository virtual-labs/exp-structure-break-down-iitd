type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      processEscapes: true
    }
  });




function totslabload1() {
  const DL1 = document.getElementById("DL1").value;
  const LL1 = document.getElementById("LL1").value;

  // Check if input1 is 4 and input2 is 1
  if (DL1 == 3.75 && LL1 == 0.36) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() { 
      document.getElementById("wrong1a").style.visibility="hidden";
      document.getElementById("button1").style.visibility="hidden";

    }, 1);
      setTimeout(function() {
      document.getElementById("Totalload1").innerHTML = "4.11 kN/m<sup>2</sup>";

    }, 800);
    setTimeout(function() {
      document.getElementById("text4").style.visibility="visible";
      document.getElementById("Area1").style.visibility="visible";
      document.getElementById("TL1").style.visibility="visible";
      document.getElementById("button2").style.visibility="visible";
      document.getElementById("text1").style.visibility="visible";
      document.getElementById("text2").style.visibility="visible";
      document.getElementById("text3").style.visibility="visible";




    }, 1200);

    document.getElementById("Totalload1").style.display = "block"; 
    document.getElementById("text1").style.display = "block"; 
    document.getElementById("text2").style.display = "block"; 
    document.getElementById("text3").style.display = "block"; 
    document.getElementById("text4").style.display = "block"; 
    document.getElementById("Area1").style.display = "block"; 
    document.getElementById("TL1").style.display = "block"; 
    document.getElementById("button2").style.display = "block"; 
    document.getElementById("button1").style.display = "block";

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
   document.getElementById("wrong1a").innerHTML = "Wrong Input. DL of slab = (Thiskness of slab x 25) = 3.75kN/m<sup>2</sup> & DL of floor = 0.36 kN/m<sup>2</sup>";
  }, 1000);
   document.getElementById("wrong1a").style.display = "block";
  }
  }


//////////////////////////////////////////////////Fixed End Moment for span BA////////////////////////////////////////////////////

function tottrapload1() {
  const Area1 = document.getElementById("Area1").value;
  const TL1 = document.getElementById("TL1").value;

  // Check if input1 is 4 and input2 is 1
  if (Area1 == 5.25 && TL1 == 4.11) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() { 
      document.getElementById("wrong1b").style.visibility="hidden";
      document.getElementById("button2").style.visibility="hidden";

    }, 1);
    setTimeout(function() {
      document.getElementById("outputtrapload").innerHTML = "21.57 kN";
    }, 800);
    setTimeout(function() {

      document.getElementById("text5").style.visibility="visible";
      document.getElementById("text7").style.visibility="visible";
      document.getElementById("text8").style.visibility="visible";
    }, 1200);
      setTimeout(function() {

      document.getElementById("text9").style.visibility="visible";
      document.getElementById("Area2").style.visibility="visible";
      document.getElementById("TL2").style.visibility="visible";
      document.getElementById("button3").style.visibility="visible";




    }, 1600);
    
    document.getElementById("outputtrapload").style.display = "block"; 

    document.getElementById("text5").style.display = "block"; 
    document.getElementById("text7").style.display = "block"; 
    document.getElementById("text8").style.display = "block"; 
    document.getElementById("text9").style.display = "block"; 
    document.getElementById("Area2").style.display = "block"; 
    document.getElementById("TL2").style.display = "block"; 
    document.getElementById("button3").style.display = "block"; 
    document.getElementById("button2").style.display = "block";


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
   document.getElementById("wrong1b").innerHTML = "Wrong Input.Area of trapezoid (APQB) = 5.25m<sup>2</sup> & Total DL intensity = 4.11kN/m<sup>2</sup>";
  }, 1000);
   document.getElementById("wrong1b").style.display = "block";
  }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////


function tottriload2() {
  const Area2 = document.getElementById("Area2").value;
  const TL2 = document.getElementById("TL2").value;

  // Check if input1 is 4 and input2 is 1
  if (Area2 == 2.25 && TL2 == 4.11) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() { 
      document.getElementById("wrong2b").style.visibility="hidden";
      document.getElementById("button3").style.visibility="hidden";

    }, 1);
    setTimeout(function() {
      document.getElementById("outputtriload").innerHTML = "9.24 kN";
      document.getElementById("text10").style.visibility="visible";
      document.getElementById("text10b").style.visibility="visible";

    }, 800);
    setTimeout(function() {
      document.getElementById("button3b").style.visibility="visible";

      document.getElementById("Imposed1").style.visibility="visible";
      document.getElementById("Imposed2").style.visibility="visible";
      document.getElementById("Imposed3").style.visibility="visible";
      document.getElementById("Imposed4").style.visibility="visible";
      document.getElementById("text6").style.visibility="visible";




    }, 1200);
    document.getElementById("text10").style.display = "block"; 
    document.getElementById("text10b").style.display = "block"; 
    document.getElementById("button3b").style.display = "block"; 

    document.getElementById("outputtriload").style.display = "block"; 
    document.getElementById("text6").style.display = "block"; 
    document.getElementById("Imposed1").style.display = "block"; 
    document.getElementById("Imposed2").style.display = "block"; 
    document.getElementById("Imposed3").style.display = "block"; 
    document.getElementById("Imposed4").style.display = "block"; 
    document.getElementById("wrong2b").style.visibility="block";
    document.getElementById("button3").style.display = "block"; 


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
   document.getElementById("wrong2b").innerHTML = "Wrong Input. Area of triangular portion (APD) = 2.25m<sup>2</sup> & Total DL intensity = 4.11kN/m<sup>2</sup>";
  }, 1000);
   document.getElementById("wrong2b").style.display = "block";
  }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////Imposed Load////////////////////////////////////////////////////

function imposed() {
  const Imposed1 = document.getElementById("Imposed1").value;
  const Imposed2 = document.getElementById("Imposed2").value;
  const Imposed3 = document.getElementById("Imposed3").value;
  const Imposed4 = document.getElementById("Imposed4").value;

  // Check if input1 is 4 and input2 is 1
  if (Imposed1 == 15.75 && Imposed2 == 6.75 && Imposed3 == 15.75 && Imposed4 == 6.75) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() { 
      document.getElementById("wrong1c").style.visibility="hidden";
      document.getElementById("button3b").style.visibility="hidden";

    }, 1);
    setTimeout(function() {
      document.getElementById("outputimposed").innerHTML = "Correct!";
    }, 800);
    setTimeout(function() {
      document.getElementById("outputimposedtot").innerHTML = "45 kN";
      document.getElementById("text10c").style.visibility="visible";
      document.getElementById("nextButton1").style.visibility="visible";


    }, 1200);

    document.getElementById("outputtrapload").style.display = "block"; 
    document.getElementById("outputimposedtot").style.display = "block"; 
    document.getElementById("outputimposed").style.display = "block"; 
    document.getElementById("text10c").style.display = "block"; 
    document.getElementById("nextButton1").style.display = "block"; 
    document.getElementById("button3b").style.display = "block"; 



    }

    if (Imposed1 == "" && Imposed2 == "" && Imposed3 == "" && Imposed4 == "") { 
      // Slowly display the text after 2 seconds
      setTimeout(function() {
        document.getElementById("wrong1c").textContent = "Please Fill the Required Fields.";

        
      }, 1000);
      document.getElementById("wrong1c").style.display = "block";

  } else {
    // Display an error message
    setTimeout(function() {
   document.getElementById("wrong1c").innerHTML = "Wrong! Imposed load on beam <br>B<sub>1</sub>= 15.75kN, B<sub>2</sub>= 6.75kN, B<sub>3</sub>= 15.75kN, B<sub>4</sub>= 6.75kN";
  }, 1000);
   document.getElementById("wrong1c").style.display = "block";
  }
  }
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////PAGE 1 COMPLETE///////////////////////////////////////////////////////
//////////////////////////////////////////////////Fixed End Moment for span BA////////////////////////////////////////////////////

function triimposedload2() {
  const inputtriload = document.getElementById("inputtriload").value;

  // Check if input1 is 4 and input2 is 1
  if (inputtriload == 45.93 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() { 
      document.getElementById("wrong2c").style.visibility="hidden";

    }, 1);
    setTimeout(function() {
      document.getElementById("output-superimposed2a").innerHTML = "6.56 kN/m";
    }, 800);
    setTimeout(function() {
      document.getElementById("text16").style.visibility="visible";
      document.getElementById("output-superimposed2b").innerHTML ="6.56 kN/m";
      document.getElementById("nextButton2").style.visibility="visible";

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
   document.getElementById("wrong2c").innerHTML = "Wrong Input. Total load of triangle section = 45.93 kN";
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
  if (longerbeamlength1 == 5 && longerbeamwidth1 == 0.3 && longerbeamdepth1 == 0.3) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() { 
      document.getElementById("wrong3a").style.visibility="hidden";
      document.getElementById("button7").style.visibility="hidden";

    }, 1);
    setTimeout(function() {
      document.getElementById("longerbeam1selfwt").innerHTML = "11.25 kN";
    }, 800);
    setTimeout(function() {
      document.getElementById("text17").style.visibility="visible";
      document.getElementById("text18").style.visibility="visible";
      document.getElementById("text19").style.visibility="visible";
      document.getElementById("shorterbeam1length").style.visibility="visible";
      document.getElementById("shorterbeam1width").style.visibility="visible";
      document.getElementById("shorterbeam1depth").style.visibility="visible";
      document.getElementById("button8").style.visibility="visible";
    }, 1400);
      setTimeout(function() {
      document.getElementById("longerbeam2selfwt2").innerHTML ="11.25 kN";
    }, 1200);
    
    document.getElementById("longerbeam1selfwt").style.display = "block"; 

    document.getElementById("wrong3a").style.display = "block"; 
    document.getElementById("longerbeam2selfwt2").style.display = "block"; 

    document.getElementById("text17").style.display = "block"; 
    document.getElementById("text18").style.display = "block"; 
    document.getElementById("text19").style.display = "block"; 
    document.getElementById("text19").style.display = "block"; 

    document.getElementById("shorterbeam1length").style.display = "block"; 
    document.getElementById("shorterbeam1width").style.display = "block"; 
    document.getElementById("button8").style.display = "block"; 
    document.getElementById("button7").style.display = "block"; 


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
   document.getElementById("wrong3a").innerHTML = "Wrong Input. l<sub>1</sub>  = 5m, width = 0.3m & depth = 0.3m";
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
  if (shorterbeam1length == 3 && shorterbeam1width == 0.3 && shorterbeam1depth == 0.3) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() { 
      document.getElementById("wrong3b").style.visibility="hidden";
      document.getElementById("button8").style.visibility="hidden";

    }, 1);
    setTimeout(function() {
      document.getElementById("shorterbeam1selfwt").innerHTML = "6.75 kN";
    }, 800);
    setTimeout(function() {
      document.getElementById("shorterbeam2selfwt").innerHTML ="6.75 kN";
      document.getElementById("text19c").style.visibility="visible";
      document.getElementById("text19b").style.visibility="visible";

      document.getElementById("text20").style.visibility="visible";
      document.getElementById("text21").style.visibility="visible";
      document.getElementById("text22").style.visibility="visible";
      document.getElementById("text23").style.visibility="visible";
      document.getElementById("text24").style.visibility="visible";
      document.getElementById("text24b").style.visibility="visible";     
       document.getElementById("text24c").style.visibility="visible";
      document.getElementById("nextButton3").style.visibility="visible";




    }, 1200);
    
    document.getElementById("shorterbeam1selfwt").style.display = "block"; 
    document.getElementById("wrong3b").style.display = "block"; 
    document.getElementById("shorterbeam2selfwt").style.display = "block"; 
    document.getElementById("text19c").style.display = "block"; 
    document.getElementById("text19b").style.display = "block"; 

    document.getElementById("text20").style.display = "block"; 
    document.getElementById("text21").style.display = "block"; 
    document.getElementById("text22").style.display = "block"; 
    document.getElementById("text23").style.display = "block"; 
    document.getElementById("text24").style.display = "block"; 
    document.getElementById("text24b").style.display = "block";  
       document.getElementById("text24c").style.display = "block"; 
    document.getElementById("nextButton3").style.display = "block"; 
    document.getElementById("button8").style.display = "block"; 


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
   document.getElementById("wrong3b").innerHTML = "Wrong Input. l<sub>2</sub>  = 3m, width = 0.3m & depth = 0.3m";
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
      document.getElementById("wrong4a").style.visibility="hidden";
      document.getElementById("submit2").style.visibility="hidden";

    }, 1);
    setTimeout(function() {
      document.getElementById("horiAcclertnCoeff").innerHTML = ((((zonefactor) / 100) / 2) * ((importancefactor) / (responcefactor)) * (parseFloat(SAGvalue))).toFixed(4);
      document.getElementById("text25").style.visibility="visible";
      document.getElementById("text27").style.visibility="visible";
      document.getElementById("finalloadW").style.visibility="visible";
      document.getElementById("horiacclerationcoeff").style.visibility="visible";
      document.getElementById("stand_img2a").style.visibility="hidden";
      document.getElementById("stand_img1a").style.visibility="hidden";

      document.getElementById("button9").style.visibility="visible";

    }, 800);

    document.getElementById("horiAcclertnCoeff").style.display = "block"; 
    document.getElementById("wrong4a").style.display = "block"; 
    document.getElementById("text25").style.display = "block"; 
    document.getElementById("text27").style.display = "block"; 
    document.getElementById("finalloadW").style.display = "block"; 
    document.getElementById("horiacclerationcoeff").style.display = "block"; 
    document.getElementById("button9").style.display = "block"; 
    document.getElementById("submit2").style.display = "block"; 

   

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
  if (finalloadW == 164.87 ) { 
    // Slowly display the text after 2 seconds
    setTimeout(function() {
    document.getElementById("wrong4b").style.visibility="hidden";
    document.getElementById("submit").style.visibility="hidden";

  }, 1);
    setTimeout(function() {
      document.getElementById("baseshear").innerHTML = ((parseFloat(finalloadW)) * (parseFloat(horiacclerationcoeff))).toFixed(2);
      document.getElementById("wrong4b").style.visibility="hidden";
      document.getElementById("text26").style.visibility="visible";

    }, 800);

    setTimeout(function() {
      document.getElementById("stand_img1").style.visibility="visible";
      document.getElementById("text27").style.visibility="hidden";

    }, 1000);
    setTimeout(function() {
      document.getElementById("stand_img2").style.visibility="visible";

    }, 1300);

    document.getElementById("baseshear").style.display = "block"; 
    document.getElementById("stand_img1").style.display = "block"; 
    document.getElementById("stand_img2").style.display = "block"; 
    document.getElementById("wrong4b").style.visibility="block";
    document.getElementById("submit").style.visibility="block";
    document.getElementById("text26").style.display = "block"; 

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
   document.getElementById("wrong4b").innerHTML = "Wrong Input. W<sub>Total</sub>= 164.87 kN";
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
  document.getElementById("text4").style.visibility="hidden";
  document.getElementById("text5").style.visibility="hidden";
  document.getElementById("nextButton1").style.visibility="hidden";
  document.getElementById("text10").style.visibility="hidden";
  document.getElementById("text10b").style.visibility="hidden";
  document.getElementById("text10c").style.visibility="hidden";
  document.getElementById("Imposed1").style.visibility="hidden";
  document.getElementById("Imposed2").style.visibility="hidden";
  document.getElementById("Imposed3").style.visibility="hidden";
  document.getElementById("Imposed4").style.visibility="hidden";


  document.getElementById("button3").style.visibility="hidden";
  document.getElementById("button3b").style.visibility="hidden";

  document.getElementById("button2").style.visibility="hidden";
  document.getElementById("Area1").style.visibility="hidden";
  document.getElementById("TL1").style.visibility="hidden";
  document.getElementById("text7").style.visibility="hidden";
  document.getElementById("text8").style.visibility="hidden";
  document.getElementById("text9").style.visibility="hidden";
  document.getElementById("Area2").style.visibility="hidden";
  document.getElementById("TL2").style.visibility="hidden";

document.getElementById("canvas1").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="visible";
document.getElementById("text1").style.visibility="hidden";
document.getElementById("text2").style.visibility="hidden";
document.getElementById("text3").style.visibility="hidden";


document.getElementById("text6").style.visibility="hidden";


document.getElementById("inputtrapload").style.visibility="hidden";
document.getElementById("wrong1a").style.visibility="visible";
document.getElementById("wrong1b").style.visibility="visible";
document.getElementById("wrong1c").style.visibility="visible";




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
document.getElementById("wrong2b").style.visibility="visible";
document.getElementById("wrong2c").style.visibility="visible";


}

function navNext1b()
{
  document.getElementById("text19b").style.visibility="hidden";
document.getElementById("text24b").style.visibility="hidden";
document.getElementById("text24c").style.visibility="hidden";
  document.getElementById("shorterbeam1length").style.visibility="hidden";
  document.getElementById("shorterbeam1width").style.visibility="hidden";
  document.getElementById("shorterbeam1depth").style.visibility="hidden";
  document.getElementById("button8").style.visibility="hidden";
  document.getElementById("nextButton3").style.visibility="hidden";

document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("canvas1c").style.visibility="visible";
document.getElementById("text17").style.visibility="hidden";
document.getElementById("text18").style.visibility="hidden";
document.getElementById("text19").style.visibility="hidden";
document.getElementById("text19c").style.visibility="hidden";
document.getElementById("text20").style.visibility="hidden";
document.getElementById("text21").style.visibility="hidden";
document.getElementById("text22").style.visibility="hidden";
document.getElementById("text23").style.visibility="hidden";
document.getElementById("text24").style.visibility="hidden";



document.getElementById("wrong3a").style.visibility="visible";
document.getElementById("wrong3b").style.visibility="visible";
document.getElementById("nextButton3").style.visibility="hidden";



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

document.getElementById("wrong4a").style.visibility="visible";


}





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