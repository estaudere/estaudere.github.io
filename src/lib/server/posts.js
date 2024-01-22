import { parse } from 'path';
import glob from 'fast-glob'; // Add missing import statement
// Get all posts and add metadata
export const posts = Object.entries(
  import.meta.glob('../private_posts/**/*.md', { eager: true }) // Modify import statement to use glob.sync
)
.map(([filepath, globEntry]) => {
    return {
      ...globEntry.metadata,

      // generate the slug from the file path
      slug: parse(filepath).name,
    };
});