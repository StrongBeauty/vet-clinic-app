# DOC


## 1. Project Overview
This project aims to build a  patient management dashboard for a veterinary clinic.  
Key functionalities include: data fetching, filtering, editing, deleting, and more.

## 2. Progress Summary
- Implemented the main dashboard with patient listing and search functionality.
- Developed a reusable modal component for adding and editing patient records.
- Integrated data fetching hooks with loading and error handling states.
- Added form validation with required fields and error messages.
- Implemented debounced search input for efficient filtering.
- Added create, update, and delete patient actions with UI feedback.

## 3. Key Design 
- **Form validation:** Centralized validation logic in helper functions for clarity and reuse.
- **Modal component:** Controlled component supporting both add and edit modes with dynamic fields.
- **Debounce search:** Custom debounce hook to minimize unnecessary renders and API calls.
- **User feedback:** Loading indicators and error messages to improve UX.
- **Adaptive Interface:** Responsive layout that adjusts to different screen sizes (mobile, tablet, desktop).

## 4. Challenges and Solutions
- **React hooks dependency warnings:** Refactored complex dependencies by extracting variables outside hooks.
- **Preventing stale updates:** Used `useCallback` and memoization to avoid unnecessary re-renders and stale closures.
- **Date input customization:** Managed date restrictions with `max` attribute and handled placeholder limitations via styling.
- **Save button logic:** Combined checks for empty fields, validation errors, and unchanged data to control button state.

## 5. Future Improvements
- Improve accessibility.
- Refactor form fields to support more input types and advanced validation schemas.
- Improve design, validation, interaction, performance, the project structure. 
- Make the component more universal, extensible and reusable.  
- Custom Eslint, husky, git actions.