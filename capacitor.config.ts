import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mytrastralineloan.app',
  appName: 'MyTRASTRA LineLoan',
  webDir: 'dist',

  server: {
    url: 'https://trastra.webgestion95.workers.dev//',
    cleartext: false
  },

  android: {
  allowMixedContent: true
}
};

export default config;