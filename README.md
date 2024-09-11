# Ground Zero 🎮💼

A Job Board Web Application for the Video Game Industry

![ground-zero_cover](https://github.com/thomasjvu/groundzero/assets/49382745/7caa881e-f9eb-4424-b5d7-77c5eb20d495)

## 📖 About

Ground Zero is a specialized job board platform designed for the video game industry. It connects talented professionals with exciting opportunities in game development, design, and related fields.

### Key Features:
- Dual user roles: Job applicants and companies
- Company job posting functionality
- User application system
- Skills certification for applicants
- Enhanced writing experience for job descriptions and applications
- Automated job scraping from external sources

## 🛠 Technologies Used

- **Frontend**: React with TypeScript
- **Backend**: Supabase (PostgreSQL)
- **Rich Text Editor**: React Quill
- **Styling**: Tailwind CSS + Daisy UI
- **Authentication**: Supabase Auth

## 🤖 Automated Job Scraping

To ensure a wide variety of job listings, Ground Zero utilizes an automated job scraping system. This system is built with Puppeteer and is maintained in a separate repository:

[Entry Level Jobs Scraper](https://github.com/thomasjvu/entry-level-jobs-scraper)

The scraper periodically fetches entry-level job listings from various sources in the gaming industry, ensuring that our users always have access to the latest opportunities.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/groundzero.git
   ```

2. Navigate to the project directory:
   ```
   cd groundzero
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. Start the development server:
   ```
   npm start
   ```

## 📚 Usage

- **For Job Seekers**:
  - Create an account
  - Build your profile
  - Take skills certifications
  - Browse and apply for jobs

- **For Companies**:
  - Create a company account
  - Post job listings
  - Review applications

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Supabase](https://supabase.io/)
- [React Quill](https://github.com/zenoamaro/react-quill)
- [Puppeteer](https://pptr.dev/) (for job scraping)
