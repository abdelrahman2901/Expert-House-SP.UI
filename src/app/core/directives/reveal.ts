import { DestroyRef, Directive, ElementRef, afterNextRender, inject, signal } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.is-visible]': 'visible()',
  },
})
export class Reveal {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly visible = signal(false);

  constructor() {
    afterNextRender(() => {
      const element = this.host.nativeElement;
      const reduce =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (reduce || typeof IntersectionObserver === 'undefined') {
        this.visible.set(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) {
            return;
          }

          this.visible.set(true);
          observer.disconnect();
        },
        { threshold: 0.01, rootMargin: '0px 0px -32px 0px' },
      );

      observer.observe(element);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
