import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-prova',
  webDir: 'dist/capacitor-prova',
  bundledWebRuntime: false,
  server: {
    cleartext: true,
  },
  // va usato quando il server è http ma il client è https
  /*,
  android: {
    allowMixedContent: true
  }*/
};

export default config;


// modificato webDir, se non funziona, ritorna a 'dist'
