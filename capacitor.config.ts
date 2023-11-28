import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Turismo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 6000,
      launchAutoHide: true,
      backgroundColor: "#0000ff",
      backgroundImage: "/src/app/img/fondo-app.png"
    }
  }
};

export default config;
