export const DefaultFocusableElements = [
  'a[href]',
  'area[href]',
  'button',
  'details',
  'input',
  'iframe',
  'select',
  'textarea',
  '[tabindex]:not([tabindex="-1"])',
]
  .map((s) => `${s}:not([disabled])`)
  .join(',');

export function windowWidth(): number {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

export function forceFocusElement(targetElement: HTMLElement): void {
  if (targetElement) {
    const hasTabIndex = !!targetElement.getAttribute('tabindex');

    const isDefaultFocusableElement = targetElement.matches(
      DefaultFocusableElements,
    );

    if (!hasTabIndex && !isDefaultFocusableElement) {
      targetElement.setAttribute('tabindex', '-1');
    }
    targetElement.focus();
  }
}

/**
 * Return the first pointer (either mouse or touch) of the passed event
 *
 * @todo write with correct types
 */
export function getPointerFrom(event: Event | TouchEvent): MouseEvent | Touch {
  let pointer: unknown = event;
  if ('touches' in event && event.touches) {
    [pointer] = event.touches;
  }

  return pointer as MouseEvent | Touch;
}
