/**
 * Navigation utilities for determining active routes
 */

/**
 * Check if a nav item is active based on current pathname
 * - Home ("/") requires exact match
 * - Other routes match if pathname starts with the href
 *
 * @param href - The href of the navigation item
 * @param pathname - The current page pathname
 * @returns true if the navigation item should be marked as active
 */
export function isActive(href: string, pathname: string): boolean {
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  if (href === '/') {
    return normalizedPath === '/';
  }
  return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
}
