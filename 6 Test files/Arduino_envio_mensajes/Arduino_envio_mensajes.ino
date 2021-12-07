#include <Process.h>
String R1 = "20,";  // No conexión
String R2 = "0,";   // Estado Actual
String R3 = "1,";   // Estado Anterior
String R4 = "1,";   // Modo 0=> semi, 1=> Auto
String R5 = "0,";   // Confirmación
String R6 = "06,";  // Fecha (dd)
String R7 = "12,";  // Fecha (mm)
String R8 = "21,";  // Fecha (aa)
String R9 = "01,";  // Hora (hh)
String R10 = "15,"; // Hora (mm)
String R11 = "30,"; // T°
String R12 = "91,"; // Humedad
String R13 = "20,"; // Nutrientes (N)
String R14 = "20,"; // Nutrientes (P)
String R15 = "20,"; // Nutrientes (K)
String R16 = "7";   // pH
String mensaje0 = "RSP00011," + R1 + R2 + R3 + R4 + R5 + R6 + R7 + R8 + R9;
String mensaje = mensaje0 + R10 + R11 + R12 + R13 + R14 + R15 + R16;
//String mensaje = "RSP00011,18,0,1,1,0,0,0,0,0,0,0,0,0,0,0";


void setup() {
  Serial.begin(9600);
}

void loop() {
    //String mensaje = "RSP00011,158,0,1,1,0,0,0,0,0,0,0,0,0,0,0";
    delay(3000);
    //Serial.println(mensaje); //Muestra el dato con salto de línea
    delay(10000);
}
