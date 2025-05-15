// Reference a global variable
export {}; // Make this file an external module
declare global {
  interface Window {
    username: string;
  }
}