# Images Folder

This folder is for storing image assets for the portfolio website.

## Recommended Images

1. **profile-photo.jpg** - Professional headshot or profile picture
   - Recommended size: 500x500px
   - Format: JPG or PNG
   - Use for hero section

2. **favicon.ico** - Website favicon
   - Size: 32x32px or 16x16px
   - Format: ICO
   - Add to HTML head

3. **og-image.jpg** - Open Graph image for social media sharing
   - Recommended size: 1200x630px
   - Format: JPG or PNG

## Usage

To use your profile photo, replace the icon in the hero section of `index.html`:

```html
<div class="profile-img">
    <img src="profile-photo.jpg" alt="Sher Muhammad">
</div>
```

Update the CSS in `styles.css` for the profile image:

```css
.profile-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

## Adding Favicon

Add this to the `<head>` section of `index.html`:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## Optimization Tips

- Compress images before uploading to improve page load speed
- Use WebP format for better compression (with JPG/PNG fallbacks)
- Recommended tools: TinyPNG, ImageOptim, or Squoosh
