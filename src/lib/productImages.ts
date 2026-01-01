// Product Image Imports
import lionsManMain from '@/assets/products/lions-mane-main.jpg';
import lionsManeLifestyle from '@/assets/products/lions-mane-lifestyle.jpg';
import reishiMain from '@/assets/products/reishi-main.jpg';
import cordycepsMain from '@/assets/products/cordyceps-main.jpg';
import chagaMain from '@/assets/products/chaga-main.jpg';
import turkeyTailMain from '@/assets/products/turkey-tail-main.jpg';
import blendMain from '@/assets/products/blend-main.jpg';
import heroBanner from '@/assets/hero-banner.jpg';

export const productImages: Record<string, string[]> = {
  'lions-mane-focus-blend': [lionsManMain, lionsManeLifestyle],
  'reishi-calm-immunity': [reishiMain, lionsManeLifestyle],
  'cordyceps-energy-boost': [cordycepsMain, lionsManeLifestyle],
  'chaga-antioxidant-shield': [chagaMain, lionsManeLifestyle],
  'turkey-tail-gut-health': [turkeyTailMain, lionsManeLifestyle],
  '5-mushroom-daily-blend': [blendMain, lionsManeLifestyle],
};

export const getProductImages = (slug: string): string[] => {
  return productImages[slug] || [lionsManMain];
};

export { heroBanner };
