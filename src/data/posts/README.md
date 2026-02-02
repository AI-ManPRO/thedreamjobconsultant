# Blog Posts Data

This directory contains the content for the blog posts on the site. Each file exports a `BlogPost` object.

## Image Standards

To maintain visual consistency and prevent errors, please follow these guidelines when adding or updating blog post images:

### Main Post Image
- **Path:** `public/images/blog/[slug].png` (or .jpg)
- **Reference:** The `image` property in the `BlogPost` object.
- **Example:** `image: '/images/blog/my-new-post.png'`

### Inner Content Images
- **Path:** `public/images/blog/[slug]-inner-[index].png`
- **Reference:** Inside the `content` HTML string.
- **Format:** flat vector art style, professional, blue and white colors (Brand Identity).
- **Example:**
  ```html
  <img 
    src="/images/blog/my-new-post-inner-1.png" 
    alt="Descriptive text" 
    class="w-full rounded-lg shadow-lg my-8" 
  />
  ```

### Placeholder Replacement
If you are drafting a post and don't have an image yet, **do not leave a raw placeholder `<div>` in the final code**.
1. Generate the image using the established style.
2. Place it in `public/images/blog/`.
3. Link it directly in the `content`.

**Note:** Previous "blue box" placeholders have been programmatically replaced. Do not re-introduce them.

## File Structure
- `src/data/posts/*.ts`: Individual blog post data files.
- `src/data/blog-posts.ts`: Main registry/export file (if applicable).
