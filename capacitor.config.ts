import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pulse.pulse.co',
  appName: 'pulse',
  webDir: 'dist/pulse',
  bundledWebRuntime: false, 
  server: {
    url: 'http://192.168.86.29:4200', 
    cleartext: true
  }
};

export default config;
