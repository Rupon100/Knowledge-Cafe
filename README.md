# Knowlwdge Cafe

This project is built using ReactJS.

Key features include the use of useState for updating data and useEffect for dynamically rendering changes in the DOM. Additionally, I implemented props to pass data between components.

## Challenges faced:

   * I implemented a bookmark feature where items can be bookmarked without duplication. When a bookmark button is clicked, it appears in the bookmarks component, and duplicates are prevented.

    * However, I encountered an issue with the "Mark as Read" button. I needed to calculate the total time spent reading, which required using another useState to store the "Mark as Read" entries. I then used the reduce() method to sum the total time. This problem arose as I am still in the early stages of learning React.



### live view: https://knowledge-cafe101.netlify.app/