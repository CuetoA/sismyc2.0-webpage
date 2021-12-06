#include <Process.h>
String R1 = "158,";
String R2 = "0,";
String R3 = "1,";
String R4 = "1,";
String R5 = "0,";
String R6 = "05,";
String R7 = "12,";
String R8 = "21,";
String R9 = "19,";
String R10 = "10,";
String R11 = "25,";
String R12 = "95,";
String R13 = "13,";
String R14 = "13,";
String R15 = "13,";
String R16 = "7";
String c = ",";
String mensaje0 = "RSP00011," + R1 + R2 + R3 + R4 + R5 + R6 + R7 + R8 + R9;
String mensaje = mensaje0 + R10 + R11 + R12 + R13 + R14 + R15 + R16;
//String mensaje = "RSP00011,158,0,1,1,0,0,0,0,0,0,0,0,0,0,0";


void setup() {
  Serial.begin(9600);
}

void loop() {
    //String mensaje = "RSP00011,158,0,1,1,0,0,0,0,0,0,0,0,0,0,0";
    delay(2000);
    Serial.println(mensaje); //Muestra el dato con salto de línea
}
