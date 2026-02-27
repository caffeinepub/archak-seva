# Specification

## Summary
**Goal:** Replace the existing generated logo in the Navigation bar and Footer with the user-provided "ARCHAK" bubble-text logo image.

**Planned changes:**
- Save the uploaded ARCHAK logo image as a static asset at `frontend/public/assets/generated/logo.dim_300x120.png`
- Update the `<img>` src references in `Navigation.tsx` and `Footer.tsx` to point to the new logo file

**User-visible outcome:** The green bubble-text "ARCHAK" wordmark appears in the navigation bar and footer, replacing the previously generated logo.
