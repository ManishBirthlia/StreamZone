# StreamZone Project:

I have developed a streaming web application designed to broadcast content simultaneously to multiple social media platforms using RTMP (Real-Time Messaging Protocol). The application leverages a robust tech stack to ensure efficient, high-quality streaming and a seamless user experience.

# Key Technologies Used:

- **Frontend:** Built with Vite, React.js, and TypeScript for a fast, modern, and type-safe development environment.
- **State Management:** Utilized Redux for managing application state effectively.
- **UI Components:** Implemented Radix UI for accessible and customizable interface components.
- **Media Processing:** Employed FFmpeg for handling video and audio processing tasks.
- **Real-Time Communication:** Used Socket.io to enable real-time, bidirectional communication between the server and clients.
- **Containerization:** Deployed the application using Docker to ensure consistency across different environments.

## Step-by-Step Guide to Setup and Run the Project
1. Fork the Repository:
   - Navigate to the GitHub repository for this project.
   - Click the "Fork" button at the top right corner of the repository page to create your own copy of the repository.

2. Clone the Project to Local Directory:
   - Open your terminal or command prompt.
   - Clone the forked repository to your local machine using the following command:
   - `git clone https://github.com/your-username/StreamZone.git`
   - Replace your-username with your GitHub username.
     
3. Navigate to the Project Directory:
   - Change your current directory to the project directory:
   - `cd StreamZone`
     
4. Install Dependencies:
   - Install all the required dependencies using npm:
   - `npm install`
     
5. Run the Project:
   - Start the development server to see the project live:
   - `npm run dev`
     
6. Access the Live Server:
   - Open your web browser and go to the URL provided by the development server (usually http://localhost:3000).
   - Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
   - Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
   - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
