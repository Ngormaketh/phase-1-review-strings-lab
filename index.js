// Write your code in this file!
const currentUser = "Martin Scorsesi";
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`; 
// Export variables for testing
module.exports = { currentUser, shortGreeting };