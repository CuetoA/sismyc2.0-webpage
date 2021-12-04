int valor = 0; // for incoming serial data


void setup() {
  Serial.begin(9600); // opens serial port, sets data rate to 9600 bps
  Serial.println('Arduino saludando al servidor, cambio');
}

void loop() {
  // send data only when you receive data:
  
  if (Serial.available() > 0) {
    // read the incoming byte:
    valor = Serial.read();
    // say what you got:
    Serial.print("Arduino ha recibido el siguiente mensaje: ");
    Serial.println((char)valor);    
    Serial.println("Cambio");    
    Serial.println();    
  }
}
