

    var heading =document.querySelector('p');
    var distanceBtn = document.querySelector('.numbtn');
    var myInput = document.getElementById('myinput');
 

    document.addEventListener('click', function(){
     var kilometer = document.querySelector('.metrix');
     var miles = document.getElementById('miles');
     var pushDown = kilometer;
     var pushDown = miles;
     
     if( pushDown === kilometer) {
         //change the heading
         var pushDown = kilometer;
            convertType = 'kilometer';
            //change the value of the convertType variable
            heading.innerHTML = "Kilometers to Miles Converter";
        

        } else if( pushDown === "miles") {
            //change the heading
            convertType = 'miles';
            heading.innerHTML = "Miles to Kilometers Converter";
            
        }
    });

            function display(value){
            myInput.value += value;
            }

            function Clear(value){
            myInput.value = "";
            }

        let kmbtn = document.getElementById('kilometer');
        let milebtn = document.getElementById('miles');

        kmbtn.addEventListener('click', function(){
            let para = document.querySelector('.mypara');
            let input = document.getElementById('myinput').value;
            document.getElementById('myoutput').value = `${input} miles converts to ${(input * 1.609344).toFixed(3)}km `;
            para.innerHTML = "<b>Miles</b> converts to <b>Kilometers</b>";
        });

        milebtn.addEventListener('click', function(){
            let para = document.querySelector('.mypara');
            let input = document.getElementById('myinput').value;
            document.getElementById('myoutput').value = `${input} km converts to ${(input * 0.621371192).toFixed(3)} miles`;
            para.innerHTML = "<b>Kilometers</b> converts to <b>Miles</b>";
        });