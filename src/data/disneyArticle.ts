export type InlinePart =
  | { type: 'text'; text: string; weight?: 400 }
  | { type: 'strong'; text: string }
  | { type: 'italic'; text: string }
  | { type: 'link'; text: string; href: string };

export interface ImageConfig {
  className: string;
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
}

export interface ListItem {
  leadBold?: string;
  parts: InlinePart[];
  ariaLevel?: number;
  fontWeight400?: boolean;
  subItems?: InlinePart[][];
}

export interface FaqItem {
  question: string;
  parts: InlinePart[];
}

export type ArticleBlock =
  | { type: 'paragraph'; parts: InlinePart[] }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'image-paragraph'; image: ImageConfig }
  | { type: 'list'; items: ListItem[] }
  | { type: 'pullquote'; linkText: string; linkHref: string; afterText: string }
  | {
      type: 'gallery';
      id: string;
      className: string;
      items: Array<{ href: string; image: ImageConfig }>;
    }
  | { type: 'hr' }
  | { type: 'faq'; heading: string; items: FaqItem[] };

export interface RecommendedArticle {
  title: string;
  href: string;
  category: string;
  categoryHref: string;
  backgroundImage: string;
}

export const ARTICLE_META = {
  category: {
    label: 'Logo Design',
    href: '/?category=logo-design',
  },
  title: 'Disney Logo Evolution: From 1923 to Today’s Iconic Castle',
  author: {
    name: 'Joy Jin',
    href: '#author-bio',
    titleAttr: 'Posts by Joy Jin',
    avatarSrc: '/images/Janet-headshot.jpg',
    bio: 'Joy is a freelance writer, editor, and avid learner. She loves listening to podcasts, discovering new apps, and exploring different places in Canada and abroad. Joy’s articles can be found on CBC, Chatelaine, Food Network, and more.',
  },
  publishedDate: 'Aug 21, 2025',
  featuredImage: {
    width: 640,
    height: 372,
    className: 'attachment-large size-large lozad wp-post-image',
    alt: 'disney logo',
    sizes: '(minwidth 1000px) 50vw, 75vw',
    src: '/images/07-28-25_Disney-Logo-Evolution_CULTURAL-1-1024x595.jpg',
    srcSet:
      '/images/07-28-25_Disney-Logo-Evolution_CULTURAL-1-1024x595.jpg 1024w, /images/07-28-25_Disney-Logo-Evolution_CULTURAL-1-600x349.jpg 600w, /images/07-28-25_Disney-Logo-Evolution_CULTURAL-1-768x446.jpg 768w, /images/07-28-25_Disney-Logo-Evolution_CULTURAL-1-1536x892.jpg 1536w, /images/07-28-25_Disney-Logo-Evolution_CULTURAL-1-350x203.jpg 350w, /images/07-28-25_Disney-Logo-Evolution_CULTURAL-1.jpg 2000w',
  },
};

export const ARTICLE_BLOCKS: ArticleBlock[] = [
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The Walt Disney Company, founded in 1923 by brothers Walt and Roy Disney, began as a small animation studio and quickly grew into one of the most influential entertainment empires in the world. From the creation of Mickey Mouse to groundbreaking theme parks and blockbuster films, Disney has continually shaped popular culture.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Today, the Disney logo—often accompanied by a sparkling castle and magical arc— represents a legacy of storytelling, childhood nostalgia, imagination, and a promise of family-friendly entertainment across generations.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'Disney logo evolution timeline',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33419',
      src: '/images/07-28-25_Disney-Logo-Evolution_INFOGRAPHIC-600x384.jpg',
      alt: 'disney logo timeline',
      width: 784,
      height: 502,
      srcSet:
        '/images/07-28-25_Disney-Logo-Evolution_INFOGRAPHIC-600x384.jpg 600w, /images/07-28-25_Disney-Logo-Evolution_INFOGRAPHIC-1024x655.jpg 1024w, /images/07-28-25_Disney-Logo-Evolution_INFOGRAPHIC-768x492.jpg 768w, /images/07-28-25_Disney-Logo-Evolution_INFOGRAPHIC-1536x983.jpg 1536w, /images/07-28-25_Disney-Logo-Evolution_INFOGRAPHIC-350x224.jpg 350w, /images/07-28-25_Disney-Logo-Evolution_INFOGRAPHIC.jpg 2000w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'eager',
    },
  },
  {
    type: 'list',
    items: [
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold: '1929–1937: First appearance of Mickey Mouse.',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' Featuring the handwritten-style “Walt Disney Productions” to accompany the early black-and-white Mickey Mouse cartoons.\u00a0',
          },
        ],
      },
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold: '1937–1948: Script wordmark.',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' A stylized script wordmark of “Walt Disney,” introducing the whimsical, flowing handwriting that would become iconic.\u00a0',
          },
        ],
      },
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold: '1948–1972: Updated script.',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' The logo evolved into a more refined and consistent script, solidifying the now-familiar “Walt Disney” signature as a recognizable brand mark.\u00a0',
          },
        ],
      },
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold: '1985: First castle animation in The Black Cauldron.',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' In 1985, the Disney logo made its first appearance as an animated castle in “The Black Cauldron”, marking a significant shift toward a more cinematic and magical brand identity.',
          },
        ],
      },
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold: '1986–2006: Walt Disney Pictures – standardized castle with fairy arc.',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' The Disney logo featured a standardized blue castle with a fairy-tale arc forming above it, paired with the “Walt Disney Pictures” wordmark—creating a timeless emblem.\u00a0',
          },
        ],
      },
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold:
          '2006: Launch of CGI logo with Pirates of the Caribbean: Dead Man’s Chest.',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' Disney unveiled a fully CGI-animated logo with the release of Pirates of the Caribbean: Dead Man’s Chest, featuring a detailed 3D castle, dynamic lighting, and sweeping camera movement.\u00a0',
          },
        ],
      },
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold: '2006–2011: Castle made more prominent.',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' The Disney logo emphasized a more prominent, richly detailed CGI castle, reinforcing the brand’s cinematic scale and enchanting legacy.',
          },
        ],
      },
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold: '2011–present: Disney’s logo today.',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' Disney’s logo features a sleek, modernized CGI castle with a glowing arc and the simplified “Disney” wordmark.\u00a0',
          },
        ],
      },
      {
        leadBold: '2023–2024: 100th Anniversary editions and special animated intros.',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' Disney celebrates its 100th anniversary with special edition logos and animated intros that honor its rich heritage, blending classic elements with fresh, celebratory visuals to highlight a century of storytelling magic and inspire new generations.',
          },
        ],
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: '1929–1937: The first appearance of Mickey Mouse',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33517',
      src: '/images/1929-Disney-Logo--600x319.png',
      alt: '1929 Disney Logo',
      width: 784,
      height: 417,
      srcSet:
        '/images/1929-Disney-Logo--600x319.png 600w, /images/1929-Disney-Logo--768x408.png 768w, /images/1929-Disney-Logo--350x186.png 350w, /images/1929-Disney-Logo-.png 790w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Between 1929 and 1937, the Disney logo was still in its infancy, evolving alongside the studio’s early animated work.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Early Disney productions used simple hand-scripted title cards that often featured “Walt Disney Productions” in plain or stylized lettering.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'These cards varied depending on the cartoon series like Silly Symphonies or Mickey Mouse shorts and reflected the hand-drawn, whimsical spirit of the era. The focus during this period was more on establishing characters like Mickey Mouse than on branding through a unified visual identity.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: '1937–1948: Going script',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33518',
      src: '/images/1937-Disney-Logo--600x319.png',
      alt: '1937 Disney Logo',
      width: 784,
      height: 417,
      srcSet:
        '/images/1937-Disney-Logo--600x319.png 600w, /images/1937-Disney-Logo--768x408.png 768w, /images/1937-Disney-Logo--350x186.png 350w, /images/1937-Disney-Logo-.png 790w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'From 1937 to 1948, the Disney logo started to take on a more recognizable form with the introduction of the distinctive ',
      },
      {
        type: 'link',
        text: 'script',
        href: '/?category=logo-design',
      },
      {
        type: 'text',
        weight: 400,
        text: ' wordmark.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'First seen in ',
      },
      {
        type: 'italic',
        text: 'Snow White and the Seven Dwarfs',
      },
      {
        type: 'text',
        weight: 400,
        text: ' (1937), this handwritten-style logo featured the name “Walt Disney” in a whimsical, flowing script that mirrored the studio’s playful and imaginative tone. This era marked the beginning of Disney’s visual brand identity, with the wordmark appearing more consistently across film openings and promotional materials.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Though still without the iconic castle, the script logo helped establish the studio’s signature look and became closely associated with the magic of Disney storytelling.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: '1948–1972: Short and sweet',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33519',
      src: '/images/1948-Disney-Logo--600x319.png',
      alt: '1948 Disney Logo',
      width: 784,
      height: 417,
      srcSet:
        '/images/1948-Disney-Logo--600x319.png 600w, /images/1948-Disney-Logo--768x408.png 768w, /images/1948-Disney-Logo--350x186.png 350w, /images/1948-Disney-Logo-.png 790w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Between 1948 and 1972, the Disney logo saw subtle refinements to the script wordmark as the studio matured and expanded its reach.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The original whimsical lettering was gradually streamlined, giving the “Walt Disney” name a cleaner and more polished appearance while preserving its playful curves and handwritten charm. This updated wordmark became a hallmark of the studio’s identity, appearing across animated features, merchandise, and marketing materials.',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Though still lacking a graphic symbol like the castle, this era solidified the script wordmark as a trusted and recognizable emblem of Disney’s growing legacy in family entertainment.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: '1985: The introduction of the castle',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33520',
      src: '/images/1985-Disney-Logo--600x319.png',
      alt: '1985 Disney Logo',
      width: 784,
      height: 417,
      srcSet:
        '/images/1985-Disney-Logo--600x319.png 600w, /images/1985-Disney-Logo--768x408.png 768w, /images/1985-Disney-Logo--350x186.png 350w, /images/1985-Disney-Logo-.png 790w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'In 1985, Disney introduced its first full castle animation logo, marking a major milestone in the company’s branding. Debuting with ',
      },
      {
        type: 'italic',
        text: 'The Black Cauldron',
      },
      {
        type: 'text',
        weight: 400,
        text: ', this version featured a white silhouette of a fairy-tale castle, inspired by Neuschwanstein Castle in Bavaria, Germany. The castle is accompanied by an arc of light forming a star that traced over the structure. It was paired with the iconic “Walt Disney Pictures” script beneath it.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'This animated logo brought a sense of wonder and cinematic magic to the opening of Disney films, reinforcing the studio’s identity as a creator of timeless fantasy and storytelling. It became the foundation for future logo evolutions.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: '1986–2006: Sparkles, castles, and fairy dust',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33521',
      src: '/images/1986-Disney-Logo--600x319.png',
      alt: '1986 Disney Logo',
      width: 784,
      height: 417,
      srcSet:
        '/images/1986-Disney-Logo--600x319.png 600w, /images/1986-Disney-Logo--768x408.png 768w, /images/1986-Disney-Logo--350x186.png 350w, /images/1986-Disney-Logo-.png 790w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'From 1986 to 2006, the Disney logo featured a standardized version of the castle with the signature fairy-tale arc, solidifying its place as a timeless brand symbol.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'This 2D logo, often rendered in blue and white, showcased a simplified silhouette of the castle with a shooting star drawing an arc overhead, representing Tinker Bell’s magic. The “Walt Disney Pictures” script sat below, reinforcing the company’s identity.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Used consistently across animated and live-action films, this era’s logo became instantly recognizable to audiences worldwide, symbolizing enchantment, storytelling, and cinematic tradition.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: '2006: Setting sail with Disney’s first CGI castle',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33522',
      src: '/images/2006-Disney-Logo--600x319.jpg',
      alt: '2006 Disney Logo',
      width: 784,
      height: 417,
      srcSet:
        '/images/2006-Disney-Logo--600x319.jpg 600w, /images/2006-Disney-Logo--768x408.jpg 768w, /images/2006-Disney-Logo--350x186.jpg 350w, /images/2006-Disney-Logo-.jpg 790w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'In 2006, Disney unveiled a fully CGI-animated logo with the release of ',
      },
      {
        type: 'italic',
        text: 'Pirates of the Caribbean: Dead Man’s Chest',
      },
      {
        type: 'text',
        weight: 400,
        text: ', marking a dramatic evolution in the studio’s visual identity.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'This new logo featured a detailed, three-dimensional rendering of the castle, complete with towers, flags, fireworks, and a sweeping camera movement that gave it a grand, cinematic feel. The iconic arc of light remained, now integrated with the more immersive animation.',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The words “Walt Disney Pictures” appeared in a refined version of the classic script. This updated logo reflected the studio’s embrace of modern technology and set a new standard for branding in the digital age.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: '2006–2011: The castle takes center stage',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33523',
      src: '/images/2006-1-Disney-Logo--600x319.png',
      alt: '2006-1 Disney Logo',
      width: 784,
      height: 417,
      srcSet:
        '/images/2006-1-Disney-Logo--600x319.png 600w, /images/2006-1-Disney-Logo--768x408.png 768w, /images/2006-1-Disney-Logo--350x186.png 350w, /images/2006-1-Disney-Logo-.png 790w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'From 2006 to 2011, the Disney logo continued to evolve with enhancements to the CGI castle introduced in ',
      },
      {
        type: 'italic',
        text: 'Pirates of the Caribbean: Dead Man’s Chest',
      },
      {
        type: 'text',
        weight: 400,
        text: '. During this period, the logo became more intricate and cinematic, featuring a richly detailed castle inspired by a blend of real and fantasy architecture, including elements from Neuschwanstein Castle and Disney park icons.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The animation incorporated a sweeping flyover of a magical kingdom, complete with surrounding landscape, rivers, and fireworks, elevating the sense of grandeur. This version reinforced Disney’s identity as both a storytelling powerhouse and a visual innovator, bridging classic charm with modern spectacle.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: '2011–present: The icon that keeps evolving',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33524',
      src: '/images/2011-Disney-Logo--600x319.jpg',
      alt: '2011 Disney Logo',
      width: 784,
      height: 417,
      srcSet:
        '/images/2011-Disney-Logo--600x319.jpg 600w, /images/2011-Disney-Logo--768x408.jpg 768w, /images/2011-Disney-Logo--350x186.jpg 350w, /images/2011-Disney-Logo-.jpg 790w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The CGI castle introduced in 2006 remains but with refined updates. The “Walt Disney Pictures” text was shortened to simply “Disney,” reflecting the brand’s global recognition and streamlined identity.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The animation sequence often varies in color palette to match the mood of each film. This contemporary version balances tradition and innovation, symbolizing Disney’s ongoing evolution as a leader in storytelling across film, streaming, and beyond.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: '2023–2024: Celebrating 100 years of Disney magic',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33525',
      src: '/images/2023-Disney-Logo--600x319.jpg',
      alt: '2023 Disney Logo',
      width: 784,
      height: 417,
      srcSet:
        '/images/2023-Disney-Logo--600x319.jpg 600w, /images/2023-Disney-Logo--768x408.jpg 768w, /images/2023-Disney-Logo--350x186.jpg 350w, /images/2023-Disney-Logo-.jpg 790w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'In 2023–2024, to celebrate its 100th anniversary, Disney introduced special editions of its iconic logo under the “Disney100” banner.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'These commemorative versions featured a redesigned CGI castle rendered in platinum tones, symbolizing the centennial milestone, along with sparkling visual effects and orchestral variations of classic Disney themes. Embedded within the sequence are subtle nods to decades of Disney’s legacy: landmarks and motifs from Pocahontas, Tangled, Brave, The Hunchback of Notre Dame, The Little Mermaid, theme-park icons like Pride Rock and Matterhorn, and even a Disneyland-style locomotive appear.\u00a0\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The “Disney100” wordmark often appeared beneath the castle, reinforcing the celebratory branding. This limited-time logo honored a century of imagination, innovation, and storytelling, marking a historic moment in the studio’s evolution.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'Key design elements of the Disney logo',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Logo color',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33420',
      src: '/images/07-28-25_Disney-Logo-Evolution_PALETTE-600x212.jpg',
      alt: 'disney logo color palette',
      width: 784,
      height: 278,
      srcSet:
        '/images/07-28-25_Disney-Logo-Evolution_PALETTE-600x212.jpg 600w, /images/07-28-25_Disney-Logo-Evolution_PALETTE-1024x362.jpg 1024w, /images/07-28-25_Disney-Logo-Evolution_PALETTE-768x272.jpg 768w, /images/07-28-25_Disney-Logo-Evolution_PALETTE-1536x544.jpg 1536w, /images/07-28-25_Disney-Logo-Evolution_PALETTE-350x124.jpg 350w, /images/07-28-25_Disney-Logo-Evolution_PALETTE.jpg 2000w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The Disney logo traditionally uses white, blue, and silver. White symbolizes purity and trust, blue evokes wonder and imagination, and silver adds a touch of creativity and magic. These colors create a timeless, elegant palette that resonates with audiences worldwide.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'During holidays or special events, Disney might customize the logo’s colors to match festive themes, while also adjusting tones to suit dark or light mode displays. This ensures the logo remains striking and recognizable in any context.',
      },
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Logo symbols',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33528',
      src: '/images/Disney-world-castle-600x398.jpg',
      alt: 'Disney world castle',
      width: 784,
      height: 521,
      srcSet:
        '/images/Disney-world-castle-600x398.jpg 600w, /images/Disney-world-castle-1024x680.jpg 1024w, /images/Disney-world-castle-768x510.jpg 768w, /images/Disney-world-castle-1536x1020.jpg 1536w, /images/Disney-world-castle-350x232.jpg 350w, /images/Disney-world-castle.jpg 1920w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'At the heart of the Disney logo is the iconic castle, inspired by Germany’s Neuschwanstein Castle, though it’s not an exact replica. While many assume it depicts Sleeping Beauty or Cinderella’s Castle, the design is actually a stylized version of a real building.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The Walt Disney logo, crowned by its iconic castle, is a visual gateway to a world where imagination knows no bounds. The castle itself symbolizes a fairy-tale kingdom, a place where extraordinary adventures unfold and impossible dreams come true. Its soaring spires and graceful arches evoke the classic imagery of enchanted castles found in stories passed down through generations, instantly transporting viewers into a realm of fantasy.',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Over time, the castle has evolved from a static image into elaborate animated sequences, with shimmering lights, flying pixie dust, and dynamic camera movements that enhance its enchanting presence and invite viewers into a world of wonder.',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'This progression from a flat image to a fully animated experience mirrors Disney’s own growth, from classic hand-drawn animation to cutting-edge visual effects, inviting audiences to step into a living world of fantasy and wonder every time the logo appears.',
      },
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Logo font',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33418',
      src: '/images/07-28-25_Disney-Logo-Evolution_HEADER-600x349.jpg',
      alt: 'disney logo fonts',
      width: 784,
      height: 456,
      srcSet:
        '/images/07-28-25_Disney-Logo-Evolution_HEADER-600x349.jpg 600w, /images/07-28-25_Disney-Logo-Evolution_HEADER-1024x595.jpg 1024w, /images/07-28-25_Disney-Logo-Evolution_HEADER-768x446.jpg 768w, /images/07-28-25_Disney-Logo-Evolution_HEADER-1536x892.jpg 1536w, /images/07-28-25_Disney-Logo-Evolution_HEADER-350x203.jpg 350w, /images/07-28-25_Disney-Logo-Evolution_HEADER.jpg 2000w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The Disney logo’s font is inspired by Walt Disney’s signature, capturing the whimsical and playful spirit associated with the brand.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The Disney logo is best described as a custom wordmark—a typographic logo that uses unique, hand-drawn letterforms inspired by Walt Disney’s signature style but not his actual handwriting.\u00a0',
      },
    ],
  },
  {
    type: 'pullquote',
    linkText: 'A wordmark',
    linkHref: '/blog/article/?slug=wordmark-logo-design',
    afterText:
      ' is a logo made entirely from stylized text, where the type itself serves as the distinctive visual identity. ',
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Many Disney fans use what’s known as the “Waltograph” font to emulate the Disney brand. This is a fan made font, and not officially associated with Disney’s brand in any way.',
      },
    ],
  },
  {
    type: 'heading',
    level: 3,
    text: 'Logo variations',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33421',
      src: '/images/07-28-25_Disney-Logo-Evolution_LOGO-VARIATIONS-600x349.jpg',
      alt: 'disney logo variations',
      width: 784,
      height: 456,
      srcSet:
        '/images/07-28-25_Disney-Logo-Evolution_LOGO-VARIATIONS-600x349.jpg 600w, /images/07-28-25_Disney-Logo-Evolution_LOGO-VARIATIONS-1024x595.jpg 1024w, /images/07-28-25_Disney-Logo-Evolution_LOGO-VARIATIONS-768x446.jpg 768w, /images/07-28-25_Disney-Logo-Evolution_LOGO-VARIATIONS-1536x892.jpg 1536w, /images/07-28-25_Disney-Logo-Evolution_LOGO-VARIATIONS-350x203.jpg 350w, /images/07-28-25_Disney-Logo-Evolution_LOGO-VARIATIONS.jpg 2000w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'list',
    items: [
      {
        ariaLevel: 1,
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'Anniversary versions (100 Years of Wonder, 50th anniversary)',
          },
        ],
      },
    ],
  },
  {
    type: 'list',
    items: [
      {
        ariaLevel: 1,
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'Custom versions for Pixar, Marvel, Star Wars',
          },
        ],
      },
    ],
  },
  {
    type: 'list',
    items: [
      {
        ariaLevel: 1,
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'Holiday-specific versions (Halloween, Christmas)',
          },
        ],
      },
    ],
  },
  {
    type: 'list',
    items: [
      {
        ariaLevel: 1,
        fontWeight400: true,
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'Disney logo variants across platforms:',
          },
        ],
        subItems: [
          [
            {
              type: 'text',
              weight: 400,
              text: 'Disney Channel: Wand-drawn logo intros and TV adaptations',
            },
          ],
          [
            {
              type: 'text',
              weight: 400,
              text: 'Disney+: Minimalist, digital-optimized version of the logo',
            },
          ],
          [
            {
              type: 'text',
              weight: 400,
              text: 'ABC, Disney XD: Network-specific logo branding',
            },
          ],
          [
            {
              type: 'text',
              weight: 400,
              text: 'Buena Vista Distribution: Pre-castle era distribution branding',
            },
          ],
        ],
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'The Disney logo has seen several special variations over the years to celebrate milestones and occasions. Anniversary versions, like the “100 Years of Wonder” logo and the 50th anniversary edition, feature added elements such as commemorative text, enhanced sparkles, or special color schemes to honor Disney’s rich history.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Customized logos also appear for Disney’s major subsidiaries—Pixar, Marvel, and Star Wars—each incorporating distinctive style elements or thematic motifs that reflect their unique worlds while maintaining Disney’s signature magic.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Holiday-specific versions of the logo adapt colors and decorations to match seasonal festivities, with spooky accents for Halloween or festive reds and greens for Christmas, creating timely, engaging visuals that connect emotionally with audiences during special times of the year.',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Disney adapts its logo thoughtfully across platforms to suit different audiences and formats. On ',
      },
      { type: 'strong', text: 'Disney Channel' },
      {
        type: 'text',
        weight: 400,
        text: ', the logo often appears with charming wand-drawn intros and playful animations that capture the network’s youthful, energetic vibe, making it instantly recognizable to TV viewers.\u00a0',
      },
    ],
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33526',
      src: '/images/Disney-plus-logo-600x319.png',
      alt: 'Disney plus logo',
      width: 784,
      height: 417,
      srcSet:
        '/images/Disney-plus-logo-600x319.png 600w, /images/Disney-plus-logo-768x408.png 768w, /images/Disney-plus-logo-350x186.png 350w, /images/Disney-plus-logo.png 790w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      { type: 'text', weight: 400, text: 'For ' },
      { type: 'strong', text: 'Disney+' },
      {
        type: 'text',
        weight: 400,
        text: ', the logo is streamlined into a minimalist, digital-optimized version—clean, sleek, and designed for clarity on screens of all sizes.',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      { type: 'text', weight: 400, text: 'Networks like ' },
      { type: 'strong', text: 'ABC' },
      { type: 'text', weight: 400, text: ' and ' },
      { type: 'strong', text: 'Disney XD' },
      {
        type: 'text',
        weight: 400,
        text: ' feature network-specific branding that blends their unique identities with Disney’s signature style, tailoring colors, effects, or typography to fit their programming and target audiences.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Before the iconic castle logo, ',
      },
      { type: 'strong', text: 'Buena Vista Distribution' },
      {
        type: 'text',
        weight: 400,
        text: ' served as Disney’s pre-castle-era branding, with simpler, classic wordmarks that marked the company’s early foray into film distribution, laying groundwork for the brand’s later visual evolution.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'Cultural & emotional significance of the Disney logo',
  },
  {
    type: 'image-paragraph',
    image: {
      className: 'aligncenter wp-image-33422',
      src: '/images/07-28-25_Disney-Logo-Evolution_CULTURAL-600x349.jpg',
      alt: 'disney logo cultural impact',
      width: 784,
      height: 456,
      srcSet:
        '/images/07-28-25_Disney-Logo-Evolution_CULTURAL-600x349.jpg 600w, /images/07-28-25_Disney-Logo-Evolution_CULTURAL-1024x595.jpg 1024w, /images/07-28-25_Disney-Logo-Evolution_CULTURAL-768x446.jpg 768w, /images/07-28-25_Disney-Logo-Evolution_CULTURAL-1536x892.jpg 1536w, /images/07-28-25_Disney-Logo-Evolution_CULTURAL-350x203.jpg 350w, /images/07-28-25_Disney-Logo-Evolution_CULTURAL.jpg 2000w',
      sizes: '(max-width: 784px) 100vw, 784px',
      loading: 'lazy',
    },
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Recognized around the world, Disney’s logo carries deep cultural and emotional significance, symbolizing childhood wonder and lasting family memories across generations. For older audiences, it evokes nostalgia for classic animated films and Saturday morning cartoons, while younger viewers connect it to recent blockbusters and streaming favorites.',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Beyond the screen, the logo is everywhere: in theme parks, on toys and clothing, and across merchandise, becoming a trusted emblem of joy, imagination, and quality. It even appears in memes and pop culture references, reflecting its timeless relevance.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Paired with iconic soundtrack cues like “When You Wish Upon a Star,” the logo triggers powerful emotional responses, instantly transporting viewers to a world where dreams come true.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'Lessons from Disney’s logo evolution',
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Disney’s logo evolution offers powerful lessons in branding: stay timeless while adapting. By balancing nostalgia with innovation, Disney preserves its emotional core while embracing new visual technologies and cultural trends.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'From hand-drawn scripts to CGI castles, its evolving identity reflects changing media landscapes without losing its magic. One key takeaway is emotional consistency—by maintaining a sense of wonder and trust, Disney has built generational brand equity that resonates with audiences of all ages.\u00a0',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'For startups and creators, the message is clear: build a logo that captures your essence, stay visually flexible, and let your brand grow with your audience while staying true to your story.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    text: 'Create your own magical logo with Looka',
  },
  {
    type: 'gallery',
    id: 'gallery-1',
    className: 'gallery galleryid-33416 gallery-columns-3 gallery-size-medium',
    items: [
      {
        href: '/images/07-28-25_Disney-Logo-Evolution_LOGO-2.jpg',
        image: {
          className: 'attachment-medium size-medium lozad',
          width: 600,
          height: 600,
          src: '/images/07-28-25_Disney-Logo-Evolution_LOGO-2-600x600.jpg',
          srcSet:
            '/images/07-28-25_Disney-Logo-Evolution_LOGO-2-600x600.jpg 600w, /images/07-28-25_Disney-Logo-Evolution_LOGO-2-150x150.jpg 150w, /images/07-28-25_Disney-Logo-Evolution_LOGO-2-768x768.jpg 768w, /images/07-28-25_Disney-Logo-Evolution_LOGO-2-350x350.jpg 350w, /images/07-28-25_Disney-Logo-Evolution_LOGO-2-365x365.jpg 365w, /images/07-28-25_Disney-Logo-Evolution_LOGO-2.jpg 1000w',
          sizes: '(max-width: 600px) 100vw, 600px',
          alt: 'logo made in Looka inspired by Disney logo',
          loading: 'lazy',
        },
      },
      {
        href: '/images/07-28-25_Disney-Logo-Evolution_LOGO-3.jpg',
        image: {
          className: 'attachment-medium size-medium lozad',
          width: 600,
          height: 600,
          src: '/images/07-28-25_Disney-Logo-Evolution_LOGO-3-600x600.jpg',
          srcSet:
            '/images/07-28-25_Disney-Logo-Evolution_LOGO-3-600x600.jpg 600w, /images/07-28-25_Disney-Logo-Evolution_LOGO-3-150x150.jpg 150w, /images/07-28-25_Disney-Logo-Evolution_LOGO-3-768x768.jpg 768w, /images/07-28-25_Disney-Logo-Evolution_LOGO-3-350x350.jpg 350w, /images/07-28-25_Disney-Logo-Evolution_LOGO-3-365x365.jpg 365w, /images/07-28-25_Disney-Logo-Evolution_LOGO-3.jpg 1000w',
          sizes: '(max-width: 600px) 100vw, 600px',
          alt: '',
          loading: 'lazy',
        },
      },
      {
        href: '/images/07-28-25_Disney-Logo-Evolution_LOGO-1.jpg',
        image: {
          className: 'attachment-medium size-medium lozad',
          width: 600,
          height: 600,
          src: '/images/07-28-25_Disney-Logo-Evolution_LOGO-1-600x600.jpg',
          srcSet:
            '/images/07-28-25_Disney-Logo-Evolution_LOGO-1-600x600.jpg 600w, /images/07-28-25_Disney-Logo-Evolution_LOGO-1-150x150.jpg 150w, /images/07-28-25_Disney-Logo-Evolution_LOGO-1-768x768.jpg 768w, /images/07-28-25_Disney-Logo-Evolution_LOGO-1-350x350.jpg 350w, /images/07-28-25_Disney-Logo-Evolution_LOGO-1-365x365.jpg 365w, /images/07-28-25_Disney-Logo-Evolution_LOGO-1.jpg 1000w',
          sizes: '(max-width: 600px) 100vw, 600px',
          alt: '',
          loading: 'lazy',
        },
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Start designing today and craft a logo that connects, evolves, and inspires.',
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'To capture the spirit of Disney’s logo evolution in your own design, consider these visual cues:',
      },
    ],
  },
  {
    type: 'list',
    items: [
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold: 'Script fonts:',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' Use whimsical, flowing typefaces that evoke personality and charm—ideal for conveying creativity and warmth. Think custom, signature-inspired lettering.',
          },
        ],
      },
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold: 'Pastel palettes:',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' Soft blues, pinks, purples, and silvers create a dreamy, nostalgic atmosphere while maintaining a modern, approachable look.',
          },
        ],
      },
      {
        ariaLevel: 1,
        fontWeight400: true,
        leadBold: 'Storybook themes:',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: ' Incorporate elements like castles, stars, arcs, or magical sparkles to evoke fantasy and imagination—perfect for logos tied to storytelling, entertainment, or child-focused brands.',
          },
        ],
      },
    ],
  },
  {
    type: 'paragraph',
    parts: [
      {
        type: 'text',
        weight: 400,
        text: 'Bring your brand to life with a logo that feels timeless and magical — try Looka’s ',
      },
      {
        type: 'link',
        text: 'logo maker.',
        href: '#bottom-cta',
      },
    ],
  },
  { type: 'hr' },
  {
    type: 'faq',
    heading: 'Frequently asked questions about the Disney logo',
    items: [
      {
        question: 'Who designed the Disney logo?',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'The Disney logo evolved over time and wasn’t designed by a single person. The original wordmark was inspired by Walt Disney’s stylized signature, while later castle versions were developed by Disney’s in-house design and animation teams.',
          },
        ],
      },
      {
        question: 'What font is the Disney logo?',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'The Disney logo is a custom wordmark—not an actual font—based on a stylized version of Walt Disney’s signature. A popular fan-made font called Waltograph mimics the look, but is not officially used by Disney.',
          },
        ],
      },
      {
        question: 'What castle is in the Disney logo?',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'The castle in the Disney logo is inspired by Neuschwanstein Castle in Germany, though it is not an exact replica. It’s often mistaken for Cinderella’s Castle but is actually a unique, stylized creation designed to represent fantasy and imagination.',
          },
        ],
      },
      {
        question: 'What was the first movie to feature the Disney castle?',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'The first movie to feature the animated Disney castle logo was ',
          },
          { type: 'italic', text: 'The Black Cauldron' },
          {
            type: 'text',
            weight: 400,
            text: ' in 1985, marking the beginning of the now-iconic castle intro.',
          },
        ],
      },
      {
        question: 'How has the Disney logo changed over time?',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'The Disney logo has evolved from a simple script wordmark in the early years to a detailed animated castle sequence. Over time, it has embraced new technologies—like CGI in 2006—and adapted its design for various platforms while maintaining its core themes of magic and imagination.',
          },
        ],
      },
      {
        question: 'What is the origin of the Disney castle logo?',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'The castle was inspired by Neuschwanstein Castle in Germany and first appeared in animated form in 1985. Though often mistaken for Cinderella’s Castle, it’s a custom, stylized design meant to evoke the feeling of a fairy-tale kingdom.',
          },
        ],
      },
      {
        question: 'Why did Disney update its logo in 2006?',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'The 2006 update introduced a fully CGI animated castle to reflect Disney’s modern cinematic scale and storytelling ambition. It featured more detail, dynamic movement, and enhanced visual effects—marking a leap forward in branding for the digital age.',
          },
        ],
      },
      {
        question: 'How does the logo change during anniversaries or special releases?',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'During milestones like the 50th or 100th anniversary, Disney adds special elements—such as celebratory text, unique color schemes, or themed animations—to honor its legacy. The logo also adapts for holidays and franchise-specific films (like Marvel or Star Wars) with customized visuals.',
          },
        ],
      },
      {
        question: 'Is the Disney logo different on Disney+?',
        parts: [
          {
            type: 'text',
            weight: 400,
            text: 'Yes, on Disney+, the logo is often presented in a simplified, digital-optimized version with cleaner lines and minimal animation. It’s designed to be instantly recognizable and screen-friendly across a wide range of devices.',
          },
        ],
      },
    ],
  },
];

export const RECOMMENDED_ARTICLES: RecommendedArticle[] = [
  {
    title: 'Wordmark Logo Design: A Beginner’s Guide',
    href: '/blog/article/?slug=wordmark-logo-design',
    category: 'Logo Design',
    categoryHref: '/?category=logo-design',
    backgroundImage:
      'https://cdn.logojoy.com/wp-content/uploads/20220721143132/wordmark-logo-blog-header-768x432.jpg',
  },
  {
    title: 'How to Design a Logo: A Step-by-Step Guide',
    href: '/blog/article/?slug=how-to-design-a-logo',
    category: 'Logo Design',
    categoryHref: '/?category=logo-design',
    backgroundImage:
      'https://cdn.logojoy.com/wp-content/uploads/20240819130730/08-13-24_How-to-Design-a-Logo_HEADER-768x446.jpg',
  },
  {
    title: '46 Stunning Aesthetic Logos and How to Design Your Own',
    href: '/blog/article/?slug=aesthetic-logo',
    category: 'Logo Design',
    categoryHref: '/?category=logo-design',
    backgroundImage:
      'https://cdn.logojoy.com/wp-content/uploads/20230427153745/aesthetic-logos-header-image-768x576.png',
  },
];
