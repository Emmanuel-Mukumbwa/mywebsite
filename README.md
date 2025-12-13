# aRelic - Personal Portfolio & Music Platform

A comprehensive personal portfolio website with integrated music streaming and management capabilities built by Emmanuel aRelic Mukumbwa.

## Overview

aRelic is a full-featured web application that combines a personal portfolio showcase with a dedicated music platform. It showcases professional skills, projects, and services while providing a platform for music discovery, uploading, and user management.

## Features

### Portfolio Section
- **Home Page** - Personal introduction and featured projects showcase
- **About** - Detailed background and professional journey
- **Services** - Services offered and expertise areas
- **Skills** - Technical skills and competencies
- **Projects** - Portfolio of completed projects with descriptions
- **Contact** - Contact information and messaging capability
- **Sitemap** - Website navigation structure

### Music Platform (`/music`)
- **Music Discovery** - Browse featured and trending music
- **Upload Music** - Users can upload their own music tracks
- **User Authentication** - Login and registration system
- **User Profiles** - Personalized user profile pages
- **Admin Panel** - Administrative tools for managing content

## Project Structure

```
mywebsite/
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── skills.html             # Skills page
├── project.html            # Projects page
├── contact.html            # Contact page
├── sitemap.html            # Sitemap
├── *.css                   # Stylesheet files
├── script.js               # Main JavaScript functionality
├── portfolio.sql           # Database schema for projects and skills
└── music/                  # Music platform section
    ├── indexx.html         # Music home page
    ├── upload_music.html   # Music upload page
    ├── login.html          # User login
    ├── register.html       # User registration
    ├── profile.html        # User profile page
    ├── admin.html          # Admin panel
    ├── music_details.html  # Music details page
    ├── css/                # Music platform stylesheets
    │   ├── styles.css
    │   ├── index.css
    │   ├── admin.css
    │   └── profile.css
    └── js/                 # Music platform scripts
        └── scripts.js
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Font Awesome Icons (6.0.0 beta3) for UI elements
- **Database**: MySQL/MariaDB (portfolio.sql)
- **Design**: Responsive CSS Grid and Flexbox layouts

## Getting Started

### Prerequisites
- Web server (Apache, Nginx, etc.)
- MySQL/MariaDB database
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mywebsite
   ```

2. **Set up the database**
   ```bash
   mysql -u root -p < portfolio.sql
   ```

3. **Configure web server**
   - Copy project files to web server root directory
   - Ensure proper file permissions

4. **Access the application**
   - Main site: `http://localhost/mywebsite/`
   - Music platform: `http://localhost/mywebsite/music/`

## Pages and Components

### Main Portfolio Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Main landing page with introduction |
| About | `about.html` | Personal and professional background |
| Services | `services.html` | Services and expertise offered |
| Skills | `skills.html` | Technical and professional skills |
| Projects | `project.html` | Portfolio of completed projects |
| Contact | `contact.html` | Contact information and forms |
| Sitemap | `sitemap.html` | Website structure and navigation |

### Music Platform Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `music/indexx.html` | Music platform landing page |
| Upload | `music/upload_music.html` | Music upload interface |
| Login | `music/login.html` | User authentication |
| Register | `music/register.html` | New user registration |
| Profile | `music/profile.html` | User profile management |
| Admin | `music/admin.html` | Administrator controls |

## Stylesheets

- **Main Portfolio**: `main01.css`, `mystyle.css`, `mystyle1.css`, `site.css`
- **Contact Page**: `contact.css`
- **CV/Resume**: `cv.css`
- **Projects**: `project.css`
- **Services**: `service.css`
- **Skills**: `skill.css`
- **Music Platform**: `music/css/` directory

## Database Schema

The `portfolio.sql` file includes:
- **projects** table - Portfolio projects information
- **skills** table - Technical skills and expertise

## Developer

**Emmanuel aRelic Mukumbwa**
- Information and Communication Technology student at Mzuzu University
- Advanced Diploma in Computing and Information Systems (Malawi University of Business and Applied Sciences, 2021)
- Passionate about innovative technological solutions

## License

This project is the personal portfolio of Emmanuel aRelic Mukumbwa.

## Contact

For inquiries or feedback, please visit the contact page or reach out through the contact form on the website.

---

*Last updated: December 2025*
