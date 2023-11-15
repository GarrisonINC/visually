 x=0;
 y=0;
 drawCircle="";
 drawRect="";
 SpeechRecognition=window.webkitSpeechRecognition;
 recognition=new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start();
}

recognition.onresult=function(event) {
    var content= event.results[0][0].transcript;
    document.getElementById("status").innerHTML="the speech has been recognised as "+content;

    if (content=="Circle") {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        drawCircle="set";
    }

    if (content=="rectangle") {
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600)
        drawRect="set";
    }
}

function setup() {
    canvas=createCanvas(900,600);

}


function draw() {
  
    if (drawCircle=="set") {
        radius=Math.floor(Math.random()*100);
        console.log("circle");
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
        drawCircle="";
    }

    if (drawRect=="set") {
        height=Math.floor(Math.random()*70);
        width=Math.floor(Math.random()*80);
        rect (x,y,width,height);
        document.getElementById("status").innerHTML="rectangle is drawn";
        drawRect="";
    }

}