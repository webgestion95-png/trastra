import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mytrastralineloan.app',
  appName: 'MyTRASTRA LineLoan',
  webDir: 'dist',

  server: {
    url: 'https://myinvest-keepup.webgestion95.workers.dev/',
    cleartext: false
  },

  android: {
  allowMixedContent: true
}
};

export default config;