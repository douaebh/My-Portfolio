# Portfolio

Welcome to my personal portfolio! This website showcases my skills, projects, and contact information. It is built with **Vue.js** and utilizes **EmailJS** for the contact form submission.

## Features

- **Responsive Design**: The portfolio is fully responsive, ensuring a great experience on all devices.
- **Contact Form**: Visitors can send messages through the contact form, which integrates with EmailJS for email delivery.
- **Downloadable CV**: Users can download my CV with a single click via a download button.
- **Customizable Data**: The portfolio data (user details, project experiences, skills) is stored in JSON files that can be updated to personalize the portfolio.

## Tech Stack

- **Frontend**:
  - Vue.js (Composition API)
  - Tailwind CSS (for styling)
- **Email Service**:
  - EmailJS (for handling form submissions)
- **Build Tools**:
  - Vite (for development and bundling)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tribak-Ayoub/my-portfolio.git
   ```

2. Navigate to the project folder:

   ```bash
   cd App
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit the `.env` file and add the following variables:
     ```env
     VITE_EMAILJS_USER_ID=your_emailjs_user_id
     VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
     ```

5. Run the development server:

   ```bash
   npm run dev
   ```

   Your portfolio should now be accessible at `http://localhost:3000`.

## Customizing Your Portfolio

You can easily update the content of the portfolio by modifying the following JSON files, which are located in the `public/` folder:

- **userData.json**: Contains personal information such as name, bio, and contact details.
- **projects.json**: Contains a list of your projects, including project names, descriptions, and links.
- **skills.json**: Contains the skills you want to showcase in your portfolio.
- **experiences.json**: Contains the your experiences.

These JSON files can be edited directly, and the changes will automatically reflect on your portfolio when the page is reloaded.

## Features in the Project

### Contact Form

- Users can submit their name, email, and a message.
- The form is handled with **Vue.js** and integrates with **EmailJS** to send the submitted data to your email.

### Download CV

- A button allows users to download your CV as a PDF. The file must be located in the `public/` directory.

### Styling

- The portfolio uses **Tailwind CSS** for styling to keep the design simple and clean, with a focus on content.

## Project Structure

```bash
├── public/
│   ├── resume.pdf          # Your CV file for download
│   ├── userInfo.json       # Your personal information
│   ├── projects.json       # Your project experiences
│   └── skills.json         # Your skills information
│   └── experiences.json    # Your experiences information
├── src/
│   ├── assets/             # Any images or assets
│   ├── components/         # Vue components
│   ├── views/              # Main views (e.g., Home, Contact)
│   └── App.vue             # Main Vue file
├── .env                    # Environment variables for EmailJS
├── index.html              # The HTML entry point
├── package.json            # Project metadata and dependencies
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

You can contact me via email at **tribak.elyedri.ayoub@gmail.com** or through the contact form on this portfolio.

---

Thank you for visiting my portfolio!
