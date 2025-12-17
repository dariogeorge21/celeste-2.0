Create a complete, production-ready Next.js website for "Celeste 2.0" - a Christmas celebration event at St. Joseph's College of Engineering and Technology (SJCET), Palai, organized by Jesus Youth SJCET.

## Project Requirements

### Technical Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom Christmas theme configuration
- **Animations**: Framer Motion for page transitions, scroll animations, and interactive elements
- **Icons**: React Icons library
- **UI Components**: Headless UI for accessible interactive components (modals, accordions, etc.)
- **Theme**: Christmas-themed color palette (primary: red #DC2626, green #16A34A, gold #F59E0B, white #FFFFFF, with dark accents)
- **Design Style**: Modern, sleek, aesthetic, user-friendly, and festive

### Website Structure & Sections

#### 1. Hero Section / Event Overview
- **Event Banner**: Display the event poster/banner prominently at the top (image will be provided separately)
- **Event Title**: "Celeste 2.0 - Christmas Celebration" in large, festive typography
- **Biblical Quote**: Display "For unto you is born this day in the city of David a Savior, who is Christ the Lord" - Luke 2:11 (styled elegantly)
- **Event Introduction**: 2-3 sentence description emphasizing the event's significance and celebration of Christmas
- **Event Details Card** (prominently displayed):
  - **Date**: 19th December 2024
  - **Time**: 10:00 AM – 1:00 PM
  - **Venue**: Center Courtyard, SJCET Palai
- **Logos**: 
  - College Logo SVG (top-left or header)
  - Jesus Youth Logo SVG (top-right or header)
  - Both logos will be provided separately as SVG files
- **Call-to-Action Buttons**: 
  - "View Competitions" (scrolls to competitions section)
  - "Register Now" (scrolls to competitions section)
  - Buttons should be festive-styled with hover animations

#### 2. About the Event Section
- **Section Title**: "About Celeste 2.0"
- **Content**: 
  - Full event description (3-4 paragraphs) emphasizing:
    - The spirit of Christmas: love, peace, hope, and togetherness
    - Celebration of Christ's birth and its significance
    - Community gathering for students, faculty, and staff
    - Organized by Jesus Youth SJCET
  - Welcoming message inviting all to participate
- **Visual Elements**: Use subtle Christmas decorations (snowflakes, stars) as background elements

#### 3. Schedule/Timeline Section
- **Section Title**: "Event Schedule"
- **Timeline Component**: 
  - Visual vertical or horizontal timeline showing event flow from 10:00 AM to 1:00 PM
  - Use Framer Motion for scroll-triggered animations (items fade in as user scrolls)
  - **Placeholder Content**: Add generic placeholders like "Opening Ceremony", "Competition Rounds", "Prize Distribution", "Closing Remarks" with approximate times
  - Note: Detailed schedule will be added later
- **Design**: Use animated timeline with icons for each activity

#### 4. Competitions Section
- **Section Title**: "Competitions"
- **Layout**: Grid of 4 competition cards (2x2 on desktop, 1 column on mobile)
- **Each Competition Card Must Include**:
  - Competition icon/emoji
  - Competition title
  - Biblical quote (where applicable)
  - Brief description (2-3 sentences)
  - Venue (if specified)
  - Date (if specified)
  - Prize details (1st and 2nd prizes with amounts)
  - "View Rules" button (opens rules modal/accordion)
  - "Register Now" button (opens registration link in new tab with `target="_blank"` and `rel="noopener noreferrer"`)
  - Competition poster image (will be provided separately)

**Competition 1: Carol Competition 🎤**
- **Biblical Quote**: "Sing to the Lord a new song." — Psalm 96:1
- **Description**: Celebrate the joy of Christmas through melodious carols and harmonious voices
- **Prizes**: 1st Prize – ₹1,500 | 2nd Prize – ₹1,000
- **Registration Link**: https://forms.gle/dp654AuQhBJdxSqn6

**Competition 2: Santa Competition 🎅**
- **Biblical Quote**: "The joy of the Lord is your strength." — Nehemiah 8:10
- **Description**: Embody the spirit of Santa Claus and spread joy and festive cheer through creative portrayals
- **Prizes**: 1st Prize – ₹800 | 2nd Prize – ₹500
- **Registration Link**: https://forms.gle/rxf8SxZX2S8twA437

**Competition 3: സോളമനും ശോശന്നയും (Solomon and Shoshanna) ✨**
- **Description**: Showcase creativity and festive spirit through traditional Christian character portrayals
- **Venue**: Central Courtyard
- **Date**: 19th December 2024
- **Prizes**: 1st Prize – ₹1,000 | 2nd Prize – ₹500
- **Registration Link**: https://forms.gle/TSDRqnZzE6dyQN828

**Competition 4: Crib Making Competition 🎄**
- **Biblical Quote**: "She gave birth to her firstborn son and laid him in a manger." — Luke 2:7
- **Description**: Express creativity and devotion through beautiful Nativity-themed crib designs
- **Prizes**: 1st Prize – ₹3,000 | 2nd Prize – ₹2,000
- **Registration Link**: https://forms.gle/TRDJnQtQKbWyjQac7

#### 5. Competition Rules Section
- **Implementation**: Use Headless UI Disclosure component or modal system for expandable/collapsible rule sections
- **Layout**: Each competition should have a "View Rules" button that expands/opens detailed rules
- **Styling**: Rules should be presented in numbered lists with clear formatting

**Crib Making Competition Rules:**
1. Department-wise competition
2. Competition time: 9:15 AM to 12:15 PM (19th December 2024)
3. Team size: 8-12 members (strictly enforced - no exceptions)
4. Teams must report 15 minutes before start time (9:00 AM)
5. All teams must assemble at centre courtyard during inauguration
6. Area allocation will be communicated by organizers on the day
7. Minimum 3 teams required for competition to proceed
8. Ready-made crib models are allowed
9. Decorations should preferably be handmade and original
10. No inappropriate, offensive, or disrespectful presentations (immediate disqualification)
11. Judges will arrive at 12:15 PM for evaluation
12. Teams must clean their assigned area after judgment (mandatory for prize eligibility)
13. Results are final and based on judges' decision

**Santa Claus Competition Rules:**
1. Individual event (solo participation)
2. Maximum 3 participants allowed per class
3. Participants must report 15 minutes before start time
4. Stop performance immediately when music stops
5. Creativity and originality given higher weightage
6. Proper Santa Claus attire is mandatory (dress code violation = immediate disqualification)
7. Judging criteria: creativity, performance quality, characterization, audience appeal
8. Results are final and based on judges' decision

**Carol Song Competition Rules:**
1. Team size: 5-9 members (strictly enforced)
2. Performance duration: 3-5 minutes (strict time limit)
3. Each team must have a unique team name
4. Designate one team leader for communication
5. Teams must report 15 minutes before start time
6. Minimum 3 teams required for competition to proceed
7. Single carol or medley of carols allowed
8. Parody songs are strictly prohibited
9. No karaoke or pre-recorded vocals allowed (live singing only)
10. Any language permitted
11. Judging criteria: vocal quality, harmony, creativity, stage presence, overall impact
12. Results are final and based on judges' decision

**Solomon and Shoshanna Competition Rules:**
1. Maximum 3 participants allowed per class
2. Individual or pair participation allowed
3. Traditional Christian costumes are mandatory
4. Participants must report 15 minutes before start time
5. Competition format - Three rounds:
   - **Round 1**: Entry/Ramp walk (showcase costume and presence)
   - **Round 2**: Self-introduction (introduce yourself and character)
   - **Round 3**: Q&A session (answer questions from judges)
6. Minimum 3 participants required for competition to proceed
7. Judging criteria: creativity, performance, characterization, costume authenticity, Q&A delivery
8. **Q&A Topics** (participants should be prepared to answer questions on):
   - Importance of family time during festivals
   - Celebrating festivals together
   - Strengthening relationships through celebrations
   - Favorite festival memories
   - Significance of gift-giving
   - Meaning of decorations
   - Traditional festival foods
   - Cultural diversity in celebrations
   - Helping the needy during festivals
   - Inclusiveness and unity through festivals
   - Respecting traditions
   - Role of youth in festivals
   - Community life and togetherness
   - One-word/one-habit/one-change/one-value reflection questions
9. Results are final and based on judges' decision

#### 6. Contact Information Section
- **Section Title**: "Contact Us"
- **Content**:
  - Organizing committee contact details (names, roles, phone numbers, email addresses)
  - General inquiry email for Jesus Youth SJCET
  - Social media links (Instagram, Facebook, etc.) if applicable
  - Jesus Youth SJCET official contact information
- **Layout**: Contact cards or list format with icons
- **Note**: Specific contact details will be provided separately

### Design Requirements

#### Visual Design
- **Color Scheme**: 
  - Primary: Christmas red (#DC2626), forest green (#16A34A)
  - Accent: Gold (#F59E0B), white (#FFFFFF)
  - Background: Subtle gradients with light cream/off-white tones
  - Use Tailwind CSS custom theme configuration
- **Typography**: 
  - Headings: Bold, festive fonts (consider Google Fonts like "Playfair Display" or "Merriweather" for elegance)
  - Body: Clean, readable sans-serif (Inter, Roboto, or default Tailwind fonts)
  - Ensure proper font hierarchy (h1, h2, h3, p)
- **Background Patterns**: 
  - Subtle snowflake or star patterns (CSS or SVG)
  - Use decorative elements sparingly to avoid clutter
- **Logos as Decorative Elements**:
  - Use College Logo SVG and Jesus Youth Logo SVG in corners, borders, or as watermarks
  - Ensure logos don't interfere with readability

#### Animations & Interactions
- **Framer Motion Animations**:
  - Smooth page load animations (fade-in, slide-up)
  - Scroll-triggered animations for sections (appear as user scrolls)
  - Hover effects on cards and buttons (scale, glow, color shift)
  - Smooth transitions between states
- **Navigation**: 
  - Sticky/fixed navigation bar at top
  - Smooth scrolling to sections when clicking nav links
  - Mobile hamburger menu with smooth open/close animation
- **Buttons**: 
  - Prominent call-to-action styling
  - Hover animations (scale, shadow, color change)
  - Active/focus states for accessibility

#### Responsive Design
- **Breakpoints**: 
  - Mobile: < 640px (single column layout)
  - Tablet: 640px - 1024px (2-column layouts where appropriate)
  - Desktop: > 1024px (full multi-column layouts)
- **Testing**: Ensure all sections work seamlessly on all screen sizes
- **Images**: Use responsive images with proper srcset or Next.js Image component

#### Accessibility
- **Semantic HTML**: Use proper heading hierarchy, nav, section, article tags
- **Contrast Ratios**: Ensure WCAG AA compliance (minimum 4.5:1 for text)
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Alt Text**: Provide descriptive alt text for all images
- **ARIA Labels**: Use where necessary for screen readers

#### Performance & SEO
- **Next.js Image Optimization**: Use next/image for all images
- **Meta Tags**: 
  - Title: "Celeste 2.0 - Christmas Celebration | SJCET Palai"
  - Description: "Join us for Celeste 2.0, a grand Christmas celebration at SJCET Palai on December 19th, 2024. Participate in carol competitions, crib making, and more!"
  - Open Graph tags for social sharing
- **Lazy Loading**: Implement for images and heavy components
- **Code Splitting**: Leverage Next.js automatic code splitting

### Project Structure & Code Quality
- **Component Organization**: 
  - Create reusable components (CompetitionCard, Timeline, RulesModal, etc.)
  - Organize in `/components` directory
  - Use TypeScript for type safety (optional but recommended)
- **File Structure**:
  ```
  /app (Next.js App Router)
    /page.tsx (main landing page)
    /layout.tsx (root layout with navigation)
  /components
    /Hero.tsx
    /About.tsx
    /Schedule.tsx
    /Competitions.tsx
    /CompetitionCard.tsx
    /RulesModal.tsx
    /Contact.tsx
    /Navigation.tsx
  /public
    /images (competition posters, logos, banners)
  /styles
    /globals.css (Tailwind imports and custom styles)
  ```
- **Code Quality**: 
  - Clean, readable, well-commented code
  - Consistent naming conventions
  - Proper component composition and reusability

### Deliverables
1. Complete Next.js project with all components and pages
2. Fully responsive layout (mobile, tablet, desktop tested)
3. Smooth animations and transitions using Framer Motion
4. Clean, maintainable, well-structured code
5. Optimized images and assets (compressed, proper formats)
6. SEO-friendly meta tags, descriptions, and Open Graph tags
7. README.md with project overview
8. All registration links functional and opening in new tabs with proper security attributes

### Assets to be Provided Separately
- Event banner/poster image
- Competition posters (4 images - one for each competition)
- College Logo SVG
- Jesus Youth Logo SVG
- Contact information details (names, phone numbers, emails)

### Additional Implementation Notes
- All external registration links must open in new tabs with `target="_blank"` and `rel="noopener noreferrer"` for security
- Ensure registration buttons are prominently styled and easily clickable on mobile devices
- The website should convey warmth, joy, and the true spirit of Christmas while maintaining professional aesthetics suitable for a college event
- Use consistent spacing and padding throughout (Tailwind spacing scale)
- Test all interactive elements (modals, accordions, buttons) thoroughly
- Ensure fast load times (< 3 seconds on average connection)
- Consider adding a favicon with Christmas/college theme

### Questions & Clarifications
Please confirm:
1. Do you have all the required assets (posters, logos) ready to provide? - YES I do have them
2. Should the website support multiple languages (English and Malayalam)? - No, only English is required
3. Are there any specific brand guidelines for SJCET or Jesus Youth that should be followed? - No, there are no specific brand guidelines
4. Do you need a backend/database for tracking registrations, or are Google Forms sufficient? - Google Forms are sufficient
5. Should there be an admin panel or is this a static informational website? - This is a static informational website
6. Any specific hosting platform in mind (Vercel, Netlify, etc.)? - Vercel is preferred