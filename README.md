# BMW M3 G80 Landing Page

A modern, responsive landing page showcasing the BMW M3 G80 with engine specifications, design highlights, and a photo gallery. Built with pure HTML, CSS, and vanilla JavaScript.

![BMW M3 G80](./images/hero-image.webp)

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices with optimized breakpoints at 480px, 768px, and 1280px
- **Engine Options**: Detailed specifications for three M3 variants (Base, Competition, and CS)
- **Design Section**: Showcasing the aerodynamic excellence and engineering of the M3 G80
- **Photo Gallery**: Interactive grid layout with 7 high-quality images
- **Contact Form**: Footer includes a contact form for inquiries (Name, Email, Message)
- **Dynamic Navbar**: Changes color theme when overlapping the design section
- **Smooth Scrolling**: Seamless navigation between sections

## 🌐 Demo

Open `index.html` in your browser to view the site locally.

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/tlbdrgs/bmw-m3-g80.git
```

2. Navigate to the project directory:

```bash
cd bmw-m3-g80
```

3. Open `index.html` in your preferred browser or use a local server:

## 📁 Structure

```
bmw-m3-g80/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheet with responsive design
├── js/
│   └── script.js       # JavaScript for interactive features
├── images/
│   ├── icon/           # Favicon and logo images
│   ├── hero-image.webp
│   ├── design-image-2.jpg
│   └── gallery-image-*.{webp,jpg,jpeg}
└── README.md
```

## 🛠️ Technologies

- **HTML5**: Semantic markup
- **CSS3**:
  - Flexbox & CSS Grid layouts
  - CSS Custom Properties (variables)
  - Media queries for responsive design
  - Smooth transitions and animations
- **JavaScript**: Vanilla JS for navbar theme switching
- **Font Awesome**: Icon library (v7.0.1)
- **Google Fonts**: Nata Sans & Open Sans

## 📱 Responsive Breakpoints

The site adapts to different screen sizes with the following breakpoints:

- **Desktop (1280px+)**: Full-width layout with 8rem margins
- **Tablet (768px - 1280px)**: Stacked engine cards, adjusted margins (4.5rem)
- **Mobile (480px - 768px)**: Single-column layout, 3-column gallery becomes 2-column
- **Small Mobile (< 480px)**: Optimized for smallest screens with 2rem margins

### Responsive Features:

- Gallery grid repositions 7th image to reduce rows on mobile
- Engine cards stack vertically on smaller screens
- Design section switches to single column on tablets

## 🎨 Customization

### Color Scheme

The site uses CSS custom properties for easy theme customization:

```css
:root {
  --red-primary-color: #e7222e;
  --blue-primary-color: #16588e;
  --cyan-primary-color: #81c4ff;
}
```

3. Adjust CSS grid rules in `style.css` if needed

### Contact Form

The footer includes a contact form with the following fields:

- **Name**: Text input
- **Email**: Email input
- **Message**: Textarea

Form submission can be integrated with your preferred backend service or email provider.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Dragos**

- GitHub: [@tlbdrgs](https://github.com/tlbdrgs)

## 🙏 Acknowledgments

- BMW M Division for the inspiration
- Font Awesome for the icon library
- Google Fonts for typography

---
