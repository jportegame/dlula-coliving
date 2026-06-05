import { useLocation } from 'react-router-dom';
import SEOHead from './components/common/SEOHead';

/**
 * Example: Using SEOHead component in individual pages
 * 
 * If you want to override the default SEO settings for a specific page,
 * you can use the SEOHead component with custom props.
 */

// Example 1: Main Page with custom description
export const MainPageExample = () => {
  // useLocation can be used to track which page is currently being viewed
  const _location = useLocation();
  
  return (
    <>
      <SEOHead
        title="D'Lula Coliving Medellin | Your Perfect Boutique Home"
        description="Discover luxury boutique coliving in Medellin. Private rooms, community spaces, and vibrant connections for digital nomads and remote workers."
        keywords="coliving medellin, luxury rooms, digital nomads, accommodation"
        canonicalUrl="https://dlula.com/"
      />
      {/* Rest of page content */}
    </>
  );
};

// Example 2: Rooms Page with specific description
export const OurRoomPageExample = () => {
  return (
    <>
      <SEOHead
        title="Luxury Rooms at D'Lula Coliving | Medellin Accommodation"
        description="Browse our beautifully designed luxury rooms at D'Lula. Each room features private bathroom, work desk, high-speed internet, and more. Book your perfect stay."
        keywords="luxury rooms medellin, private accommodation, digital nomad rooms, coliving bedrooms"
        canonicalUrl="https://dlula.com/our-rooms"
      />
      {/* Rest of page content */}
    </>
  );
};

// Example 3: About Page
export const AboutPageExample = () => {
  return (
    <>
      <SEOHead
        title="About D'Lula | Luxury Coliving Community in Medellin"
        description="Learn about D'Lula Coliving. A boutique community focused on connection, comfort, and creating unforgettable experiences for digital nomads in Medellin."
        keywords="about coliving, community living, d'lula medellin, boutique accommodation"
        canonicalUrl="https://dlula.com/about"
      />
      {/* Rest of page content */}
    </>
  );
};

// Example 4: Dynamic Room Details Page
export const RoomDetailsPageExample = () => {
  const roomTitle = "Luxury Bedroom with Private Bathroom";
  
  return (
    <>
      <SEOHead
        title={`${roomTitle} | Book at D'Lula Coliving`}
        description={`Experience comfort and luxury in our ${roomTitle}. Features: private bathroom, work desk, high-speed internet, AC, and more. Book now at D'Lula Medellin.`}
        keywords={`${roomTitle}, private room medellin, luxury accommodation, coliving medellin`}
        ogImage="/our-rooms/room-1/room1-main.jpg"
        canonicalUrl={`https://dlula.com/rooms/room-1`}
      />
      {/* Rest of page content */}
    </>
  );
};

/**
 * SEOHead Component Props:
 * 
 * - title: Page title (appears in browser tab and search results)
 * - description: Meta description (150-160 characters recommended)
 * - keywords: Page keywords (comma-separated)
 * - ogImage: Image URL for social media sharing
 * - ogUrl: Canonical URL for the page
 * - ogType: Type of content (default: 'website', can be 'article', 'product', etc.)
 * - canonicalUrl: Canonical URL to prevent duplicate content issues
 * 
 * If not provided, it will use the default values from siteConfig.seo
 */
